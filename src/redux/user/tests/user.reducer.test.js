import userReducer, { initialState } from '../user.reducer';
import {
  setUserError,
  setUser,
  logoutUser,
  setUserLoading
} from '../user.actions';

const user = {
  name: 'user',
  id: '12345'
};

describe('test language reducer', () => {
  test('should return initial states state', () => {
    expect(userReducer(undefined, 'UNSUPPORTED_ACTION')).toEqual(initialState);
  });
  test('should set user', () => {
    expect(userReducer(initialState, setUser(user))).toEqual({
      error: false,
      userLoading: false,
      userData: user
    });
  });
  test('should set error to true', () => {
    expect(userReducer(initialState, setUserError(true))).toEqual({
      ...initialState,
      error: true,
      userLoading: false
    });
  });
  test('should logout user', () => {
    expect(userReducer(initialState, logoutUser())).toEqual(initialState);
  });
  test('should user loading', () => {
    expect(userReducer(initialState, setUserLoading())).toEqual({
      ...initialState,
      userLoading: true
    });
  });
});
