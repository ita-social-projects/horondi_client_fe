import {
  SET_USER,
  SET_USER_ERROR,
  SET_USER_LOADING,
  STATE_RESET,
  USER_HAS_REGISTERED,
  USER_HAS_RECOVERED,
  SET_USER_IS_CHECKED,
  PASSWORD_IS_RESET,
  CONFIRMATION_EMAIL_SENT,
  SET_USER_IS_CONFIRMED,
  SET_CONFIRMATION_LOADING,
  SET_RECOVERY_LOADING
} from './user.types';

export const initialState = {
  userData: null,
  error: null,
  userLoading: false,
  userRecovered: false,
  userRegistered: false,
  userIsChecked: false,
  passwordReset: false,
  confirmationEmailSent: false,
  recoveryLoading: false,
  confirmationLoading: false
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
    case SET_USER_LOADING:
      return {
        ...state,
        userLoading: action.payload
      };
    case STATE_RESET:
      return {
        ...initialState,
        userData: state.userData,
        userIsChecked: state.userIsChecked,
        confirmationEmailSent: state.confirmationEmailSent,
        userRecovered: state.userRecovered
      };
    case USER_HAS_REGISTERED:
      return {
        ...state,
        userRegistered: action.payload
      };
    case USER_HAS_RECOVERED:
      return {
        ...state,
        userRecovered: action.payload
      };
    case PASSWORD_IS_RESET:
      return {
        ...state,
        passwordReset: action.payload
      };
    case SET_USER_IS_CHECKED:
      return {
        ...state,
        userIsChecked: action.payload
      };
    case CONFIRMATION_EMAIL_SENT:
      return {
        ...state,
        confirmationEmailSent: action.payload
      };
    case SET_USER_IS_CONFIRMED:
      return {
        ...state,
        userData: {
          ...state.userData,
          confirmed: action.payload
        }
      };
    case SET_CONFIRMATION_LOADING:
      return {
        ...state,
        confirmationLoading: action.payload
      };
    case SET_RECOVERY_LOADING:
      return {
        ...state,
        recoveryLoading: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
