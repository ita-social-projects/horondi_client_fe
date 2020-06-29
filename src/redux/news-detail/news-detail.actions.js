import { GET_ARTICLE, SET_ARTICLE } from './news-detail.types';

const setArticle = (article) => ({
  type: SET_ARTICLE,
  payload: article
});

const getArticle = (id) => ({
  type: GET_ARTICLE,
  payload: id
});

export { setArticle, getArticle };
