import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setBurgerMenu, setBurgerMenuLoading } from './burger-menu.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_BURGER_MENU_LINKS } from './burger-menu.types';
import query from './burger-menu.oparations';
export function* handleBurgerMenuLoad() {
  yield put(setBurgerMenuLoading(true));
  try {
    const burgerMenu = yield call(getItems, query);
    yield put(setBurgerMenu(burgerMenu.data.getCategoriesForBurgerMenu));
    yield put(setBurgerMenuLoading(false));
  } catch (e) {
    yield put(setBurgerMenuLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* burgerMenuSaga() {
  yield takeEvery(GET_BURGER_MENU_LINKS, handleBurgerMenuLoad);
}
