import { takeEvery, call, put } from 'redux-saga/effects';
import { storeSetNews } from '../../actions/index';
import getItems from '../../../../services/getItems';

function* handleNewsLoad() {
  const news = yield call(
    getItems,
    `query{
             getAllNews{
               _id
               title{
                 lang
                 value
               }
               author{
                name
              }
              date
              images{
                primary{
                  medium
                }
              }
             }
           }`
  );
  yield put(storeSetNews(news.data.data.getAllNews));
}

export default function* watchNewsLoad() {
  yield takeEvery('NEWS_LOADED', handleNewsLoad);
}
