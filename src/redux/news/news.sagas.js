import { takeEvery, call, put } from 'redux-saga/effects';
import { setNews, setArticle } from './news.actions';
import getItems from '../../utils/client';
import { GET_NEWS, GET_NEWS_ARTICLE } from './news.types';

function* handleNewsLoad() {
  try {
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
}

export default function* newsSaga() {
  yield takeEvery(GET_NEWS, handleNewsLoad);
  yield takeEvery(GET_NEWS_ARTICLE, handleArticleLoad);
}
