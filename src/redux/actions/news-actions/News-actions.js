const storeSetNews = (news) => ({
  type: 'SET_NEWS',
  payload: news
});

const wachNewsLoad = () => ({
  type: 'NEWS_LOADED'
});

export { storeSetNews, wachNewsLoad };
