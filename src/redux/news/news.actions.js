import { GET_NEWS, SET_NEWS } from './news.types';

const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

const getNews = () => ({
  type: GET_NEWS
});

export { setNews, getNews };
