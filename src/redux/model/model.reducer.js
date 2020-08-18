import { SET_MODELS } from './model.types';

const initialState = {
  models: []
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_MODELS:
    return {
      ...state,
      models: action.payload
    };
  default:
    return state;
  }
};

export default cartReducer;
