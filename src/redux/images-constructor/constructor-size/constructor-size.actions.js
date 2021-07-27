import { GET_CONSTRUCTOR_SIZE, SET_CONSTRUCTOR_SIZE } from './constructor-size.types';

const getConstructorSize = (payload) => ({
  type: GET_CONSTRUCTOR_SIZE,
  payload
});

const setConstructorSize = (payload) => ({
  type: SET_CONSTRUCTOR_SIZE,
  payload
});

export { getConstructorSize, setConstructorSize };
