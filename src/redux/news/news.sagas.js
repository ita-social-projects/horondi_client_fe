import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setNews, setArticle, setLoading } from './news.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';

export function* handleNewsLoad() {
  try {
    yield put(setLoading(true));
    const news = yield call(
      getItems,
      `query {
        getAllNews {
          items {
            _id
            title {
              value
            }
            slug
            author {
              name {
                value
              }
              image 
            }
            text {
              value
            }
            date
            image
          }
        }
      }
      `
    );
    yield put(setNews(news.data.getAllNews.items));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleArticleLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const article = yield call(
      getItems,
      `query{
        getNewsById(id:"${payload}"){
          ... on News{
           __typename
            _id
            title{
              value
            }
            text{
              value
            }
            image
            author{
              name{
                value
              }
              image
            }
            date
          }
          ... on Error {
            message
            statusCode
          }
        }
      }`
    );

    if (article.data.getNewsById.message) {
      throw new Error(`${article.data.getNewsById.statusCode} ${article.data.getNewsById.message}`);
    }

    yield put(setArticle(article.data.getNewsById));
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
