import { SET_PATTERNS } from './pattern.types';

export const initialState = {
  list: []
};

const patternReducer = (state = initialState, action = {}) => {
  if (action.type === SET_PATTERNS) {
    return {
      ...state,
      list: action.payload
    };
  } else {
    return state;
  }
};

export default patternReducer;
