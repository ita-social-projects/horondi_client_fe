import { SET_TOAST_MESSAGE } from './toast.types';

const initialState = {
  toastMessage: null
};

const toastReducer = (state = initialState, action = {}) => {
  if (action.type === SET_TOAST_MESSAGE) {
    return {
      ...state,
      toastMessage: action.payload
    };
  }
  return state;
};

export default toastReducer;
