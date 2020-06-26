import { takeEvery, call, put } from 'redux-saga/effects';
import { setCategories } from './categories.actions';
import getItems from '../../utils/client';
import { GET_CATEGORIES } from './categories.types';

function* handleCategoriesLoad() {
  try {
    const categories = yield call(
      getItems,
      `query {
                getAllCategories {
                    _id
                    categoryCode
                    name {
                        lang
                        value
                    }
                }
             }`
    );
    yield put(setCategories(categories.data.getAllCategories));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES, handleCategoriesLoad);
}
