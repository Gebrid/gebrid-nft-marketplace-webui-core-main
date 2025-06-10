import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import _ from 'lodash';
import { WithRouterProps } from 'next/dist/client/with-router';
import { withRouter } from 'next/router';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/ListArtists.module.scss';
import Artist from './Artist';

type Props = WithRouterProps & {
  theme: string | 'theme-light' | 'theme-dark';
  flat?: boolean | undefined;
  lines?: number | undefined;
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} sliderButton`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="sliderArrowWrapper">
        <FontAwesomeIcon icon={faAngleRight} className="sliderArrowIcon" />
      </div>
    </div>
  );
};

class ListArtists extends React.Component<Props, any> {
  render() {
    const lines = this.props.lines || 1;
    const theme = this.props.theme;
    const isFlat = this.props.flat;
    const router = this.props.router;

    const settings = {
      nextArrow: <NextArrow />,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: lines,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const cards: any = [];
    _.times(lines, (num: number) => {
      cards.push(
        <Artist
          id={'0'}
          key={parseInt(num.toString() + '1')}
          image="/images/artists-avatar_1.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'1'}
          key={parseInt(num.toString() + '2')}
          image="/images/artists-avatar_2.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'2'}
          key={parseInt(num.toString() + '3')}
          image="/images/artists-avatar_3.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'3'}
          key={parseInt(num.toString() + '4')}
          image="/images/artists-avatar_4.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'4'}
          key={parseInt(num.toString() + '5')}
          image="/images/artists-avatar_1.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'5'}
          key={parseInt(num.toString() + '6')}
          image="/images/artists-avatar_2.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'6'}
          key={parseInt(num.toString() + '7')}
          image="/images/artists-avatar_3.png"
          name={'@user name'}
        ></Artist>
      );
      cards.push(
        <Artist
          id={'7'}
          key={parseInt(num.toString() + '8')}
          image="/images/artists-avatar_4.png"
          name={'@user name'}
        ></Artist>
      );
    });

    return (
      <section
        className={classNames(styles.wrapper, {
          [styles.wrapperDark]: theme === 'theme-dark' && !isFlat,
          [styles.wrapperLight]: theme === 'theme-light' && !isFlat,
        })}
      >
        <Container className={styles.listArtistsContainer}>
          <Row>
            <Col lg={6}>
              <h4 className={styles.title}>Artists</h4>
            </Col>
            <Col
              lg={6}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div className={styles.gradientButtonContainer}>
                <GradientButton
                  onClick={() => router.push('artists')}
                  content={'See All'}
                  padding={'12px 32px'}
                  colorDirection={ColorDirection.Straight}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider {...settings} className={styles.slider}>
                {cards}
              </Slider>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div
                className={classNames(
                  styles.duplicateButton,
                  styles.gradientButtonContainer
                )}
              >
                <GradientButton
                  onClick={() => router.push('artists')}
                  content={'See All'}
                  padding={'12px 32px'}
                  colorDirection={ColorDirection.Straight}
                />
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

export default connect(mapStateToProps)(withRouter(ListArtists));
