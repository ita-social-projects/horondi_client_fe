import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setCategories, setCategoriesLoading } from './categories.actions';
import { setError } from '../error/error.actions';
import { GET_CATEGORIES } from './categories.types';
import { getAllCategories } from './categories.operations';

export function* handleCategoriesLoad() {
  yield put(setCategoriesLoading(true));
  try {
    const categories = yield call(getAllCategories);
    yield put(setCategories(categories.items));
    yield put(setCategoriesLoading(false));
  } catch (e) {
    yield put(setCategoriesLoading(false));
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES, handleCategoriesLoad);
}
