import { SET_ERROR } from './error.types';

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

export { setError };
