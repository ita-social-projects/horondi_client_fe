import { SET_PATTERNS, SET_PATTERN_LOADING } from './pattern.types';

export const initialState = {
  list: []
};

const patternReducer = (state = initialState, action = {}) => {
  if (action.type === SET_PATTERNS) {
    return {
      ...state,
      list: action.payload
    };
  } else if (action.type === SET_PATTERN_LOADING) {
    return {
      ...state,
      patternLoading: action.payload
    };
  } else {
    return state;
  }
};

export default patternReducer;
