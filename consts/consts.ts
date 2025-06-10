import { Accept } from 'react-dropzone';

export const tokens = [
  process.env.NODE_ENV === 'production'
    ? '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    : '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
];
export const accept: Accept = {
  'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'],
  'video/*': ['.mp4', '.mov', '.webm', '.avi', '.wmv', '.flv', '.mkv'],
  'audio/*': ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4', '.wma'],
};
