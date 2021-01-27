import { SET_CONSTRUCTOR_BASIC } from './constructor-basic.types';

const constructorBasic = (state = '', action = {}) => {
  switch (action.type) {
  case SET_CONSTRUCTOR_BASIC:
    return action.payload;
  default:
    return state;
  }
};

export default constructorBasic;
