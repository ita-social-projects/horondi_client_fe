import { takeEvery, call, put } from 'redux-saga/effects';

import { push } from 'connected-react-router';

import { getContacts } from './contacts.operations';
import { setError } from '../error/error.actions';
import { setContacts, setLoading } from './contacts.actions';
import { GET_CONTACTS } from './contacts.types';

export function* handleContactsLoad() {
  try {
    yield put(setLoading(true));

    const contacts = yield call(getContacts);
    yield put(setContacts(contacts.items));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}

export default function* contactsSaga() {
  yield takeEvery(GET_CONTACTS, handleContactsLoad);
}
