import { SET_ERROR, GET_ERROR } from './error.types';

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

const getError = () => ({
  type: GET_ERROR
});

export { setError, getError };
