import { takeEvery, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { SET_TOAST_MESSAGE } from './toast.types';

export function* handleSetToastMessage({ payload: message }) {
  const isLightTheme = yield select((state) => state.Theme.lightMode);
  yield isLightTheme ? toast(message) : toast.dark(message);
}

export default function* toastSaga() {
  yield takeEvery(SET_TOAST_MESSAGE, handleSetToastMessage);
}
