import { getServerSession } from "next-auth/next"
import { NextApiRequest, NextApiResponse } from "next"
import { options } from "./auth/[...nextauth]"
import multer from 'multer';
import FormData from 'form-data';
import instance from '../../api/axios'
import { createReadStream } from "fs";

export const config = {
  api: {
    bodyParser: false
  }
}


// Create a multer instance
const upload = multer({ dest: 'uploads/' }).single("avatarFile");

// API handler function
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, options)
    if (!session?.user?.address) {
      return res.status(401).json({ error: 'Session does not exist' });
    }

    // Signed in
    console.log("Welcome", session.user.address)

    upload(req, res, (err) => {
      if (err) {
        console.log("There was an error uploading the image.", err);
        return res.status(500).json({ error: "Error uploading the image" })
      }
      const file: Express.Multer.File = (req as any).file as Express.Multer.File;
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      console.log("Uploaded", file.originalname, 'as', file.path)
      // Create a new form data object
      const formData = new FormData();
      const fileStream = createReadStream(file.path);
      formData.append('file', fileStream);
      formData.append('user', session.user.address);

      // Make an HTTP POST request to the other backend server
      instance.post('/setAvatar', formData, {
        headers: formData.getHeaders(),
      }).then(response => {
        // Forward the response from the other backend server to the client
        console.log(response)
        res.status(response.status).json(response.data);
        // res.redirect("/profile")
        res.end()
      }).catch(reason => {
        console.log(reason)
        res.status(500).json({error: "Unable to forward avatar to storage"});
        res.end()
      })
    })
  } catch (error: any) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
