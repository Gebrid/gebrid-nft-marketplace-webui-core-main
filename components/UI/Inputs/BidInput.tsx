import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type BidInputProps = {
  theme: string;
};

const StyledBidInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.theme === 'theme-light'
      ? 'rgba(51, 51, 51, 0.3)'
      : 'rgba(250, 250, 250, 0.3)'};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;

  input {
    flex: 1 1 0%;
    background: transparent;
    outline: none;
    font-size: 14px;
  }

  & > div {
    display: flex;
    column-gap: 4px;
    opacity: 0.5;
    font-weight: 400;
    font-size: 16px;
  }
`;

const BidInput = (props: BidInputProps) => {
  const { theme } = props;
  return (
    <StyledBidInput theme={theme}>
      <input type="text" placeholder="Enter Bid" />
      <div>
        <div>wETH</div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} rotation={90} size={'sm'} />
        </div>
      </div>
    </StyledBidInput>
  );
};

export default BidInput;
