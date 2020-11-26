import { SET_ERROR } from './error.types';

const initialState = {
  error: null
};

const errorReducer = (state = initialState, action = {}) => {
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload
    };
  } else {
    return state;
  }
};

export default errorReducer;
