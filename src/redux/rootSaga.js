import { all } from 'redux-saga/effects';
import getNews from './news/news.sagas';

export default function* rootSaga() {
  yield all([getNews()]);
}
