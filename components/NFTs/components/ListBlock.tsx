import classNames from 'classnames';
import { WithRouterProps } from 'next/dist/client/with-router';
import { useRouter, withRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NFT } from 'types/types';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/ListBlock.module.scss';
import NFTsList from './NFTsList';
import NFTsSlider from './NFTsSlider';

type Props = WithRouterProps & {
  data: NFT[];
  theme: string | 'theme-light' | 'theme-dark';
  titleBlack?: string;
  titleBlue?: string;
  titleBlackFirst?: boolean;
  lines?: number;
  isSecond?: boolean;
  showSeeAll?: boolean;
  withFilters?: boolean;
  slider?: boolean;
};

function ListBlock({
  data,
  theme,
  isSecond,
  withFilters,
  titleBlack,
  titleBlackFirst,
  titleBlue,
  slider,
  showSeeAll,
  lines,
}: Props) {
  const GradientTitle = (
    <span className={styles.gradientText}>{titleBlue}</span>
  );

  const router = useRouter();

  return (
    <div
      className={classNames(styles.wrapper, 'slickAdjust', {
        [styles.wrapperDark]: theme === 'theme-dark',
        [styles.wrapperLight]: theme === 'theme-light',
        [styles.wrapperFirst]: !isSecond,
      })}
    >
      <Container fluid="lg" className={styles.listBlockContainer}>
        <Row>
          <Col
            lg={6}
            md={12}
            className={classNames(styles.headerCol, 'titleCol')}
          >
            <div className={styles.headerLeft}>
              <p className={styles.title}>
                {titleBlackFirst ? titleBlack : GradientTitle}{' '}
                {titleBlackFirst ? GradientTitle : titleBlack}
              </p>
            </div>
          </Col>
          <Col lg={6} md={12} className={styles.headerRight}>
            {showSeeAll ? (
              <div className={styles.gradientButtonContainer}>
                <GradientButton
                  onClick={() => router.push('explore')}
                  content={'See All'}
                  padding={'12px 32px'}
                  colorDirection={ColorDirection.Straight}
                />
              </div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {slider ? (
              <NFTsSlider NFTs={data} lines={lines}></NFTsSlider>
            ) : (
              <NFTsList NFTs={data} />
            )}
          </Col>
        </Row>
      </Container>
      <div
        className={classNames(
          styles.gradientButtonContainer,
          styles.duplicateButton
        )}
      >
        <GradientButton
          onClick={() => router.push('explore')}
          content={'See All'}
          padding={'12px 32px'}
          colorDirection={ColorDirection.Straight}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(withRouter(ListBlock));
