import userReducer from '../user.reducer';
import {
  setUserError,
  setUser,
  logoutUser,
  setUserLoading,
  resetState,
  userHasRegistered,
  userHasRecovered,
  setUserIsChecked,
  setPasswordIsReset,
  setConfirmationEmailStatus,
  setUserIsConfirmed,
  setConfirmationLoading,
  setRecoveryLoading,
  setUserOrders,
  deleteUserDataFromStore
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
    expect(userReducer(initialStateMock, userHasRecovered(true))).toEqual({
      ...initialStateMock,
      userRecovered: true
    });
  });
  test('should test setPasswordIsReset', () => {
    expect(userReducer(initialStateMock, setPasswordIsReset(true))).toEqual({
      ...initialStateMock,
      passwordReset: true
    });
  });
  test('should test setUserIsChecked', () => {
    expect(userReducer(initialStateMock, setUserIsChecked(true))).toEqual({
      ...initialStateMock,
      userIsChecked: true
    });
  });
  test('should test setConfirmationEmailStatus', () => {
    expect(userReducer(initialStateMock, setConfirmationEmailStatus(true))).toEqual({
      ...initialStateMock,
      confirmationEmailSent: true
    });
  });
  test('should test setUserIsConfirmed', () => {
    expect(userReducer(initialStateMock, setUserIsConfirmed(true))).toEqual({
      ...initialStateMock,
      userData: {
        confirmed: true
      }
    });
  });
  test('should test setConfirmationLoading', () => {
    expect(userReducer(initialStateMock, setConfirmationLoading(true))).toEqual({
      ...initialStateMock,
      confirmationLoading: true
    });
  });
  test('should test setRecoveryLoading', () => {
    expect(userReducer(initialStateMock, setRecoveryLoading(true))).toEqual({
      ...initialStateMock,
      recoveryLoading: true
    });
  });
  test('should test setUserOrders', () => {
    expect(userReducer(initialStateMock, setUserOrders(true))).toEqual({
      ...initialStateMock,
      userOrders: true
    });
  });
  test('should test deleteUserDataFromStore', () => {
    expect(userReducer(initialStateMock, deleteUserDataFromStore())).toEqual({
      ...initialStateMock
    });
  });
});
