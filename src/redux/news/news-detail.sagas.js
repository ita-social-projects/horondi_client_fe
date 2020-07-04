import { takeEvery, call, put } from 'redux-saga/effects';
import { setArticle } from './news.actions';
import getItems from '../../utils/client';
import { GET_NEWS_ARTICLE } from './news.types';

function* handleArticleLoad({ payload }) {
  try {
    const article = yield call(
      getItems,
      `query{
        getNewsById(id:"${payload}"){
          _id
          title{
            value
          }
          text{
            value
          }
          images{
            primary{
              medium
            }
            additional{
              medium
            }
          }
          video
          author{
            name{
              value
            }
            image{
              small
            }
          }
          date
        }
      }`
    );
    yield put(setArticle(article.data.getNewsById));
  } catch (error) {
    console.log(error);
  }
}

export default function* newsDetailSaga() {
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
