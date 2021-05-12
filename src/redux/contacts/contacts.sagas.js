import { takeEvery, call, put } from 'redux-saga/effects';

import { push } from 'connected-react-router';

import { getContacts } from './contacts.operations';
import { setError } from '../error/error.actions';
import { setContacts, setLoading } from './contacts.actions';
import { GET_CONTACTS } from './contacts.types';
import routes from '../../configs/routes';

export function* handleContactsLoad() {
  try {
    yield put(setLoading(true));

    const contacts = yield call(getContacts);
    yield put(setContacts(contacts.items));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleContactsError, e);
  }
}

function* handleContactsError(e) {
  yield put(setLoading(false));
  yield put(setError(e.message));
  yield put(push(routes.pathToErrorPage));
}

export default function* contactsSaga() {
  yield takeEvery(GET_CONTACTS, handleContactsLoad);
}
