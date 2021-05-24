import { SET_TOAST_MESSAGE, SET_TOAST_SETTINGS } from './toast.types';

export const initialState = {
  toastMessage: null,
  toastSettings: {}
};

export const toastReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload
      };
    case SET_TOAST_SETTINGS:
      return {
        ...state,
        toastSettings: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
