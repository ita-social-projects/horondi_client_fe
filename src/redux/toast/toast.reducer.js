import { SET_TOAST_MESSAGE } from './toast.types';

const initialState = {
  toastMessage: null
};

const toastReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_TOAST_MESSAGE:
    return {
      ...state,
      toastMessage: action.payload
    };
  default:
    return state;
  }
};

export default toastReducer;
