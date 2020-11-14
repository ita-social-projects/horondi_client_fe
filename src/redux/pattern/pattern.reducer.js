import { SET_PATTERNS, SET_PATTERN_LOADING, DUMMY_CASE } from './pattern.types';

export const initialState = {
  list: []
};

const patternReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PATTERNS:
      return {
        ...state,
        list: action.payload
      };
    case SET_PATTERN_LOADING:
      return {
        ...state,
        pattern: action.payload
      };
    case DUMMY_CASE:
      return {
        ...state,
        patternLoading: action.payload
      };
    default:
      return state;
  }
};

export default patternReducer;
