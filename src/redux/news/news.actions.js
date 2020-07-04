import {
  GET_NEWS,
  SET_NEWS,
  GET_NEWS_ARTICLE,
  SET_ARTICLE
} from './news.types';

const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

const getNews = () => ({
  type: GET_NEWS
});

const setArticle = (article) => ({
  type: SET_ARTICLE,
  payload: article
});

const getArticle = (id) => ({
  type: GET_NEWS_ARTICLE,
  payload: id
});

export { setArticle, getArticle, setNews, getNews };
