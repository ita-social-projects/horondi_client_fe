import { SET_ERROR, CLEAR_ERROR } from './error.types';

const initialState = {
  error: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_ERROR:
    return {
      ...state,
      error: action.payload
    };
  case CLEAR_ERROR:
    return {
      ...state,
      error: null
    };
  default:
    return state;
  }
};

export default errorReducer;
