import errorReducer from '../error.reducer';
import { setError } from '../error.actions';

describe('Error reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      error: null
    };
  });

  it('should return default state', () => {
    expect(errorReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new error', () => {
    const newError = {
      errors: [
        {
          lang: 'ua',
          value: 'Категорій не знайдено'
        },
        {
          lang: 'en',
          value: 'CategoriesList not found'
        }
      ]
    };

    const state = {
      error: newError
    };

    expect(errorReducer(initialState, setError(newError))).toEqual(state);
  });
});
