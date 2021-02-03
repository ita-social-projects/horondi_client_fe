import { SET_CONSTRUCTOR_FRONT_POCKET } from './constructor-front-pocket.types';

const constructorFrontPocket = (state = {}, action = {}) => {
  if (action.type === SET_CONSTRUCTOR_FRONT_POCKET) {
    return action.payload;
  }
  return state;
};

export default constructorFrontPocket;
