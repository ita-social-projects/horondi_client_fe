import {
  SET_CONSTRUCTOR_BASIC,
  SET_CONSTRUCTOR_BOTTOM,
  SET_CONSTRUCTOR_MODEL,
  SET_CONSTRUCTOR_PATTERN
} from './constructor.types';

export const initialState = {
  constructorModel: '',
  constructorBasic: '',
  constructorBottom: '',
  constructorPattern: ''
};

const constructorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CONSTRUCTOR_MODEL:
    return {
      ...state,
      constructorModel: action.payload
    };
  case SET_CONSTRUCTOR_BASIC:
    return {
      ...state,
      constructorBasic: action.payload
    };
  case SET_CONSTRUCTOR_PATTERN:
    return {
      ...state,
      constructorPattern: action.payload
    };
  case SET_CONSTRUCTOR_BOTTOM:
    return {
      ...state,
      constructorBottom: action.payload
    };
  default:
    return state;
  }
};

export default constructorReducer;
