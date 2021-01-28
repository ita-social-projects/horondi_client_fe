import { SET_TOAST_SETTINGS } from './toast.types';

export const initialState = {
  toastSettings: {}
};

export const toastReducer = (state = initialState, action = {}) => {
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
