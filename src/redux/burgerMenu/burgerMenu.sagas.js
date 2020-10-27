import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setBurgerMenu, setBurgerMenuLoading } from './burgerMenu.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_BURGER_MENU } from './burgerMenu.types';

export function* handleBurgerMenuLoad() {
  yield put(setBurgerMenuLoading(true));
  const query = `query {
    getCategoriesForBurgerMenu{
      category {
        _id
        name {
          lang
          value
        }
      }
      models {
        _id
        name {
          lang
          value
        } 
      }
    }
  }`;

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
  yield takeEvery(GET_BURGER_MENU, handleBurgerMenuLoad);
}
