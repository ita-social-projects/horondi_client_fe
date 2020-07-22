import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { handleNewsLoad, handleArticleLoad } from '../news.sagas';
import getItems from '../../../utils/client';
import { setLoading, setNews, setArticle } from '../news.actions';
import { SET_ERROR } from '../../error/error.types';
import { setError } from '../../error/error.actions';

describe('get news saga', () => {
  it('fetches news', () => {
    const newsExample = {
      data: {
        getAllNews: {
          news: [
            {
              author: {
                image: 'someImage.jpeg',
                name: 'Author Name'
              },
              date: '154568794567',
              title: 'Test title',
              text: 'Test text'
            },
            {
              author: {
                image: 'otherImage.jpeg',
                name: 'Second Author Name'
              },
              date: '154568794567',
              title: 'Second Test title',
              text: 'Second Test text'
            }
          ]
        }
      }
    };

    return expectSaga(handleNewsLoad)
      .provide([[matchers.call.fn(getItems), newsExample]])
      .put(setLoading(true))
      .put(setNews(newsExample.data.getAllNews))
      .put(setLoading(false))
      .run();
  });
});

it('handles errors', () => {
  const e = new Error('news not found');

  return expectSaga(handleNewsLoad)
    .provide([[matchers.call.fn(getItems), throwError(e)]])
    .put(setLoading(true))
    .put(setLoading(false))
    .put(setError({ e }))
    .run();
});

describe('get article saga', () => {
  it('fetches article', () => {
    const articleExample = {
      data: {
        getNewsById: {
          article: {
            author: {
              image: 'someImage.jpeg',
              name: 'Author Name'
            },
            date: '154568794567',
            title: 'Test title',
            text: 'Test text'
          }
        }
      }
    };

    return expectSaga(handleArticleLoad, { payload: '13546789456' })
      .provide([[matchers.call.fn(getItems), articleExample]])
      .put(setLoading(true))
      .put(setArticle(articleExample.data.getNewsById))
      .put(setLoading(false))
      .run();
  });

  it('handles errors', () => {
    const e = new Error('news not found');

    return expectSaga(handleArticleLoad, { payload: '13546789456' })
      .provide([[matchers.call.fn(getItems), throwError(e)]])
      .put(setLoading(true))
      .put(setLoading(false))
      .put(setError({ e }))
      .run();
  });
});
