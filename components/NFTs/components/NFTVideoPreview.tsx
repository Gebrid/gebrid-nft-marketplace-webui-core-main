import ReactPlayer from 'react-player';
import { IFile } from 'types/types';

export const NFTVideoPreview = ({ file }: IFile) => {
  return (
    <ReactPlayer
      width={'100%'}
      height={'100%'}
      url={`${process.env.NEXT_PUBLIC_BACKEND_PROTOCOL}://${file}`}
    />
  );
};
