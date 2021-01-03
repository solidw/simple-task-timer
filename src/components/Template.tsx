import React from 'react';
import styled from 'styled-components';

import TabContainer from './TabContainer';

const TemplateContainer = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Template({ children }: any): JSX.Element {
  return (
    <React.Fragment>
      <TabContainer />
      <TemplateContainer>{children}</TemplateContainer>
    </React.Fragment>
  );
}

export default Template;
