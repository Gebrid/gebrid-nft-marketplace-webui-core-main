import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { sliceAddress } from '../../../helpers/sliceAddress';
import useWindowSize from '../../../hooks/useWindowSize';
import eth from '../../../public/images/Ethereum.png';
import { IArtist, NFT } from '../../../types/types';
import FilterBlockchain from '../../NFTs/components/filters/FilterBlockchain';
import FilterCategory from '../../NFTs/components/filters/FilterCategory';
import FilterCollection from '../../NFTs/components/filters/FilterCollection';
import FilterPrice from '../../NFTs/components/filters/FilterPrice';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/ArtistInfo.module.scss';

type ArtistInfoProps = {
  data: IArtist;
  nfts: NFT[];
  theme: string | 'theme-light' | 'theme-dark';
};

const ArtistInfo = (props: ArtistInfoProps) => {
  const {
    data: { id, name, address, avatar, followers, following },
    nfts,
    theme,
  } = props;
  const { windowSize } = useWindowSize();
  const [tab, setTab] = useState('On sale');
  const [selectedBlockchainId, setSelectedBlockchainId] = useState({
    ethereum: true,
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState('exclusive');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [isFollow, setIsFollow] = useState(false);
  const [_followers, setFollowers] = useState(followers);

  const onOnSaleTabClick = () => {
    setTab('On sale');
  };
  const onClosedDealTabClick = () => {
    setTab('Closed deal');
  };
  const onCollectionTabClick = () => {
    setTab('Collection');
  };

  const handleButtonClick = () => {
    if (isFollow) {
      setFollowers((prev) => prev - 1);
    } else {
      setFollowers((prev) => prev + 1);
    }
    setIsFollow(!isFollow);
  };

  return (
    <div className={styles.artistInfo}>
      <div className={styles.coverImage}></div>
      <div className={styles.artistPhoto}>
        <Image
          src={avatar}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center'}
          alt="Artist Avatar"
        />
      </div>
      {windowSize.innerWidth > 320 ? (
        <div className={styles.artistFullName}>Arlene McCoy</div>
      ) : null}
      <div className={styles.nameAndAddress}>
        {windowSize.innerWidth > 320 ? (
          <div className={styles.name}>{name}</div>
        ) : null}
        <div className={styles.addressAndIcon}>
          <div className={styles.blockchainIcon}>
            <Image src={eth} width={20} height={20} alt="Blockchain Icon" />
          </div>
          <div className={styles.address}>{sliceAddress(address)}</div>
        </div>
      </div>
      <div className={styles.followingAndFollowers}>
        <div>
          <span>{_followers} </span>followers
        </div>
        <div>
          <span>{following} </span>following
        </div>
      </div>
      <div className={styles.buttons}>
        <GradientButton
          content={isFollow ? 'Unfollow' : 'Follow'}
          padding={'12px 31.5px'}
          width={'112px'}
          colorDirection={ColorDirection.Straight}
          onClick={handleButtonClick}
        ></GradientButton>
        <div className={styles.shareButton}>
          <FontAwesomeIcon icon={faShareNodes} size="xl" />
        </div>
      </div>
      <div className={styles.tabs}>
        <div
          className={styles.tab}
          onClick={onOnSaleTabClick}
          style={
            tab === 'On sale'
              ? { borderBottom: '2px solid #333333', opacity: '1' }
              : {}
          }
        >
          On Sale
        </div>
        <div
          className={styles.tab}
          onClick={onClosedDealTabClick}
          style={
            tab === 'Closed deal'
              ? { borderBottom: '2px solid #333333', opacity: '1' }
              : {}
          }
        >
          Closed deal
        </div>
        <div
          className={styles.tab}
          onClick={onCollectionTabClick}
          style={
            tab === 'Collection'
              ? { borderBottom: '2px solid #333333', opacity: '1' }
              : {}
          }
        >
          Collection
        </div>
      </div>
      <div className={styles.filters}>
        <FilterBlockchain
          selectedBlockchainId={selectedBlockchainId}
          setSelectedBlockchainId={setSelectedBlockchainId}
          theme={theme}
        />
        <FilterCategory
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          theme={theme}
        />
        <FilterCollection
          selectedCollectionId={selectedCollectionId}
          setSelectedCollectionId={setSelectedCollectionId}
          theme={theme}
        />
        <FilterPrice
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedCoinId={selectedCoinId}
          setSelectedCoinId={setSelectedCoinId}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default ArtistInfo;
