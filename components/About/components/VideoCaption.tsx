import { faPlay as faPlayLight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from '../styles/VideoCaption.module.scss';

type VideoCaptionProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

const VideoCaption = (props: VideoCaptionProps) => {
  const { theme } = props;
  const { windowSize } = useWindowSize();

  return (
    <Container className={styles.videoCaption}>
      <Row>
        <Col lg={12}>
          <p className={styles.videoCaptionTitle}>
            Meet <span className={styles.gradientText}>GEBRID</span>
          </p>
          <p className={styles.videoCaptionDescription}>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className={styles.videoCaptionBg}>
          <Image
            src="/images/dummy/video-caption.png"
            width={1200}
            height={597}
            alt=""
          />
          <Link href="/">
            <div className={styles.videoCaptionPlay}>
              <FontAwesomeIcon
                icon={faPlayLight}
                width={42}
                height={42}
                className={classNames(styles.videoCaptionPlayIcon, {
                  [styles.videoCaptionPlayIconLight]: theme === 'theme-light',
                  [styles.videoCaptionPlayIconDark]: theme === 'theme-dark',
                })}
              />
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(VideoCaption);
