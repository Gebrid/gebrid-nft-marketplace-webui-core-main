import classNames from 'classnames';
import { WithRouterProps } from 'next/dist/client/with-router';
import Image from 'next/image';
import { withRouter } from 'next/router';
import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NFT } from 'types/types';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/Explore.module.scss';
import NFTsSlider from './NFTsSlider';

type Props = WithRouterProps & {
  theme: string | 'theme-light' | 'theme-dark';
  data: NFT[];

  // explorePeriod: string | "1 day" | "7days" | "30 days"
  // blockchain: string | "all" | "eth" | "flow" | "poly"
};

class ExploreNFTsHome extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      explorePeriod: '1 day',
    };
  }

  render() {
    const router = this.props.router;
    const theme = this.props.theme;

    return (
      <div
        className={classNames(styles.wrapperCommon, {
          [styles.wrapperDark]: theme === 'theme-dark',
          [styles.wrapperLight]: theme === 'theme-light',
        })}
      >
        <Container fluid="lg" className={styles.exploreContainer}>
          <div className={styles.wrapper}>
            <div className={styles.controlRow}>
              <div className={styles.title}>Explore NFT</div>
              <Dropdown
                className={classNames('dropdownPeriod', {
                  dropdownPeriodDark: theme === 'theme-dark',
                })}
              >
                <Dropdown.Toggle variant="link" id="explore-period">
                  {this.state.explorePeriod}{' '}
                  <div className="downArrow">
                    <Image
                      src="/images/downarrow.svg"
                      width={40}
                      height={23}
                      alt=""
                    />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#"
                    onClick={this._changeExplorePeriodHandler}
                    active={this.state.explorePeriod == '1 day'}
                  >
                    1 day
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={this._changeExplorePeriodHandler}
                    active={this.state.explorePeriod == '7 days'}
                  >
                    7 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={this._changeExplorePeriodHandler}
                    active={this.state.explorePeriod == '30 days'}
                  >
                    30 days
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div
                className={classNames(styles.controlButtons, {
                  [styles.controlButtonsDark]: theme === 'theme-dark',
                  [styles.controlButtonsLight]: theme === 'theme-light',
                })}
              >
                <div
                  className={styles.controlButton}
                >
                  All
                </div>
                <div className={styles.controlButton}>Ethereum</div>
                <div className={styles.controlButton}>Flow</div>
                <div 
                  className={classNames(
                    styles.controlButton,
                    styles.controlButtonSelected
                  )}
                >Polygon</div>
              </div>
              <div className={styles.gradientButtonContainer}>
                <GradientButton
                  onClick={() => router.push('explore')}
                  content={'See All'}
                  padding={'12px 32px'}
                  colorDirection={ColorDirection.Straight}
                />
              </div>
            </div>
            <div>
              <NFTsSlider NFTs={this.props.data} />
            </div>
            <div className={styles.gradientButtonContainer}>
              <GradientButton
                onClick={() => router.push('explore')}
                content={'See All'}
                padding={'12px 32px'}
                colorDirection={ColorDirection.Straight}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  _changeExplorePeriodHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const element: HTMLElement = event.currentTarget;
    this.setState({ explorePeriod: element.textContent });
  };
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(withRouter(ExploreNFTsHome));
