import { setError } from '../error.actions';
import { SET_ERROR } from '../error.types';

describe('Error actions test', () => {
  it('should set new error to payload property', () => {
    const response = {
      errors: [
        {
          lang: 'ua',
          value: 'Категорій не знайдено'
        },
        {
          lang: 'en',
          value: 'Categories not found'
        }
      ]
    };

    const result = {
      type: SET_ERROR,
      payload: response.errors
    };

    expect(setError(response.errors)).toEqual(result);
  });
});
