import { SET_SNACKBAR_MESSAGE, SET_SNACKBAR_SEVERITY, SET_SNACKBAR_STATUS } from './snackbar.types';

const initialState = {
  snackBarStatus: false,
  snackBarSeverity: '',
  snackBarMessage: ''
};

export const snackbarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SNACKBAR_SEVERITY:
      return {
        ...state,
        snackBarSeverity: action.payload
      };
    case SET_SNACKBAR_MESSAGE:
      return {
        ...state,
        snackBarMessage: action.payload
      };
    case SET_SNACKBAR_STATUS:
      return {
        ...state,
        snackBarStatus: action.payload
      };

    default:
      return state;
  }
};
