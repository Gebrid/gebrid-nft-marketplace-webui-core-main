import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { searchTokens } from 'api/getTokens';
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



export async function getServerSideProps(context: GetServerSidePropsContext) {
    const searchQuery = context.query.query;
    if (typeof searchQuery === "undefined" || typeof searchQuery === "object") {
        return {
            props: {
                data: [],
                searchQuery: "",
            },
        };
    }

    const data = await searchTokens(searchQuery);
    return {
        props: {
            data,
            searchQuery,
        },
    };
}

interface SearchPageProps {
    data: NFT[],
    searchQuery: string
  }

const SearchPage = ({ data, searchQuery }: SearchPageProps) => {
    const { windowSize } = useWindowSize();

    return (
      <>
        <Head>
          <title>Gebrid NFT: Search results for {searchQuery}</title>
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
};

export default SearchPage;