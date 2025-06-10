import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { artists } from '../../../api/getArtists';
import { getTokens } from '../../../api/getTokens';
import ArtistInfo from '../../../components/Artists/components/ArtistInfo';
import { IArtist, NFT } from '../../../types/types';

type ArtistPageProps = {
  theme: string | 'theme-light' | 'theme-dark';
  artist: IArtist;
  nfts: NFT[];
};

export const getServerSideProps = async (context: any) => {
  const id = context.query.artist;
  const artist = artists.find((_artist) => _artist.id === id);
  const nfts = await getTokens();

  return {
    props: {
      artist,
      nfts,
    },
  };
};

const ArtistPage = (props: ArtistPageProps) => {
  const { theme, artist, nfts } = props;
  return (
    <Container style={{ padding: 0 }}>
      <ArtistInfo data={artist} nfts={nfts} theme={theme} />
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(ArtistPage);
