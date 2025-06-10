import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getTokens } from '../../../api/getTokens';
import NftInfo from '../../../components/NFTs/components/NftInfo';
import { NFT } from '../../../types/types';

type NftProps = {
  theme: string | 'theme-light' | 'theme-dark';
  data: NFT;
  // context: any;
};

export const getServerSideProps = async (context: any) => {
  const all = await getTokens();
  const data = all.find((nft) => nft.Id == context.query.nft);
  console.log({ q: context.query.nft });
  console.log({ data });

  return {
    props: {
      data,
      // context,
    },
  };
};

const Nft = (props: NftProps) => {
  const { theme, data } = props;
  return (
    <Container>
      <NftInfo data={data} theme={theme} />
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Nft);
