import instance from './axios';

interface CreateTokenResponse {
  Data: string;
  Message: string;
}

interface CreateTokenProps {
  file: FileList;
  collectionId: string;
  name: string;
  description: string;
}

export const createToken = async ({
  file,
  collectionId,
  name,
  description,
}: CreateTokenProps) => {
  const formData = new FormData();

  formData.append('file', file[0]);
  formData.append('collection-id', collectionId);
  formData.append('name', name);
  formData.append('description', description);

  const { data } = await instance.post<CreateTokenResponse>(
    '/create',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
