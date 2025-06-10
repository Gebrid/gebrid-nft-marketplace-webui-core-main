import Image from 'next/image';
import { IFile } from 'types/types';
import styles from '../styles/NFTCard.module.scss';

export const NFTImagePreview = ({ file }: IFile) => {
  return file ? (
    <Image
      layout="responsive"
      className={styles.NFTCardImage}
      src={`${process.env.NEXT_PUBLIC_BACKEND_PROTOCOL}://${file}`}
      width={246}
      height={310}
      alt="image"
    />
  ) : null;
};
