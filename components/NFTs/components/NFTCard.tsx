import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { connect } from 'react-redux';
import { NFT } from 'types/types';
import art from '../../../public/images/mini-art.png';
import polygon from '../../../public/images/polygon.svg';
import styles from '../styles/NFTCard.module.scss';

import classNames from 'classnames';
import { formatEther } from 'ethers/lib/utils';
import { sliceAddress } from 'helpers/sliceAddress';
import { useBuy } from 'hooks/useBuy';
import { useIsOwnerSee } from 'hooks/useIsOwnerSee';
import Link from 'next/link';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import { RenderPreviewByType } from './RenderPreviewByType';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  data: NFT;
};

type AvatarProps = {
  image: string;
};

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <Image src={image} layout="fill" objectFit={'cover'} alt="Avatar" />
    </div>
  );
};

function NFTCard({
  theme,
  data: { Type, Owner, File, Prices, Name, Collection, Id, OwnerAvatar },
}: Props) {
  const isOwnerSee = useIsOwnerSee(Owner);
  const { allowance, onBuyClick, isFetching, isRefetching } = useBuy({
    collectionAddress: Collection,
    tokenAddress: Prices[0].Token,
    tokenId: Id,
    tokenPrice: Prices[0].Price,
    isOwnerSee,
  });

  const preview = RenderPreviewByType(Type, File);

  return (
    <div
      className={classNames(styles.nftCard, {
        [styles.nftCardDark]: theme === 'theme-dark',
      })}
    >
      <div className={styles.nftCardHeader}>
        <Avatar image={OwnerAvatar || '/images/avatar_1.png'} />
        <div
          className={classNames(styles.nftCardHeaderText, {
            [styles.whiteTextForDarkMode]: theme === 'theme-dark',
          })}
        >
          <span className={styles.nftCardHeaderTextTitle}>Owner</span>
          <span className={styles.nftCardHeaderTextAddress}>
            {sliceAddress(Owner || '')}
          </span>
        </div>
        <div className={styles.nftCardHeaderFavIconWrapper}>
          <FontAwesomeIcon
            icon={faHeartR}
            className={styles.nftCardHeaderFavIcon}
          />
        </div>
      </div>
      <Link href={`/explore/nft/${Id}`}>
        <div className={styles.nftCardPreview}>{preview}</div>
      </Link>
      <div className={styles.nftCardFooter}>
        <div className={styles.nftCardFooterFirstRow}>
          <span
            className={classNames(styles.nftCardName, {
              [styles.whiteTextForDarkMode]: theme === 'theme-dark',
            })}
          >
            {Name}
          </span>
          <Image src={polygon} width={20} height={20} alt="Blockchain Icon" />
        </div>
        <div className={styles.nftCardFooterSecondRow}>
          <span
            className={classNames(styles.nftCardPrice, {
              [styles.whiteTextForDarkMode]: theme === 'theme-dark',
            })}
          >
            {Prices ? `${formatEther(Prices[0].Price)} MATIC` : null}{' '}
            <span className={styles.wETH}>1/1</span>
          </span>
          <div>
            <span className={styles.nftCardCategory}>Art</span>
            <Image src={art} width={16} height={16} alt="Category Icon" />
          </div>
        </div>
        <div></div>
      </div>
      
        <div className={styles.nftCartBuyButton}>
          <GradientButton
            onClick={onBuyClick}
            content={'Buy now'}
            padding={'12px 90px'}
            colorDirection={ColorDirection.Reverse}
            disabled={isOwnerSee}
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

export default connect(mapStateToProps)(NFTCard);
