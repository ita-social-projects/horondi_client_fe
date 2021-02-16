import {
  GET_CONSTRUCTOR_FRONT_POCKET,
  SET_CONSTRUCTOR_FRONT_POCKET
} from './constructor-front-pocket.types';

const getConstructorFrontPocket = (payload) => ({
  type: GET_CONSTRUCTOR_FRONT_POCKET,
  payload
});

const setConstructorFrontPocket = (payload) => ({
  type: SET_CONSTRUCTOR_FRONT_POCKET,
  payload
});

export { getConstructorFrontPocket, setConstructorFrontPocket };
