import { SET_THEME_MODE } from './theme.types';

const initialState = {
  lightMode: true
};

const themeState = (state = initialState, { type, payload } = {}) => {
  if (type === SET_THEME_MODE) {
    return {
      ...state,
      lightMode: payload
    };
  } else {
    return state;
  }
};

export default themeState;
