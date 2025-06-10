import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/About.module.scss';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
};

class About extends React.Component<Props, any> {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperBg}></div>
        <Container className={styles.aboutContainer}>
          <Row>
            <Col lg={12}>
              <h4 className={styles.title}>
                About <span className={styles.titleColored}>GEBRID</span>
              </h4>
            </Col>
          </Row>
          <Row className={classNames(styles.aboutRow, styles.firstChild)}>
            <Col xl={6} lg={12} className={styles.aboutCol}>
              <div className={styles.aboutImageText}>
                <span className={styles.aboutImageTextColored}>GEBRID </span>
                Marketplace for interactive audio content in the NFT format with
                a unique approach towards content promotion and possibilities to
                tokenize the intellectual property
              </div>
            </Col>
            <Col xl={6} lg={12} className={styles.aboutCol}>
              <Image
                className={styles.aboutImage}
                src="/images/about-img.png"
                width={687}
                height={366}
                alt=""
              />
            </Col>
          </Row>
          <Row className={classNames(styles.aboutRow, styles.secondChild)}>
            <Col lg={12}>
              <div className={styles.aboutText}>
                Possibility to create{' '}
                <span className={styles.aboutTextColored}>NFTs</span>{' '}
                attributable not only to one type of media-content but rather to
                several ones; interactive items integration to create a
                sophisticated experience in the engagement with media-content.
              </div>
            </Col>
          </Row>
          <Row className={classNames(styles.aboutRow, styles.thirdChild)}>
            <Col lg={12} className={styles.aboutVideoWrapper}>
              <Image
                src="/images/about-video.png"
                layout="fill"
                objectFit="cover"
                alt="About Video"
              />
            </Col>
          </Row>
          <Row className={classNames(styles.aboutRow, styles.forthChild)}>
            <Col lg={12}>
              <div className={styles.aboutActionWrapper}>
                <Link href="/explore">
                  <span>
                    Explore the marketplace{' '}
                    <Image
                      className={styles.aboutActionArrow}
                      src="/images/icons/icon-arrow-right.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(About);
