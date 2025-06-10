import { NFTAudioPreview } from './NFTAudioPreview';
import { NFTImagePreview } from './NFTImagePreview';
import { NFTVideoPreview } from './NFTVideoPreview';

export const RenderPreviewByType = (type: string, file: string) => {
  if (type?.includes('video')) return <NFTVideoPreview file={file} />;

  if (type?.includes('application')) return <NFTAudioPreview file={file} />;

  return <NFTImagePreview file={file} />;
};
