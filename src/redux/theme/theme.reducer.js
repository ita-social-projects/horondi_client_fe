import { SET_FILTER_MENU_STATUS } from './theme.types';

const initialState = {
  filterMenuStatus: false
};

export const themeState = (state = initialState, { type, payload } = {}) => {
  if (type === SET_FILTER_MENU_STATUS) {
    return {
      ...state,
      filterMenuStatus: payload
    };
  } return state;
};
