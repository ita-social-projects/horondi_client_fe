import { GET_USER, SET_USER, SET_ERROR } from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const getUser = (user) => ({
  type: GET_USER,
  payload: user
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});
export { getUser, setUser, setError };
