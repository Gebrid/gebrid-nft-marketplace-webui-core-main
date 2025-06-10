import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';
import styles from '../styles/Artist.module.scss';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  id: string;
  image: string;
  name: string;
};

const Artist = (props: Props) => {
  const { theme, id, name, image } = props;

  return (
    <div
      className={classNames(styles.artistCard, {
        [styles.artistCardLight]: theme === 'theme-light',
        [styles.artistCardDark]: theme === 'theme-dark',
      })}
    >
      <Link href={`/artists/artist/${id}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            layout={'fill'}
            objectFit={'cover'}
            objectPosition={'center'}
            alt="Artist Avatar"
          />
        </div>
      </Link>
      <div className={styles.artistFooter}>
        <div className={styles.artistTitle}>Artist</div>
        <div>
          <FontAwesomeIcon
            className={styles.artistHeart}
            icon={faHeart}
            size={'2xl'}
            href="#"
          />
        </div>
      </div>
      <div className={styles.artistName}>{name}</div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Artist);
