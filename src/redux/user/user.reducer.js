import { SET_USER, SET_ERROR, LOGOUT_USER } from './user.types';

const initialState = {
  userData: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      userData: action.payload
    };
  case SET_ERROR:
    return {
      ...state,
      error: action.payload
    };
  case LOGOUT_USER:
    return {
      ...initialState
    };
  default:
    return state;
  }
};

export default userReducer;
