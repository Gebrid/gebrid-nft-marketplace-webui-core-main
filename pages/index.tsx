import { getTokens } from 'api/getTokens';
import Head from 'next/head';
import { NFT } from 'types/types';
import ListArtists from '../components/Artists/components/ListArtists';
import Categories from '../components/Categories/components/Categories';
import About from '../components/Layout/components/About';
import Caption from '../components/Layout/components/Caption';
import GettingStarted from '../components/Layout/components/GettingStarted';
import ExploreNFTsHome from '../components/NFTs/components/ExploreNFTsHome';
import ListBlock from '../components/NFTs/components/ListBlock';
import useWindowSize from '../hooks/useWindowSize';

export const getServerSideProps = async () => {
  const data = await getTokens();

  return {
    props: {
      data,
    },
  };
};

interface AppProps {
  data: NFT[];
}

function App({ data }: AppProps) {
  const { windowSize } = useWindowSize();

  return (
    <>
      <Head>
        <title>Gebrid NFT</title>
      </Head>
      <Categories />
      <ExploreNFTsHome data={data} />
      <Caption />
      <ListBlock
        data={data}
        titleBlue="New"
        titleBlack="drops"
        titleBlackFirst={false}
        lines={windowSize.innerWidth <= 320 ? 1 : 2}
        slider={true}
        showSeeAll={true}
      />
      <ListBlock
        data={data}
        titleBlue="bids"
        titleBlack="Hot"
        titleBlackFirst={true}
        isSecond={true}
        slider={true}
        showSeeAll={true}
      />
      <ListBlock
        data={data}
        titleBlue="Auctions"
        isSecond={true}
        slider={true}
        showSeeAll={true}
      />
      <ListArtists />
      <GettingStarted />
      <About />
    </>
  );
}

export default App;
