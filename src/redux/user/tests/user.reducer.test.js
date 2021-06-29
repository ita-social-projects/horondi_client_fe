import userReducer from '../user.reducer';
import {
  setUserError,
  setUser,
  logoutUser,
  setUserLoading,
  resetState,
  userHasRegistered,
  userHasRecovered
} from '../user.actions';

import { userMocks, initialStateMock } from './user.mocks';

describe('test user.reducer', () => {
  test('should return initial states state', () => {
    expect(userReducer(undefined, 'UNSUPPORTED_ACTION')).toEqual(initialStateMock);
  });
  test('should set user', () => {
    expect(userReducer(initialStateMock, setUser(userMocks))).toEqual({
      error: false,
      userLoading: false,
      ...initialStateMock,
      userData: {
        id: userMocks.id,
        name: userMocks.name,
        curPage: userMocks.curPage,
        ordersCount: userMocks.ordersCount
      }
    });
  });
  test('should set error to true', () => {
    expect(userReducer(initialStateMock, setUserError(true))).toEqual({
      ...initialStateMock,
      error: true,
      userLoading: false
    });
  });
  test('should logout user', () => {
    expect(userReducer(initialStateMock, logoutUser())).toEqual(initialStateMock);
  });
  test('should user loading', () => {
    expect(userReducer(initialStateMock, setUserLoading(true))).toEqual({
      ...initialStateMock,
      userLoading: true
    });
  });
  test('should user state reset', () => {
    expect(userReducer(initialStateMock, resetState(true))).toEqual({
      ...initialStateMock,
      userData: initialStateMock.userData,
      userIsChecked: initialStateMock.userIsChecked,
      confirmationEmailSent: initialStateMock.confirmationEmailSent,
      userRecovered: initialStateMock.userRecovered
    });
  });
  test('should test userHasRegistered', () => {
    expect(userReducer(initialStateMock, userHasRegistered(true))).toEqual({
      ...initialStateMock,
      userRegistered: true
    });
  });
  test('should test userHasRecovered', () => {
    expect(userReducer(initialStateMock, userHasRecovered(false))).toEqual({
      ...initialStateMock,
      userRegistered: false
    });
  });
});
