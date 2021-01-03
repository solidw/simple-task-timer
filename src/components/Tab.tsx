import React, { ReactElement } from 'react';
import styled from 'styled-components';

import BoxShadow from '../lib/BoxShadow';
import Colors from '../lib/Colors';
import Button from './Button';

const TabContainer = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${Colors.primary};
  box-shadow: ${BoxShadow.neumorphism};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  width: 12px;
  height: 12px;
  font-size: 1rem;

  &:active {
    box-shadow: ${BoxShadow.neumorphismInset};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 70%;
  position: absolute;
  background-color: ${Colors.gray0};
  top: 50%;
  transform: translateY(-50%);
  right: 2px;
`;

const TabButton = styled(Button)`
  box-shadow: ${BoxShadow.neumorphismSmall};
  margin-right: 3px;
  padding: 10px 0px;
  border-radius: 5px;

  ${({ nonActive }) =>
    nonActive &&
    `
    &:hover {
      box-shadow: inherit;
    }
    `}
`;

interface TabProps {
  current: boolean;
  onClickTab(): void;
  onClickCloseButton(): void;
  children?: ReactElement | string;
}

function Tab({
  current,
  onClickTab,
  onClickCloseButton,
  children,
}: TabProps): JSX.Element {
  return (
    <TabContainer>
      <TabButton
        maxWidth={180}
        minWidth={120}
        padding={10}
        background={current ? '#fff' : undefined}
        nonActive={current}
        onClick={onClickTab}
      >
        {children}
      </TabButton>
      {current && (
        <CloseButton
          type='button'
          aria-label='Close'
          onClick={onClickCloseButton}
        >
          <span aria-hidden='true'>×</span>
        </CloseButton>
      )}
      <Divider />
    </TabContainer>
  );
}

export default Tab;
