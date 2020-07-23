import {
  LOGIN_USER,
  SET_USER,
  LOGOUT_USER,
  SET_USER_ERROR,
  SET_USER_LOADING
} from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

const setUserError = (error) => ({
  type: SET_USER_ERROR,
  payload: error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

const setUserLoading = () => ({
  type: SET_USER_LOADING
});
export { loginUser, setUser, setUserError, logoutUser, setUserLoading };
