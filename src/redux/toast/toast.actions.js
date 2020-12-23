import { SET_TOAST_MESSAGE } from './toast.types';

const setToastMessage = (newToastMessage) => ({
  type: SET_TOAST_MESSAGE,
  payload: newToastMessage
});

export { setToastMessage };
