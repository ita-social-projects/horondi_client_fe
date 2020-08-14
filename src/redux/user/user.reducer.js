import {
  SET_USER,
  SET_USER_ERROR,
  LOGOUT_USER,
  SET_USER_LOADING,
  STATE_RESET,
  SET_USER_RECOVERED,
  SET_PASSWORD_RESET,
  SET_USER_REGISTERED
} from './user.types';

export const initialState = {
  userData: null,
  error: null,
  userLoading: false,
  userRecovered: false,
  passwordReset: false,
  userRegistered: false
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      error: false,
      userLoading: false,
      userData: action.payload
    };
  case SET_USER_ERROR:
    return {
      ...state,
      userLoading: false,
      error: action.payload
    };
  case LOGOUT_USER:
    return {
      ...initialState
    };
  case SET_USER_LOADING:
    return {
      ...state,
      userLoading: action.payload
    };
  case STATE_RESET:
    return {
      ...state,
      error: initialState.error,
      userLoading: initialState.userLoading,
      userRecovered: initialState.userRecovered,
      passwordReset: initialState.passwordReset,
      userRegistered: initialState.userRegistered
    };
  case SET_USER_RECOVERED:
    return {
      ...state,
      userRecovered: action.payload,
      error: false,
      userLoading: false
    };
  case SET_PASSWORD_RESET:
    return {
      ...state,
      passwordReset: action.payload,
      error: false,
      userLoading: false
    };
  case SET_USER_REGISTERED:
    return {
      ...state,
      userRegistered: action.payload,
      error: false,
      userLoading: false
    };
  default:
    return state;
  }
};

export default userReducer;
