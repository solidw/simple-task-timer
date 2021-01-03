import React from 'react';
import styled from 'styled-components';

import BoxShadow from '../lib/BoxShadow';

const TimeDescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: ${BoxShadow.neumorphism};

  user-select: none;

  padding: 2rem 4rem;
  border-radius: 2rem;
`;

function TimeDescription(): JSX.Element {
  return (
    <TimeDescriptionContainer>
      temp
      {/* TODO: Event when user get achivement */}
    </TimeDescriptionContainer>
  );
}

export default TimeDescription;
