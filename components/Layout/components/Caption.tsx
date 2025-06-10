import classNames from 'classnames';
import { WithRouterProps } from 'next/dist/client/with-router';
import Image from 'next/image';
import { useRouter, withRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import useWindowSize from '../../../hooks/useWindowSize';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/Caption.module.scss';

type CaptionProps = WithRouterProps & {
  theme: string | 'theme-light' | 'theme-dark';
};

function Caption({ theme }: CaptionProps) {
  const { windowSize } = useWindowSize();
  const router = useRouter();
  return (
    <section className={styles.caption}>
      <div
        className={classNames({
          [styles.blurBgLayer]: theme === 'theme-dark',
        })}
      ></div>
      <Container>
        <Row className={styles.captionRow}>
          <Col className={styles.captionTextCol}>
            <p className={styles.captionTitle}>
              <span className={styles.gradientText}>Global E-BRIDge</span> to
              your creativity, art recognition and monetization
            </p>
            <div className={styles.captionText}>
              <p>
                The bridge connecting artists with producers, agents and
                connoisseurs all over the world through NFTs.
              </p>
              <p>
                Either you are an artist - easily create and effectively promote
                your unique and sophisticated art and music NFTs, or you are an
                art collector or industry leader - easily browse for, discover
                and collect NFT gems.
              </p>
              <p>
                GEBRID also provides technological enthusiasts with broad
                opportunities to use all the benefits of DeFi, GameFi and
                Metaverses.
              </p>
            </div>
            <div className={styles.captionActionWrapper}>
              <GradientButton
                onClick={() => router.push('/signin')}
                content={'Create NFT'}
                padding={'12px 42px'}
                colorDirection={ColorDirection.Straight}
                width={'177px'}
              />
            </div>
          </Col>
          <Col className={styles.captionImageCol}>
            <Image
              src={
                windowSize.innerWidth > 320
                  ? '/images/dummy/caption-left-square.png'
                  : '/images/dummy/caption-left.png'
              }
              layout="fill"
              objectFit={'cover'}
              objectPosition={'center'}
              alt="Caption Image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(withRouter(Caption));
