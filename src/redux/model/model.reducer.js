import { SET_MODELS } from './model.types';

export const initialState = {
  models: []
};

const modelReducer = (state = initialState, action = {}) => {
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

export default modelReducer;
