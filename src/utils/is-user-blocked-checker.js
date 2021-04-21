import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';

import { SNACKBAR_MESSAGE, USER_TOKENS, SNACKBAR_TYPES } from '../configs';
import { deleteUserDataFromStore } from '../redux/user/user.actions';
import routes from '../configs/routes';
import { setToLocalStorage } from '../services/local-storage.service';
import {
  setSnackBarStatus,
  setSnackBarMessage,
  setSnackBarSeverity
} from '../redux/snackbar/snackbar.actions';

const { blocked } = SNACKBAR_MESSAGE;
const { error } = SNACKBAR_TYPES;

export function* handleIsUserBlockedChecker() {
  yield put(deleteUserDataFromStore());
  yield put(setSnackBarStatus(true));
  yield put(setSnackBarMessage(blocked));
  yield put(setSnackBarSeverity(error));
  yield put(push(routes.pathToLogin));
  setToLocalStorage(USER_TOKENS.ACCES_TOKEN, null);
}
