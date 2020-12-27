import { SET_TOAST_MESSAGE, SET_TOAST_SETTINGS } from './toast.types';

const setToastMessage = (newToastMessage) => ({
  type: SET_TOAST_MESSAGE,
  payload: newToastMessage
});

const setToastSettings = (newToastSettings) => ({
  type: SET_TOAST_SETTINGS,
  payload: newToastSettings
});

export { setToastMessage, setToastSettings };
