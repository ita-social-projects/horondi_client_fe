import { SET_CONSTRUCTOR_FRONT_POCKET } from './constructor-front-pocket.types';

const constructorFrontPocket = (state = '', action = {}) => {
  switch (action.type) {
  case SET_CONSTRUCTOR_FRONT_POCKET:
    return action.payload;

  default:
    return state;
  }
};

export default constructorFrontPocket;
