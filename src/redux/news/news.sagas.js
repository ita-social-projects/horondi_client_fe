import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setNews, setArticle, setLoading } from './news.actions';
import { setError } from '../error/error.actions';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';
import { getAllNews, getNewsById } from './news.operations';

export function* handleNewsLoad() {
  try {
    yield put(setLoading(true));
    const news = yield call(getAllNews);
    yield put(setNews(news.items));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleArticleLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const article = yield call(getNewsById, payload);

    if (article.message) {
      throw new Error(`${article.statusCode} ${article.message}`);
    }

    yield put(setArticle(article));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleNewsError({ message }) {
  yield put(setLoading(false));
  yield put(setError(message));
  yield put(push('/error-page'));
}

export default function* newsSaga() {
  yield takeEvery(GET_NEWS, handleNewsLoad);
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
