import {
  LOGIN_USER,
  SET_USER,
  SET_ERROR,
  LOGOUT_USER,
  USER_LOADING
} from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

const userLoading = () => ({
  type: USER_LOADING
});
export { loginUser, setUser, setError, logoutUser, userLoading };
