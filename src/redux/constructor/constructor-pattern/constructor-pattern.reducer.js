import { SET_CONSTRUCTOR_PATTERN } from './constructor-pattern.types';

const constructorPattern = (state = '', action = {}) => {
  switch (action.type) {
  case SET_CONSTRUCTOR_PATTERN:
    return action.payload;

  default:
    return state;
  }
};

export default constructorPattern;
