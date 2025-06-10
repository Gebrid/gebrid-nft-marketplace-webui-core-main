import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatEther } from 'ethers/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { sliceAddress } from '../../../helpers/sliceAddress';
import { sliceToken } from '../../../helpers/sliceToken';
import { useBuy } from '../../../hooks/useBuy';
import { useIsOwnerSee } from '../../../hooks/useIsOwnerSee';
import useWindowSize from '../../../hooks/useWindowSize';
import { NFT } from '../../../types/types';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import PrimaryColorTitle from '../../UI/Common/PrimaryColorTitle';
import Modal from '../../UI/Modal/Modal';
import { ModalLoading } from '../../UI/ModalContent/Loading';
import PlaceBid from '../../UI/ModalContent/PlaceBid';
import styles from '../styles/NftInfo.module.scss';
import { RenderPreviewByType } from './RenderPreviewByType';

type NftInfoProps = {
  data: NFT;
  theme: string | 'theme-light' | 'theme-dark';
};

const NftInfo = (props: NftInfoProps) => {
  const {
    data: { Type, Owner, File, Prices, Name, Description, Collection, Id },
    theme,
  } = props;
  const preview = RenderPreviewByType(Type, File);
  const isOwnerSee = useIsOwnerSee(Owner);
  const { onBuyClick } = useBuy({
    collectionAddress: Collection,
    tokenAddress: Prices[0].Token,
    tokenId: Id,
    tokenPrice: Prices[0].Price,
    isOwnerSee,
  });
  const [tab, setTab] = useState('Details');
  const [bidScenario, setBidScenario] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const onDetailsClick = () => {
    setTab('Details');
  };

  const onBidsClick = () => {
    setTab('Bids');
  };

  const onPlaceBidClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.infoWrapper}>
      {/*<Modal isOpen={true} handleClose={() => setIsOpen(false)}>*/}
      {/*  <ModalLoading theme={theme} />*/}
      {/*</Modal>*/}

      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        {loading ? (
          <ModalLoading theme={theme} onClick={() => setIsOpen(false)} />
        ) : (
          <PlaceBid theme={theme} />
        )}
      </Modal>
      <div className={styles.infoLeft}>
        <div className={styles.imageWrapper}>{preview}</div>
        <div className={styles.contractAndToken}>
          <div className={styles.contract}>
            <div>Contract Address</div>
            <div>{sliceAddress(Collection)}</div>
          </div>
          <div className={styles.tokenId}>
            <div>Token ID</div>
            <div>{sliceToken(Prices[0].Token)}</div>
          </div>
        </div>
      </div>
      <div className={styles.infoRight}>
        <div className={styles.titleAndIconButtons}>
          <PrimaryColorTitle
            text={`NFT №${Id}`}
            fontSize={'52px'}
            theme={theme}
            fontWeight={'600'}
          ></PrimaryColorTitle>
          <div className={styles.icons}>
            <div>
              <FontAwesomeIcon icon={faHeart} size="2xl" />
            </div>
            <div>
              <FontAwesomeIcon icon={faShareNodes} size="2xl" />
            </div>
          </div>
        </div>
        <div className={styles.onSaleRow}>
          <span>On Sale for </span>
          <span className={styles.gradientPrice}>
            {Prices ? `${formatEther(Prices[0].Price)} ETH` : null}{' '}
          </span>
          <span>prices</span>
          <span className={styles.dot}> • </span>
          <span>1/1</span>
        </div>
        <div className={styles.description}>{Description}</div>
        <div className={styles.typeCateforiesAndRoyalties}>
          <div className={styles.infoTitleAndDetails}>
            <div className={styles.infoTitle}>Type of NFT</div>
            <div className={styles.infoDetails}>Single</div>
          </div>
          <div className={styles.infoTitleAndDetails}>
            <div>Categories</div>
            <div>Art</div>
          </div>
          <div className={styles.infoTitleAndDetails}>
            <div>Royalties</div>
            <div>10%</div>
          </div>
        </div>
        <div className={styles.detailsAndBidsTabs}>
          <div
            className={styles.detailsTitle}
            onClick={onDetailsClick}
            style={
              tab === 'Details' ? { borderBottom: '2px solid #333333' } : {}
            }
          >
            Details
          </div>
          {bidScenario ? (
            <div
              className={styles.bidsTitle}
              onClick={onBidsClick}
              style={
                tab === 'Bids' ? { borderBottom: '2px solid #333333' } : {}
              }
            >
              Bids
            </div>
          ) : null}
        </div>
        {tab === 'Details' ? (
          <div className={styles.details}>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/artists-avatar_2.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.detailsItemContent}>
                <div>Owner</div>
                <div>@user name</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/nft-collection.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.detailsItemContent}>
                <div>Collection</div>
                <div>Name of collection</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/NFT-info-Etherium.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.detailsItemContent}>
                <div>Blockchain</div>
                <div>Ethereum</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.details}>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/artists-avatar_2.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.bidContent}>
                <div className={styles.bidDetails}>
                  0.015 wETH <span>by</span> 0xafab...10f3
                </div>
                <div className={styles.bidDate}>2/19/2022, 5:56 PM</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/artists-avatar_2.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.bidContent}>
                <div className={styles.bidDetails}>
                  0.015 wETH <span>by</span> 0xafab...10f3
                </div>
                <div className={styles.bidDate}>2/19/2022, 5:56 PM</div>
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.roundImage}>
                <Image
                  src={'/images/artists-avatar_2.png'}
                  layout="fill"
                  objectFit={'cover'}
                  objectPosition={'center'}
                  alt="Avatar"
                />
              </div>
              <div className={styles.bidContent}>
                <div className={styles.bidDetails}>
                  0.015 wETH <span>by</span> 0xafab...10f3
                </div>
                <div className={styles.bidDate}>2/19/2022, 5:56 PM</div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.gradientLine}></div>
        {bidScenario ? (
          <div className={styles.bidAuctionWrapper}>
            <div className={styles.bidAuctionCol}>
              <div>Minimum bid</div>
              <div>0.15 wETH</div>
              <div>$484</div>
            </div>
            {windowSize.innerWidth > 321 ? (
              <div className={styles.verticalLine}></div>
            ) : null}
            <div className={styles.bidAuctionCol}>
              <div>Auction ends in</div>
              <div className={styles.endCounter}>
                <div>
                  <div>0</div>
                  <div>Days</div>
                </div>
                <div>
                  <div>23</div>
                  <div>Hours</div>
                </div>
                <div>
                  <div>28</div>
                  <div>Minutes</div>
                </div>
                <div>
                  <div>35</div>
                  <div>Seconds</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {bidScenario === false ? (
          <div className={styles.gradientButtonWrapper}>
            <GradientButton
              onClick={onBuyClick}
              content={`Buy for ${formatEther(Prices[0].Price)} ETH`}
              padding={'12px 15.5px'}
              colorDirection={ColorDirection.Reverse}
            />
          </div>
        ) : (
          <div className={styles.gradientButtonWrapperBid}>
            <GradientButton
              onClick={onPlaceBidClick}
              content={`Place a bid`}
              padding={'12px 15.5px'}
              colorDirection={ColorDirection.Reverse}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NftInfo;
