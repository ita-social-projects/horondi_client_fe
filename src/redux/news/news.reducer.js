import { SET_NEWS } from './news.types';

const initialState = {
  list: []
};

const newsReducer = (action, state = initialState) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
