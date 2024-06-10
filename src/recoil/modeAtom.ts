import { atom } from 'recoil';

export const currentModeState = atom({
  key: 'THEME_STATE',
  default: 'LIGHT',
});
