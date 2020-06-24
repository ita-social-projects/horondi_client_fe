import { all } from 'redux-saga/effects';
import watchNewsLoad from './news/news.sagas';
import watchCategoriesLoad from './home-categories/categories.sagas';

export default function* rootSaga() {
  yield all([watchNewsLoad(), watchCategoriesLoad()]);
}
