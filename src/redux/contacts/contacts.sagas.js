import { takeEvery, call, put } from 'redux-saga/effects';

import { push } from 'connected-react-router';

import getItems from '../../utils/client';
import { setError } from '../error/error.actions';
import { setContacts, setContactsLoading } from './contacts.actions';
import { GET_CONTACTS } from './contacts.types';

export function* handleContactsLoad() {
  try {
    yield put(setContactsLoading(true));

    const contacts = yield call(
      getItems,
      `query {
        getContacts {
          ... on Contact {
            _id
            phoneNumber
            openHours {
              lang
              value
            }
            address {
              lang
              value
            }
            email
            images {
              medium
            }
            link
          }
        }
      }`
    );
    yield put(setContacts(contacts.data.getContacts));
    yield put(setContactsLoading(false));
  } catch (e) {
    yield put(setContactsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* contactsSaga() {
  yield takeEvery(GET_CONTACTS, handleContactsLoad);
}
