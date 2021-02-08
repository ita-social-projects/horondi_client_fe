import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setCategories, setCategoriesLoading } from './categories.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_CATEGORIES } from './categories.types';
import query from './categories.operations';

export function* handleCategoriesLoad() {
  yield put(setCategoriesLoading(true));
  try {
    const categories = yield call(getItems, query);
    yield put(setCategories(categories.data.getAllCategories.items));
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
