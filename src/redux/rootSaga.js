import { all } from 'redux-saga/effects';
import newsSaga from './news/news.sagas';
import categoriesSaga from './home-categories/categories.sagas';

export default function* rootSaga() {
  yield all([newsSaga(), categoriesSaga()]);
}
