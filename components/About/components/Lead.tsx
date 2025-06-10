import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import styles from '../styles/Lead.module.scss';

type LeadProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

const Lead = (props: LeadProps) => {
  const { theme } = props;
  const settings = {
    arrows: false,
    dots: true,
    speed: 0,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: 'lead-slider-slick-dots',
  };
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <section
      className={classNames(styles.captionWrapper, {
        [styles.captionWrapperLight]: theme === 'theme-light',
        [styles.captionWrapperDark]: theme === 'theme-dark',
      })}
    >
      <Container>
        <Row className={styles.row}>
          <Col lg={6} className={styles.textWrapper}>
            <span className={classNames(styles.leadHead, styles.gradientText)}>
              GEBRID
            </span>
            <h4 className={classNames(styles.leadTitle, styles.gradientText)}>
              Global E-BRIDge to your creativity, art recognition and
              monetization; the bridge connecting artists with producers, agents
              and connoisseurs all over the world through NFTs
            </h4>
            <p className={styles.leadDescription}>
              Possibility to create NFTs attributable not only to one type of
              media-content but rather to several ones; interactive items
              integration to create a sophisticated experience in the engagement
              with media-content
            </p>
            <div className={styles.mainButtonsLayout}>
              <GradientButton
                onClick={() => router.push(session ? '/create' : '/signin')}
                content={'Create NFT'}
                padding={'16px 42px'}
                colorDirection={ColorDirection.Reverse}
                width={'177px'}
              />
              <SecondaryButton
                onClick={() => router.push('/explore')}
                content={'Collect NFT'}
                padding={'16px 40.5px'}
                theme={theme}
                width={'177px'}
              />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5} className={styles.slider}>
            <Slider {...settings}>
              <Link href="/">
                <div className={styles.sliderSlide}>
                  <Image
                    src="/images/dummy/about-lead.png"
                    width={514}
                    height={514}
                    alt=""
                  />
                  <div className={styles.slideCaptionBg}></div>
                  <div className={styles.slideCaption}>
                    <p className={styles.slideCaptionTitle}>Exclusive 1</p>
                    <p className={styles.slideCaptionAction}>collect now!</p>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className={styles.sliderSlide}>
                  <Image
                    src="/images/dummy/about-lead.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                  <div className={styles.slideCaption}>
                    <p className={styles.slideCaptionTitle}>Exclusive 2</p>
                    <p className={styles.slideCaptionAction}>collect now!</p>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className={styles.sliderSlide}>
                  <Image
                    src="/images/dummy/about-lead.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                  <div className={styles.slideCaption}>
                    <p className={styles.slideCaptionTitle}>Exclusive 3</p>
                    <p className={styles.slideCaptionAction}>collect now!</p>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className={styles.sliderSlide}>
                  <Image
                    src="/images/dummy/about-lead.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                  <div className={styles.slideCaption}>
                    <p className={styles.slideCaptionTitle}>Exclusive 4</p>
                    <p className={styles.slideCaptionAction}>collect now!</p>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className={styles.sliderSlide}>
                  <Image
                    src="/images/dummy/about-lead.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                  <div className={styles.slideCaption}>
                    <p className={styles.slideCaptionTitle}>Exclusive 5</p>
                    <p className={styles.slideCaptionAction}>collect now!</p>
                  </div>
                </div>
              </Link>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Lead);
