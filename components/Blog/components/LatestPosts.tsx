import classNames from 'classnames';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/LatestPosts.module.scss';

type LatestPostsProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

type PostProps = {
  theme: string;
  image: string;
  title: string;
  label: string;
  time: string;
};

const Post = (props: PostProps) => {
  const { theme, image, title, label, time } = props;

  return (
    <Col lg={4}>
      <div
        className={classNames({
          [styles.latestPostCardLight]: theme === 'theme-light',
          [styles.latestPostCardDark]: theme === 'theme-dark',
        })}
      >
        <Image src={image} width={380} height={240} alt="" />
        <div className={styles.postLabel}>{label}</div>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postTime}>{time}</div>
      </div>
    </Col>
  );
};

const LatestPosts = (props: LatestPostsProps) => {
  const { theme } = props;
  return (
    <Container className={styles.latestPostsWrapper}>
      <Row>
        <Col lg={12}>
          <h4 className={styles.latestPostsTitle}>Gebrid Blog</h4>
          <p className={styles.latestPostsDescription}>
            Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum.
          </p>
        </Col>
      </Row>
      <Row className={styles.latestPostsHolder}>
        <Post
          theme={theme}
          image={'/images/blog-1.png'}
          label={'NEWS'}
          title={
            'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad..'
          }
          time={'10 min ago'}
        />
        <Post
          theme={theme}
          image={'/images/blog-2.png'}
          label={'NEWS'}
          title={
            'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad..'
          }
          time={'10 min ago'}
        />
        <Post
          theme={theme}
          image={'/images/blog-3.png'}
          label={'NEWS'}
          title={
            'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad..'
          }
          time={'10 min ago'}
        />
      </Row>
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(LatestPosts);
