import React from 'react';
import styled from 'styled-components';

type MainContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  padding: 100px 120px 100px 120px;
  width: 1440px;
  margin: auto;

  @media (max-width: 1200px) {
    width: auto;
  }
`;

function MainContainer({ children }: MainContainerProps) {
  return <Container>{children}</Container>;
}

export default MainContainer;
