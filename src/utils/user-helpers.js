import { put } from 'redux-saga/effects';

import infoImg from '../images/information.png';
import infoLightImg from '../images/info-light.png';
import { SNACKBAR_MESSAGE, SNACKBAR_TYPES } from '../configs';
import {
  setSnackBarStatus,
  setSnackBarMessage,
  setSnackBarSeverity
} from '../redux/snackbar/snackbar.actions';
import { handleUserLogout } from '../redux/user/user.sagas';

const { blocked } = SNACKBAR_MESSAGE;
const { error } = SNACKBAR_TYPES;

export function* handleUserIsBlocked() {
  yield put(handleUserLogout);
  yield put(setSnackBarStatus(true));
  yield put(setSnackBarMessage(blocked));
  yield put(setSnackBarSeverity(error));
}

export const setInfoImgByTheme = (theme) => (theme ? infoImg : infoLightImg);
