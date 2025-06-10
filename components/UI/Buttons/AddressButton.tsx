import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

type AddressButtonProps = {
  theme: string;
};
const StyledAddressButton = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.theme === 'theme-light'
      ? 'rgba(51, 51, 51, 0.3)'
      : 'rgba(250, 250, 250, 0.3)'};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

const RoundImage = styled.div`
  width: 42px;
  height: 42px;
  position: relative;

  @media screen and (max-width: 320px) {
    width: 38px;
    height: 38px;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    column-gap: 38px;

    & > div:first-child {
      font-weight: 500;
      font-size: 16px;

      @media screen and (max-width: 320px) {
        font-size: 12px;
      }
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: space-between;

    & > div:first-child {
      font-weight: 600;
      font-size: 14px;
      opacity: 0.5;
    }
  }
`;

const Connected = styled.div`
  background: rgba(50, 215, 75, 0.1);
  border-radius: 4px;
  padding: 4px 12px;
  color: #32d74b !important;
  font-weight: 500;
  font-size: 10px;
`;

const AddressButton = (props: AddressButtonProps) => {
  const { theme } = props;
  return (
    <StyledAddressButton theme={theme}>
      <RoundImage>
        <Image
          src={'/images/NFT-info-Etherium.png'}
          layout="fill"
          objectFit={'cover'}
          objectPosition={'center'}
          alt="Avatar"
        />
      </RoundImage>
      <AddressContainer>
        <div>
          <div>0x10cf90b9a...Fa83</div>
          <Connected>Connected</Connected>
        </div>
        <div>
          <div>Ethereum</div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </AddressContainer>
    </StyledAddressButton>
  );
};

export default AddressButton;
