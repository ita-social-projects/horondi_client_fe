import { takeEvery, call, put } from 'redux-saga/effects';
import { setNews, setArticle, setLoading } from './news.actions';
import getItems from '../../utils/client';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';

function* handleNewsLoad() {
  try {
    yield put(setLoading(true));
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
                  additional{
                    medium
                  }
                }
                video
               }
             }`
    );
    yield put(setNews(news.data.getAllNews));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error); // TODO: handler router redirect(connect router error page)
  }
}

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
    yield put(setLoading(article.loading));
  } catch (error) {
    console.log(error);
  }
}

export default function* newsSaga() {
  yield takeEvery(GET_NEWS, handleNewsLoad);
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
