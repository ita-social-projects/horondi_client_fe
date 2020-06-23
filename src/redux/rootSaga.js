import { all } from 'redux-saga/effects';
import watchNewsLoad from './news-page/news-sagas';

export default function* rootSaga() {
  yield all([watchNewsLoad()]);
}
