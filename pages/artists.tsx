import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getArtists } from '../api/getArtists';
import { getTokens } from '../api/getTokens';
import Artist from '../components/Artists/components/Artist';
import GradientButton, {
  ColorDirection,
} from '../components/UI/Buttons/GradientButton';
import GradientTitle from '../components/UI/Common/GradientTitle';
import SearchInput from '../components/UI/Inputs/SearchInput';
import useWindowSize from '../hooks/useWindowSize';
import { IArtist, NFT } from '../types/types';

export const getServerSideProps = async () => {
  const nfts = await getTokens();
  const artists = await getArtists();
  return {
    props: {
      nfts,
      artists,
    },
  };
};

type ArtistsPageProps = {
  nfts: NFT[];
  artists: IArtist[];
  theme: string | 'theme-light' | 'theme-dark';
};

const Artists = (props: ArtistsPageProps) => {
  const { theme } = props;
  const { windowSize } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  return (
    <Container
      style={{
        paddingTop: windowSize.innerWidth > 320 ? '100px' : '24px',
        paddingBottom: windowSize.innerWidth > 320 ? '100px' : '24px',
      }}
    >
      <Row>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            rowGap: '20px',
          }}
        >
          <GradientTitle text={'Artists'} fontSize={'52px'} theme={theme} />
          <div style={{ marginRight: '123px' }}></div>
          <SearchInput />
          <GradientButton
            onClick={() => alert('Search')}
            content={'Search'}
            padding={'16px 59.5px'}
            colorDirection={ColorDirection.Reverse}
            width={'177px'}
          />
        </div>
      </Row>
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {props.artists?.length > 0 ? (
          props.artists.map((artist) => (
            <Col>
              <Artist image={artist.avatar} name={artist.name} id={artist.id} />
            </Col>
          ))
        ) : (
          <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>No Items</h2>
        )}
      </Row>
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
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Artists);
