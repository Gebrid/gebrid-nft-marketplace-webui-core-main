import Image from 'next/image';

interface Props {
  theme: string | 'theme-light' | 'theme-dark';
  clear: () => void;
}

export const ButtonRemove = ({ theme, clear }: Props) => {
  return (
    <span className={'dropAreaRemove'} onClick={clear}>
      <Image
        src={
          '/images/icons/icon-cross-circle-' +
          (theme == 'theme-dark' ? 'dark' : 'light') +
          '.svg'
        }
        width={32}
        height={32}
        alt=""
      />
    </span>
  );
};
