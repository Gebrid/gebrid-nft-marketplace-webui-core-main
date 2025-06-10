import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NFT } from 'types/types';
import { getTokens } from '../api/getTokens';
import Filters from '../components/NFTs/components/Filters';
import NFTsList from '../components/NFTs/components/NFTsList';
import GradientButton, {
  ColorDirection,
} from '../components/UI/Buttons/GradientButton';
import GradientTitle from '../components/UI/Common/GradientTitle';
import PrimaryColorTitle from '../components/UI/Common/PrimaryColorTitle';
import useWindowSize from '../hooks/useWindowSize';

export const getServerSideProps = async () => {
  const data = await getTokens();

  return {
    props: {
      data,
    },
  };
};

type ExplorePageProps = {
  data: NFT[];
  theme: string | 'theme-light' | 'theme-dark';
};

function Explore({ data: NFTs, theme }: ExplorePageProps) {
  const { windowSize } = useWindowSize();
  const [selectedBlockchainId, setSelectedBlockchainId] = useState({
    ethereum: true,
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('exclusive');
  const [selectedAuthorId, setSelectedAuthorId] = useState('');
  const [selectedSaleTypeId, setSelectedSaleTypeId] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`https://gebrid.com/api/nfts?page=${page}&per-page=16`);
  //       const json = await res.json();
  //       setLoading(false);
  //       setData(pre => [...pre, ...json.data]);
  //       setTotalPage(json.total_pages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [page]);

  useEffect(() => {
    console.log(selectedPriceRange);
  }, [selectedPriceRange]);

  return (
    <>
      <Head>
        <title>Explore NFTs | Gebrid NFT</title>
      </Head>
      <Container
        style={{
          paddingTop: windowSize.innerWidth > 320 ? '100px' : '24px',
          paddingBottom: windowSize.innerWidth > 320 ? '100px' : '24px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <PrimaryColorTitle
            text={'Explore'}
            fontSize={'52px'}
            theme={theme}
            fontWeight={'700'}
          />
          <span style={{ fontSize: '52px' }}>&nbsp;</span>
          <GradientTitle text={"NFT's"} fontSize={'52px'} theme={theme} />
        </div>
        <Filters
          selectedBlockchainId={selectedBlockchainId}
          setSelectedBlockchainId={setSelectedBlockchainId}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedCoinId={selectedCoinId}
          setSelectedCoinId={setSelectedCoinId}
          selectedCollectionId={selectedCollectionId}
          setSelectedCollectionId={setSelectedCollectionId}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          selectedAuthorId={selectedAuthorId}
          setSelectedAuthorId={setSelectedAuthorId}
          selectedSaleTypeId={selectedSaleTypeId}
          setSelectedSaleTypeId={setSelectedSaleTypeId}
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={setSelectedSortOption}
        />
        <NFTsList NFTs={NFTs} />
        <div
          style={{
            marginTop: windowSize.innerWidth > 320 ? '42px' : '24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <GradientButton
            content={loading ? 'Loading...' : 'Load More'}
            colorDirection={ColorDirection.Reverse}
            padding={'16px 44px'}
            onClick={() => setPage(page + 1)}
            width={'177px'}
          />
        </div>
      </Container>
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Explore);
