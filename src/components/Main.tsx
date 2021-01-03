import React from 'react';
import styled from 'styled-components';

import Template from './Template';
import TimeDescription from './TimeDescription';
import Timer from './Timer';

const MainContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

function Main(): JSX.Element {
  return (
    <Template>
      <MainContainer>
        <Timer />
        <TimeDescription />
      </MainContainer>
    </Template>
  );
}

export default Main;
