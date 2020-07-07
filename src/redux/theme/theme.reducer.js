import { SET_THEME_MODE } from './theme.types';

const initialState = {
  lightMode: true
};

const themeState = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_THEME_MODE:
    return {
      ...state,
      lightMode: payload
    };
  default:
    return state;
  }
};

export default themeState;
