import { SET_CONSTRUCTOR_PATTERN } from './constructor-pattern.types';

const constructorPattern = (state = '', action = {}) => {
  if (action.type === SET_CONSTRUCTOR_PATTERN) {
    return action.payload;
  }
  return state;
};

export default constructorPattern;
