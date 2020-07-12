import { SET_USER, SET_ERROR, LOGOUT_USER, USER_LOADING } from './user.types';

const initialState = {
  userData: null,
  error: null,
  userLoading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      error: false,
      userLoading: false,
      userData: action.payload
    };
  case SET_ERROR:
    return {
      ...state,
      userLoading: false,
      error: action.payload
    };
  case LOGOUT_USER:
    return {
      ...initialState
    };
  case USER_LOADING:
    return {
      ...state,
      userLoading: true
    };
  default:
    return state;
  }
};

export default userReducer;
