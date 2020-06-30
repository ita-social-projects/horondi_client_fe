import { put, take, takeEvery } from 'redux-saga/effects';

import { START_LANGUAGE_SAGA } from './language.types';
import { changeLanguage } from './language.action';

function* languageWorker(value) {
  console.log(value);
  yield put(changeLanguage(value.payload));
}
export default function* languageSaga() {
  yield takeEvery(START_LANGUAGE_SAGA, languageWorker);
}
