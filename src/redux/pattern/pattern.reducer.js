import { SET_PATTERNS } from './pattern.types';

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
    default:
      return state;
  }
};

export default patternReducer;
