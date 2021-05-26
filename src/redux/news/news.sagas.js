import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setNews, setArticle, setLoading } from './news.actions';
import { setError } from '../error/error.actions';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';
import { getAllNews, getNewsById } from './news.operations';
import routes from '../../configs/routes';
import { AUTH_ERRORS } from '../../const/error-messages';
import { USER_IS_BLOCKED } from '../../configs';
import { handleUserError } from '../user/user.sagas';

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

    if (article?.message) {
      throw new Error(article.message);
    }

    yield put(setArticle(article));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleNewsError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setLoading(false));
    yield put(setError(e.message));
    yield put(push(routes.pathToErrorPage));
  }
}

export default function* newsSaga() {
  yield takeEvery(GET_NEWS, handleNewsLoad);
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
