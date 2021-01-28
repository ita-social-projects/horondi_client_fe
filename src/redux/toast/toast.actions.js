import { SET_TOAST_SETTINGS } from './toast.types';

const setToastSettings = (newToastSettings) => ({
  type: SET_TOAST_SETTINGS,
  payload: newToastSettings
});

export { setToastSettings };
