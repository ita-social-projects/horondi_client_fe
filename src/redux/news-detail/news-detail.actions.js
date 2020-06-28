import { GET_ARTICLE_BY_ID, SET_ARTICLE } from './news-detail.types';

const setArticle = (article) => ({
  type: SET_ARTICLE,
  payload: article
});

const getArticleById = (id) => ({
  type: GET_ARTICLE_BY_ID,
  payload: id
});

export { setArticle, getArticleById };
