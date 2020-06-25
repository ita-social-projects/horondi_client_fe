import { takeEvery, call, put } from 'redux-saga/effects';

import getItems from '../../services/getItems';
import { setCategories } from './categories.actions';
import { GET_CATEGORIES } from './categories.types';

function* handleCategoriesLoad() {
  try {
    const categories = yield call(
      getItems,
      `query {
            getAllCategories {
              categoryCode
              _id
              name {
               value
              }
              images {
                large
              }
            }          
    }`
    );

    yield put(setCategories(categories.data.data.getAllCategories));
  } catch (err) {
    console.log(err);
  }
}

export default function* watchCategoriesLoad() {
  yield takeEvery(GET_CATEGORIES, handleCategoriesLoad);
}
