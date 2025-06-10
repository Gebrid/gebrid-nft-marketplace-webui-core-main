import styles from '../styles/ProfileWrapper.module.scss';

interface Props {
  theme: string | 'theme-light' | 'theme-dark';
}

export const AddCover = ({ theme }: Props) => {
  return (
    <div
      className={
        styles.profileCoverWrapper +
        (theme == 'theme-dark' ? ' ' + styles.dark : '')
      }
    >
      <button
        className={
          styles.addCover + (theme == 'theme-dark' ? ' ' + styles.dark : '')
        }
      >
        Add Cover
      </button>
    </div>
  );
};
