import { atom, selector } from 'recoil';

export const tabListAtom = atom({
  key: 'tabListAtom',
  default: ['test1', 'test2', 'test3'],
});

export const currentTabIndexAtom = atom({
  key: 'currentTabIndexAtom',
  default: 0,
});

export const currentTabIndexSelector = selector({
  key: 'currentTabIndexSelector',
  get: ({ get }) => {
    const tabList = get(tabListAtom);
    const currentTabIndex = get(currentTabIndexAtom);
    const safeTabIndex =
      currentTabIndex < tabList.length ? currentTabIndex : tabList.length - 1;
    return safeTabIndex;
  },
});
