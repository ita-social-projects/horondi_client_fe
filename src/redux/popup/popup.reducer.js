import { SET_POPUP_MESSAGE, SET_POPUP_STATUS } from './popup.types';

const initialState = {
  popupMessage: '',
  popupStatus: false
};

const popupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_POPUP_MESSAGE:
    return {
      ...state,
      popupMessage: action.payload
    };
  case SET_POPUP_STATUS:
    return {
      ...state,
      popupStatus: action.payload
    };

  default:
    return state;
  }
};

export default popupReducer;
