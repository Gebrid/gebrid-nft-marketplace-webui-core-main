const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function handler(req: any, res: any) {
    //const session = await NextAuth.getSession({ req, disableAuth: true });
    console.log('sending email')
    if (req.method === 'POST') {
        const { to } = req.body;
        console.log('email to', to)

        const msg = {
            to,
            from: 'unordered_set@tutanota.com',
            subject: 'Test Gebrid Subscription',
            text: 'Subscribe for updates. Please follow ${thisHost}/campain/${token}',
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(404).json({ error: 'Invalid request method' });
    }
}
