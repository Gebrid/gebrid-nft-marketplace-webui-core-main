import { WithRouterProps } from 'next/dist/client/with-router';
import { withRouter } from 'next/router';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/GettingStarted.module.scss';
import GettingStartedCard from './GettingStartedCard';

type Props = WithRouterProps & {
  theme: string | 'theme-light' | 'theme-dark';
};

class GettingStarted extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperBg}></div>
        <Container>
          <Row>
            <Col lg={12} className="titleCol">
              <h4 className={styles.title}>
                Resources for <br />
                getting <span className={styles.gradientText}>started</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={6} md={6} sm={12} className={styles.cardCol}>
              <GettingStartedCard
                image="/images/fifth-1.png"
                width={84}
                height={102}
                title="Set up your wallet"
                action="Set up"
                actionUrl="#"
              ></GettingStartedCard>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className={styles.cardCol}>
              <GettingStartedCard
                image="/images/fifth-2.png"
                width={90}
                height={102}
                title="Create your collection"
                action="Browse"
                actionUrl="#"
              ></GettingStartedCard>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className={styles.cardCol}>
              <GettingStartedCard
                image="/images/fifth-3.png"
                width={124}
                height={102}
                title="Add your NFTs"
                action="Browse"
                actionUrl="#"
              ></GettingStartedCard>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className={styles.cardCol}>
              <GettingStartedCard
                image="/images/fifth-4.png"
                width={87}
                height={102}
                title="List them for sale"
                action="Set up"
                actionUrl="#"
              ></GettingStartedCard>
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

export default connect(mapStateToProps)(withRouter(GettingStarted));
