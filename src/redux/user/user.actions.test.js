import { setError, setUser } from './user.actions';
import { SET_ERROR, SET_USER } from './user.types';

const user = {
  name: 'user',
  id: '12345'
};

describe('test action', () => {
  test('should set error to false', () => {
    expect(setError(false)).toEqual({
      type: SET_ERROR,
      payload: false
    });
  });
  test('should set user', () => {
    expect(setUser(user)).toEqual({
      type: SET_USER,
      payload: {
        name: 'user',
        id: '12345'
      }
    });
  });
});
