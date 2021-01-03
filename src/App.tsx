import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App(): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main />
    </React.Fragment>
  );
}

export default App;
