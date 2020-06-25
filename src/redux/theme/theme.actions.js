import { SET_THEME_MODE } from './theme.types';

const setThemeMode = (boolean) => ({
  type: SET_THEME_MODE,
  payload: boolean
});

export { setThemeMode };
