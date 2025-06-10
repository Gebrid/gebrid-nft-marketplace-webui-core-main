import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { NFT } from 'types/types';
import styles from '../styles/Explore.module.scss';
import NFTCard from './NFTCard';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  NFTs: NFT[];
  lines?: number;
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} sliderButton`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className={styles.sliderArrowWrapper}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={styles.sliderArrowIcon}
        />
      </div>
    </div>
  );
};

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: '-20px', display: 'none' }}
      onClick={onClick}
    >
      <div className="sliderArrowWrapper">
        <FontAwesomeIcon icon={faAngleLeft} className="sliderArrowIcon" />
      </div>
    </div>
  );
}

function NFTsSlider({ lines, NFTs, theme }: Props) {
  const settings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: lines || 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {NFTs?.map((card) => (
        <NFTCard data={card} key={card.Collection} />
      ))}
    </Slider>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTsSlider);
