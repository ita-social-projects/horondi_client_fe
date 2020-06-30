import { SET_ARTICLE } from './news-detail.types';

const initialState = {
  item: {
    title: [{ value: 'завантаження' }, { value: 'loading' }],
    images: [
      {
        primary: { medium: '' },
        additional: [{ medium: '' }]
      }
    ],
    text: [{ value: 'завантаження' }, { value: 'loading' }],
    author: {
      name: [{ value: 'завантаження' }, { value: 'loading' }],
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
