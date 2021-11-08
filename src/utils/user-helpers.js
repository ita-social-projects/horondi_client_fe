import { put } from 'redux-saga/effects';

import infoImg from '../images/information.png';
import infoLightImg from '../images/info-light.png';
import { handleUserLogout } from '../redux/user/user.sagas';

export function* handleUserIsBlocked() {
  yield put(handleUserLogout);
}

export const setInfoImgByTheme = (theme) => (theme ? infoImg : infoLightImg);
