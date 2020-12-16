import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setCategories, setCategoriesLoading } from './categories.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_CATEGORIES } from './categories.types';

export function* handleCategoriesLoad() {
  yield put(setCategoriesLoading(true));
  const query = `query {
                   getAllCategories {
                     _id
                     name {
                     value
                     lang
                     }
                     images {
                      large
                     }            
                   }          
                 }`;

  try {
    const categories = yield call(getItems, query);
    yield put(setCategories(categories.data.getAllCategories));
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
