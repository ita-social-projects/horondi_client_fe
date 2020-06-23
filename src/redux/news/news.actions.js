import { NEWS_LOADED, SET_NEWS } from './news.types';

const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

const watchNewsLoad = () => ({
  type: NEWS_LOADED
});

export { setNews, watchNewsLoad };
