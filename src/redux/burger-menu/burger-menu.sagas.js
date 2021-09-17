import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setBurgerMenuLinks, setBurgerMenuLoadingLinks } from './burger-menu.actions';
import { setError } from '../error/error.actions';
import { GET_BURGER_MENU_LINKS } from './burger-menu.types';
import { getCategoriesForBurgerMenu } from './burger-menu.oparations';
import routes from '../../const/routes';

const { pathToErrorPage } = routes;

export function* handleBurgerMenuLoad() {
  yield put(setBurgerMenuLoadingLinks(true));
  try {
    const burgerMenu = yield call(getCategoriesForBurgerMenu);
    yield put(setBurgerMenuLinks(burgerMenu));
    yield put(setBurgerMenuLoadingLinks(false));
  } catch (e) {
    yield call(handleBurgerMenuError, e);
  }
}

function* handleBurgerMenuError(e) {
  yield put(setBurgerMenuLoadingLinks(false));
  yield put(setError({ e }));
  yield put(push(pathToErrorPage));
}

export default function* burgerMenuSaga() {
  yield takeEvery(GET_BURGER_MENU_LINKS, handleBurgerMenuLoad);
}
