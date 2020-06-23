import { takeEvery, call, put } from 'redux-saga/effects';
import { setNews } from './news.actions';
import getItems from '../../services/getItems';

function* handleNewsLoad() {
  const news = yield call(
    getItems,
    `query{
       getAllNews{
         _id
         title {
           value
        }
               author{
                name{
                  value
                }
                image{
                  small
                }
              }
              text{
                value
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
  yield put(setNews(news.data.data.getAllNews));
}

export default function* watchNewsLoad() {
  yield takeEvery('NEWS_LOADED', handleNewsLoad);
}
