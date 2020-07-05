import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';

function App() {
  return (
    <AppWrapper>
      <Timer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export default App;
