import { SET_THEME_MODE } from './theme.types';

export const setThemeMode = (isLight) => ({
  type: SET_THEME_MODE,
  payload: isLight
});
