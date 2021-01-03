import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Tab from './Tab';
import Colors from '../lib/Colors';
import {
  currentTabIndexAtom,
  currentTabIndexSelector,
  tabListAtom,
} from '../recoil/GlobalState';

interface TabContainerProps {}

const TabContainerContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  display: flex;
`;

const Divider = styled.div`
  border-bottom: 3px solid ${Colors.white};
  width: 100%;
  z-index: 1;
`;

function TabContainer(props: TabContainerProps): JSX.Element {
  const [tabList, setTabList] = useRecoilState(tabListAtom);
  const safeCurrentTabIndex = useRecoilValue(currentTabIndexSelector);
  const setCurrentTabIndex = useSetRecoilState(currentTabIndexAtom);

  const onClickTab = useCallback(
    (tabIndex) => {
      setCurrentTabIndex(tabIndex);
    },
    [setCurrentTabIndex],
  );

  const onClickCloseButton = useCallback(
    (tabIndex) => {
      const newTabList = tabList.filter((tab, index) => tabIndex !== index);
      setTabList(newTabList);
    },
    [tabList],
  );

  return (
    <TabContainerContainer>
      <TabsContainer>
        {tabList.map((tab, index) => (
          <Tab
            key={`tab-${index}`}
            current={safeCurrentTabIndex === index}
            onClickTab={() => onClickTab(index)}
            onClickCloseButton={() => onClickCloseButton(safeCurrentTabIndex)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <Divider />
    </TabContainerContainer>
  );
}

export default TabContainer;
