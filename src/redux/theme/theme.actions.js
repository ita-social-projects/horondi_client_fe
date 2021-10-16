import { SET_FILTER_MENU_STATUS } from './theme.types';

export const setFilterMenuStatus = (newFilterMenuStatus) => ({
  type: SET_FILTER_MENU_STATUS,
  payload: newFilterMenuStatus
});
