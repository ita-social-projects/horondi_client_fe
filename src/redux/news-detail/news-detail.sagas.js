import { takeEvery, call, put } from 'redux-saga/effects';
import { setArticle } from './news-detail.actions';
import getItems from '../../utils/client';
import { GET_ARTICLE_BY_ID } from './news-detail.types';

function* handleArticleLoad() {
  console.log('jdjdjdjjdjdjjdj');
  try {
    const article = yield call(
      getItems,
      `query{
        getNewsById(id:){
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
    yield put(setArticle(article));
  } catch (error) {
    console.log(error);
  }
}

export default function* newsDetailSaga() {
  yield takeEvery(GET_ARTICLE_BY_ID, handleArticleLoad);
}
