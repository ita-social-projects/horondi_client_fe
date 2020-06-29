import { SET_ARTICLE } from './news-detail.types';

const initialState = {
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

const newsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default newsDetailReducer;
