import {
  SET_USER,
  SET_USER_ERROR,
  LOGOUT_USER,
  SET_USER_LOADING
} from './user.types';

export const initialState = {
  userData: null,
  error: null,
  userLoading: false
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
      userLoading: true
    };
  default:
    return state;
  }
};

export default userReducer;
