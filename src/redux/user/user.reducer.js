import {
  SET_USER,
  SET_USER_ERROR,
  LOGOUT_USER,
  SET_USER_LOADING,
  STATE_RESET
} from './user.types';

export const initialState = {
  userData: null,
  error: null,
  userLoading: false,
  userRecovered: false,
  userRegistered: false
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      error: null,
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
  default:
    return state;
  }
};

export default userReducer;
