import { SET_NEWS, SET_ARTICLE, SET_LOADING } from './news.types';

const initialState = {
  loading: true,
  list: [],
  item: {
    title: [{ value: '' }, { value: '' }],
    images: [
      {
        primary: { medium: '' },
        additional: [{ medium: '' }]
      }
    ],
    text: [{ value: '' }, { value: '' }],
    author: {
      name: [{ value: '' }, { value: '' }],
      image: [
        {
          small: ''
        }
      ]
    }
  }
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        list: action.payload
      };
    case SET_ARTICLE:
      return {
        ...state,
        item: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default newsReducer;
