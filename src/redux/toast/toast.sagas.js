import { takeEvery } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { SET_TOAST_MESSAGE } from './toast.types';

export function* handleSetToastMessage({ payload: message }) {
  yield toast.success(message);
}

export default function* toastSaga() {
  yield takeEvery(SET_TOAST_MESSAGE, handleSetToastMessage);
}
