import { SET_POPUP_MESSAGE, SET_POPUP_STATUS } from './popup.types';

const setPopupMessage = (newPopupMessage) => ({
  type: SET_POPUP_MESSAGE,
  payload: newPopupMessage
});

const setPopupStatus = (newPopupStatus) => ({
  type: SET_POPUP_STATUS,
  payload: newPopupStatus
});

export { setPopupMessage, setPopupStatus };
