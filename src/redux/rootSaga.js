import { all } from 'redux-saga/effects';
import watchNewsLoad from './news/news.sagas';

export default function* rootSaga() {
  yield all([watchNewsLoad()]);
}
