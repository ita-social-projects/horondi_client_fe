import { all } from 'redux-saga/effects';

import newsSaga from './news/news.sagas';
import categoriesSaga from './categories/categories.sagas';
import wishlistSaga from './wishlist/wishlist.sagas';

export default function* rootSaga() {
  yield all([newsSaga(), categoriesSaga(), wishlistSaga()]);
}
