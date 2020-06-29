import { takeEvery, call, put } from 'redux-saga/effects';
import { setCategories } from './categories.actions';
import getItems from '../../utils/client';
import { GET_CATEGORIES } from './categories.types';

function* handleCategoriesLoad() {
  const query = `query {
               getAllCategories {
              categoryCode
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
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES, handleCategoriesLoad);
}
