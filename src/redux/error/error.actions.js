import { SET_ERROR, CLEAR_ERROR } from './error.types';

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

const clearError = () => ({
  type: CLEAR_ERROR
});

export { setError, clearError };
