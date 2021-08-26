import { SET_CONSTRUCTOR_SIZE } from './constructor-size.types';

const constructorSize = (state = {}, action = {}) => {
  if (action.type === SET_CONSTRUCTOR_SIZE) {
    return action.payload;
  }
  return state;
};

export default constructorSize;
