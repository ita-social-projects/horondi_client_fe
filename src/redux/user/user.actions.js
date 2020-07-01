import { LOGIN_USER, SET_USER, SET_ERROR, LOGOUT_USER } from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});
export { loginUser, setUser, setError, logoutUser };
