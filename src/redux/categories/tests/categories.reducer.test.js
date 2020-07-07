import categoriesReducer from '../categories.reducer';
import { SET_CATEGORIES } from '../categories.types';

describe('categories.reducer.test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      list: [],
      loading: true
    };
  });

  it('should return default state', () => {
    expect(categoriesReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new categories', () => {
    const newCategories = {
      type: SET_CATEGORIES,
      payload: {
        name: [
          {
            value: 'Рюкзаки',
            lang: 'uk'
          }
        ]
      }
    };
    const state = {
      list: newCategories.payload,
      loading: false
    };

    expect(categoriesReducer(initialState, newCategories)).toEqual(state);
  });
});
