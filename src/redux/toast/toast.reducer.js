import { SET_TOAST_MESSAGE, SET_TOAST_SETTINGS } from './toast.types';

export const initialState = {
  toastMessage: null,
  toastSettings: {}
};

export const toastReducer = (state = initialState, action = {}) => {
  if (action.type === SET_TOAST_MESSAGE) {
    return {
      ...state,
      toastMessage: action.payload
    };
  }
  if (action.type === SET_TOAST_SETTINGS) {
    return {
      ...state,
      toastSettings: {
        ...action.payload
      }
    };
  }
  return state;
};
