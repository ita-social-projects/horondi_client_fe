import { SET_FILTER_MENU_STATUS, SET_THEME_MODE } from './theme.types';

export const setThemeMode = (isLight) => ({
  type: SET_THEME_MODE,
  payload: isLight
});
export const setFilterMenuStatus = (newFilterMenuStatus)=>({
  type: SET_FILTER_MENU_STATUS,
  payload: newFilterMenuStatus
})
