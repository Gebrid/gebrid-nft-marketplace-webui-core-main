import styled from 'styled-components';
import AddressButton from '../Buttons/AddressButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import BidInput from '../Inputs/BidInput';

type PlaceBidProps = {
  theme: string;
};

const PlaceBidContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 32px;
  z-index: 1;
  background: ${(props) =>
    props.theme === 'theme-light' ? '#ffffff' : '#333333'};
  border-radius: 16px;
  max-width: 420px;

  @media screen and (max-width: 320px) {
    max-width: 320px;
  }
  //left: 50%;
  //top: 50%;
  //transform: translate(-50%, -50%);

  h1 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    opacity: 0.5;
    margin-bottom: 24px;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 24px;

  & div {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    opacity: 0.5;
  }

  & > div:last-child {
    & > div:last-child {
      opacity: 1 !important;
    }
  }
`;

const Line = styled.div`
  border-bottom-color: ${(props) =>
    props.theme === 'theme-light'
      ? 'rgba(51, 51, 51, 0.3)'
      : 'rgba(250, 250, 250, 0.3)'};
  border-bottom: 1px solid;
  margin: 16px 0;
`;

const PlaceBid = (props: PlaceBidProps) => {
  const { theme } = props;
  return (
    <PlaceBidContainer theme={theme}>
      <h1>Place a bid</h1>
      <p>Et has minim elitr intellegat. Mea aeterno el nam minimum ponderum</p>
      <AddressButton theme={theme} />
      <h2>Your bid</h2>
      <BidInput theme={theme} />
      <Statistics>
        <div>
          <div>Your bidding balance</div>
          <div>0 wETH</div>
        </div>
        <div>
          <div>Your balance</div>
          <div>0 ETH</div>
        </div>
        <div>
          <div>Service fee</div>
          <div>0 wETH</div>
        </div>
        <Line />
        <div>
          <div>You will pay</div>
          <div>0 wETH</div>
        </div>
      </Statistics>
      <SecondaryButton
        onClick={() => {
          alert('Bid Placed!');
        }}
        content={'Place a bid'}
        padding="16px 0"
        width="100%"
        theme={theme}
      ></SecondaryButton>
    </PlaceBidContainer>
  );
};

export default PlaceBid;
