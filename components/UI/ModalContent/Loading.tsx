import { Loader } from 'components/Icons/Loader';
import styled from 'styled-components';
import SecondaryButton from '../Buttons/SecondaryButton';

type ModalLoadingProps = {
  theme: string;
  onClick?: () => void;
};

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.theme === 'theme-light' ? '#ffffff' : '#333333'};
  padding: 42px 121px;
  border-radius: 16px;
  max-width: 420px;

  @media screen and (max-width: 320px) {
    padding: 42px 16px;
    max-width: 320px;
    width: 100vw;
  }

  h1 {
    font-weight: 700;
    font-size: 32px;
    color: #333333;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #d6d6d6;
    margin-bottom: 24px;
  }

  & > div:last-child {
    width: 100%;
    margin-top: 24px;
  }
`;

export const ModalLoading = (props: ModalLoadingProps) => {
  const { theme, onClick } = props;

  return (
    <StyledLoading theme={theme}>
      <h1>Loading</h1>
      <p>In progress</p>
      <Loader />
      <div>
        <SecondaryButton
          width={'100%'}
          padding={'16px 0'}
          content={'Cancel'}
          theme={theme}
          onClick={onClick}
        />
      </div>
    </StyledLoading>
  );
};
