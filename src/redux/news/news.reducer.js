import { SET_NEWS } from './news.types';

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
    default:
      return state;
  }
};

export default list;
