import React from 'react';
import styled from 'styled-components';

import BoxShadow from '../lib/BoxShadow';
import Colors from '../lib/Colors';
import Button from './Button';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${BoxShadow.neumorphism};

  user-select: none;

  padding: 2rem 4rem;
  border-radius: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Display = styled.div`
  font-family: 'LABDigital';
  margin: 2rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TimerButton = styled(Button)`
  padding: 1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: ${BoxShadow.neumorphism};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

function Timer(): JSX.Element {
  return (
    <TimerContainer>
      <Title>test1</Title>
      <Description>test description</Description>
      <Display>10:00:00</Display>
      <ButtonContainer>
        <TimerButton color={Colors.green}>START</TimerButton>
        <TimerButton color={Colors.red}>STOP</TimerButton>
      </ButtonContainer>
      <ButtonContainer>
        <TimerButton color={Colors.yellow}>RESET</TimerButton>
        <TimerButton color={Colors.blue}>SET</TimerButton>
      </ButtonContainer>
    </TimerContainer>
  );
}

export default Timer;
