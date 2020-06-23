const initialState = {
  list: []
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        list: action.payload
      };
    case 'NEWS_LOADED':
      return {
        ...state
      };

    default:
      return state;
  }
};

export default list;
