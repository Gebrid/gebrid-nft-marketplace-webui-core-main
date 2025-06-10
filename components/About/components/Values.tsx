import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/Values.module.scss';

type Props = {};

class Values extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className={styles.values}>
        <div className={styles.valuesBg}></div>
        <Container>
          <Row>
            <Col lg={12} className={styles.headerCol}>
              <p className={styles.header}>
                Our <span className={styles.gradientText}>Values</span>
              </p>
            </Col>
          </Row>
          <Row className={styles.cardsWrapper}>
            <Col lg={3} className={styles.card}>
              <div className={styles.cardIcon + ' ' + styles.cardIconFirst}>
                <Image
                  src="/images/icons/icon-lightning.svg"
                  width={42}
                  height={42}
                  alt=""
                />
              </div>
              <div className={styles.cardTextWrapper}>
                <p className={styles.cardTitle}>999+ NFT</p>
                <p className={styles.cardDescription}>
                  A unique platform for tokenized rich -media content placement
                  and consumption, providing an opportunity of a wide experience
                  with media -product and tokenization of intellectual property
                  rights.
                </p>
              </div>
            </Col>
            <Col lg={3} className={styles.card}>
              <div className={styles.cardIcon + ' ' + styles.cardIconSecond}>
                <Image
                  src="/images/icons/icon-pencil.svg"
                  width={42}
                  height={42}
                  alt=""
                />
              </div>
              <div className={styles.cardTextWrapper}>
                <p className={styles.cardTitle}>999+ Creators</p>
                <p className={styles.cardDescription}>
                  An opportunity to bring one's content before industry leaders
                  as well as an opportunity to get the support in content
                  promotion, including at other on -line and off -line platforms
                  via GEBRID.
                </p>
              </div>
            </Col>
            <Col lg={3} className={styles.card}>
              <div className={styles.cardIcon + ' ' + styles.cardIconThird}>
                <Image
                  src="/images/icons/icon-user.svg"
                  width={42}
                  height={42}
                  alt=""
                />
              </div>
              <div className={styles.cardTextWrapper}>
                <p className={styles.cardTitle}>999+ Users</p>
                <p className={styles.cardDescription}>
                  Based on the existing experience, GEBRID can successfully
                  connect NFT market and artists: the latest may find not only
                  the potential audience, but rather opportunities for self
                  promotion.
                </p>
              </div>
            </Col>
            <Col lg={3} className={styles.card}>
              <div className={styles.cardIcon + ' ' + styles.cardIconFourth}>
                <Image
                  src="/images/icons/icon-handshake.svg"
                  width={42}
                  height={42}
                  alt=""
                />
              </div>
              <div className={styles.cardTextWrapper}>
                <p className={styles.cardTitle}>999+ Deals</p>
                <p className={styles.cardDescription}>
                  A unique tokenomica model supporting the demand for a
                  platform's utility token and providing opportunities to get
                  digital assets.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(Values);
