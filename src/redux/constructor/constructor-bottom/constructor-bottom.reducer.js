import { SET_CONSTRUCTOR_BOTTOM } from './constructor-bottom.types';

const constructorBottom = (state = '', action = {}) => {
  switch (action.type) {
  case SET_CONSTRUCTOR_BOTTOM:
    return action.payload;
  default:
    return state;
  }
};

export default constructorBottom;
