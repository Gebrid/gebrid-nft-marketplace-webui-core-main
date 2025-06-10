import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/GettingStarted.module.scss';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  image: string;
  width: number;
  height: number;
  title: string;
  action: string;
  actionUrl: string;
};

class GettingStartedCard extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { theme, image, width, height, title, actionUrl, action } =
      this.props;

    return (
      <div
        className={classNames(styles.cardWrapper, {
          [styles.cardWrapperDark]: theme === 'theme-dark',
        })}
      >
        <Image src={image} width={width} height={height} alt={`${title}`} />
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardAction}>
          <Link href={actionUrl}>
            <span>
              {action}{' '}
              <Image
                className={styles.cardActionArrow}
                src="/images/icons/icon-arrow-right.svg"
                width={16}
                height={16}
                alt=""
              />
            </span>
          </Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(GettingStartedCard);
