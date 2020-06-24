import { takeEvery, call, put } from 'redux-saga/effects';

import getItems from '../../services/getItems';
import { setCategories } from './categories.actions';
import { CATEGORIES_LOADED } from './categories.types';

function* handleCategoriesLoad() {
  const categories = yield call(
    getItems,
    `query {
        categories{
          categoryCode,
          _id
          images{
          large
          }
          name{
            value
          }
        }
      }`
  );
  yield put(setCategories(categories.data.data.getAllCategories));
}

export default function* watchCategoriesLoad() {
  yield takeEvery(CATEGORIES_LOADED, handleCategoriesLoad);
}
