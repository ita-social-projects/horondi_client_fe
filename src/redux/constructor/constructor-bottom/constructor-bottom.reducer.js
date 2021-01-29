import { SET_CONSTRUCTOR_BOTTOM } from './constructor-bottom.types';

const constructorBottom = (state = '', action = {}) => {
  if (action.type === SET_CONSTRUCTOR_BOTTOM) {
    return action.payload;
  }
  return state;
};

export default constructorBottom;
