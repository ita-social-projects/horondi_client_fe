const initialState = {
  news: []
};

const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload
      };
    case 'NEWS_LOADED':
      return {
        ...state
      };

    default:
      return state;
  }
};

export default newsReduser;
