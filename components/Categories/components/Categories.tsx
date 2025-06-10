import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from '../styles/Categories.module.scss';

enum TitlePosition {
  Up,
  Down,
}

type CategoryProps = {
  title: string;
  link: string;
  image: string;
  titlePosition: TitlePosition;
};

const Category = ({ title, link, image, titlePosition }: CategoryProps) => {
  return (
    <Link href={`${link}`}>
      <div className={styles.category}>
        <Image src={image} layout="fill" objectFit={'cover'} alt={title} />
        <div
          className={classNames(styles.categoryText, {
            [styles.categoryTitleUp]: titlePosition === TitlePosition.Up,
            [styles.categoryTitleDown]: titlePosition === TitlePosition.Down,
          })}
        >
          <div
            className={classNames(styles.categoryTitle, {
              [styles.categoryTitle32]: title === 'Exclusive',
              [styles.categoryTitle24]: title !== 'Exclusive',
            })}
          >
            {title}
          </div>
          <span
            className={classNames(styles.categorySubTitle, {
              [styles.categorySubTitleCaps]: title === 'Art',
            })}
          >
            collect now
          </span>
        </div>
      </div>
    </Link>
  );
};

const TileSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    // autoplay: true,
    // autoplaySpeed: 500,
  };

  return (
    <Slider
      className={classNames(styles.tileSlider, 'tileSlider')}
      {...settings}
    >
      <Category
        title={'Music'}
        link={'/explore/music'}
        image={'/images/2-1.png'}
        titlePosition={TitlePosition.Down}
      />
      <Category
        title={'Meta Verse'}
        link={'/explore/metaverse'}
        image={'/images/3-1.png'}
        titlePosition={TitlePosition.Down}
      />
      <Category
        title={'Art'}
        link={'/explore/art'}
        image={'/images/2-2.png'}
        titlePosition={TitlePosition.Down}
      />
      <Category
        title={'GameFi'}
        link={'/explore/gamefi'}
        image={'/images/3-2.png'}
        titlePosition={TitlePosition.Down}
      />
    </Slider>
  );
};

function Categories() {
  const { windowSize } = useWindowSize();

  return (
    <Container fluid={'lg'} className={styles.categoriesContainer}>
      <div className={styles.categories}>
        <div className={styles.categoriesTileXl}>
          <Category
            title={'Exclusive'}
            link={'/explore/exclusive'}
            image={'/images/1-1.png'}
            titlePosition={TitlePosition.Up}
          />
        </div>
        {windowSize.innerWidth > 320 ? (
          <div className={styles.categoriesTileContainer}>
            <div className={styles.categoriesTileRow}>
              <div className={styles.categoriesTileMd}>
                <Category
                  title={'Music'}
                  link={'/explore/music'}
                  image={'/images/2-1.png'}
                  titlePosition={TitlePosition.Down}
                />
              </div>
              <div className={styles.categoriesTileSm}>
                <Category
                  title={'Meta Verse'}
                  link={'/explore/metaverse'}
                  image={'/images/3-1.png'}
                  titlePosition={TitlePosition.Down}
                />
              </div>
            </div>
            <div className={styles.categoriesTileRow}>
              <div className={styles.categoriesTileRow}>
                <div className={styles.categoriesTileMd}>
                  <Category
                    title={'Art'}
                    link={'/explore/art'}
                    image={'/images/2-2.png'}
                    titlePosition={TitlePosition.Down}
                  />
                </div>
                <div className={styles.categoriesTileSm}>
                  <Category
                    title={'GameFi'}
                    link={'/explore/gamefi'}
                    image={'/images/3-2.png'}
                    titlePosition={TitlePosition.Down}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <TileSlider />
        )}
      </div>
    </Container>
  );
}

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(withRouter(Categories));
