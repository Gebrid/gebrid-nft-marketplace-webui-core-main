import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NFT } from 'types/types';
import NFTCard from './NFTCard';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  canBuy?: boolean;
  NFTs: NFT[];
};

function NFTsList({ NFTs }: Props) {
  return (
    <Row>
      {NFTs?.length > 0 ? (
        NFTs.map((card) => (
          <Col key={card.Collection} lg={3}>
            <NFTCard data={card} />
          </Col>
        ))
      ) : (
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>No Items</h2>
      )}
    </Row>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTsList);
