import { SET_ERROR } from './error.types';

const initialState = {
  error: null
};

export const errorReducer = (state = initialState, action = {}) => {
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload
    };
  } 
  return state;
  
};
