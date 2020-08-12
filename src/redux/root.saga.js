import { all } from 'redux-saga/effects';

import newsSaga from './news/news.sagas';
import categoriesSaga from './categories/categories.sagas';
import productsSaga from './products/products.sagas';
import wishlistSaga from './wishlist/wishlist.sagas';
import userSaga from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    categoriesSaga(),
    userSaga(),
    wishlistSaga(),
    productsSaga()
  ]);
}
