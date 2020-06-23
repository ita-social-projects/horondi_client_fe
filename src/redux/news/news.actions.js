const setNews = (news) => ({
  type: 'SET_NEWS',
  payload: news
});

const watchNewsLoad = () => ({
  type: 'NEWS_LOADED'
});

export { setNews, watchNewsLoad };
