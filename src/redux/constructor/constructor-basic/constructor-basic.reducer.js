import { SET_CONSTRUCTOR_BASIC } from './constructor-basic.types';

const constructorBasic = (state = '', action = {}) => {
  if (action.type === SET_CONSTRUCTOR_BASIC) {
    return action.payload;
  }
  return state;
};

export default constructorBasic;
