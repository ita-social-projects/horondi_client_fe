import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setBurgerMenuLinks,
  setBurgerMenuLoadingLinks
} from './burger-menu.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_BURGER_MENU_LINKS } from './burger-menu.types';
import { getCategoriesForBurgerMenuQuery } from './burger-menu.oparations';

export function* handleBurgerMenuLoad() {
  yield put(setBurgerMenuLoadingLinks(true));
  try {
    const burgerMenu = yield call(getItems, getCategoriesForBurgerMenuQuery);
    yield put(setBurgerMenuLinks(burgerMenu.data.getCategoriesForBurgerMenu));
    yield put(setBurgerMenuLoadingLinks(false));
  } catch (e) {
    yield put(setBurgerMenuLoadingLinks(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* burgerMenuSaga() {
  yield takeEvery(GET_BURGER_MENU_LINKS, handleBurgerMenuLoad);
}
