import { GET_NEWS, SET_NEWS } from './news.types';

const initialState = {
  list: []
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        list: action.payload
      };
    case GET_NEWS:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default list;
