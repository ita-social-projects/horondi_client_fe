import {
  setUserError,
  setUser,
  loginUser,
  loginByGoogle,
  logoutUser,
  setUserLoading,
  resetState,
  recoverUser,
  resetPassword,
  registerUser,
  userHasRecovered,
  preserveUser,
  setUserIsChecked,
  updateUser,
  setUserIsConfirmed,
  setConfirmationLoading,
  setRecoveryLoading,
  setUserOrders,
  addProductToUserCartOrWishlist,
  removeProductFromUserCartOrWishlist,
  deleteUserDataFromStore
} from '../user.actions';
import {
  SET_USER_ERROR,
  SET_USER,
  LOGIN_USER,
  LOGIN_BY_GOOGLE,
  LOGOUT_USER,
  SET_USER_LOADING,
  STATE_RESET,
  RECOVER_USER,
  PASSWORD_RESET,
  REGISTER_USER,
  USER_HAS_RECOVERED,
  PRESERVE_USER,
  SET_USER_IS_CHECKED,
  UPDATE_USER,
  SET_USER_IS_CONFIRMED,
  SET_CONFIRMATION_LOADING,
  SET_RECOVERY_LOADING,
  SET_USER_ORDERS,
  ADD_PRODUCT_TO_USER_CART_OR_WISHLIST,
  REMOVE_PRODUCT_FROM_USER_CART_OR_WISHLIST,
  SET_DELETE_USER
} from '../user.types';
import { initialStateMock, userMocks } from './user.mocks';

describe('test User actions', () => {
  test('should set error to false', () => {
    const result = {
      type: SET_USER_ERROR,
      payload: false
    };
    expect(setUserError(false)).toEqual(result);
  });
  test('should set user', () => {
    const result = {
      type: SET_USER,
      payload: userMocks
    };
    expect(setUser(userMocks)).toEqual(result);
  });
  test('should test loginUser', () => {
    expect(loginUser('user')).toEqual({
      type: LOGIN_USER,
      payload: userMocks.name
    });
  });
  test('should test loginByGoogle', () => {
    expect(loginByGoogle('user')).toEqual({
      type: LOGIN_BY_GOOGLE,
      payload: userMocks.name
    });
  });
  test('should test confirmUser', () => {
    expect(logoutUser()).toEqual({
      type: LOGOUT_USER
    });
  });
  test('should test setUserLoading', () => {
    expect(setUserLoading(true)).toEqual({
      type: SET_USER_LOADING,
      payload: true
    });
  });
  test('should test confirmUser', () => {
    expect(resetState()).toEqual({
      type: STATE_RESET
    });
  });
  test('should test recoverUser', () => {
    expect(recoverUser(userMocks)).toEqual({
      type: RECOVER_USER,
      payload: userMocks
    });
  });
  test('should test resetPassword', () => {
    expect(resetPassword('newPassword')).toEqual({
      type: PASSWORD_RESET,
      payload: 'newPassword'
    });
  });
  test('should test registerUser', () => {
    expect(registerUser(userMocks)).toEqual({
      type: REGISTER_USER,
      payload: userMocks
    });
  });
  test('should test registerUser', () => {
    expect(userHasRecovered(userMocks)).toEqual({
      type: USER_HAS_RECOVERED,
      payload: userMocks
    });
  });
  test('should preserveUser', () => {
    expect(preserveUser()).toEqual({
      type: PRESERVE_USER
    });
  });
  test('should test setUserIsChecked', () => {
    expect(setUserIsChecked(true)).toEqual({
      type: SET_USER_IS_CHECKED,
      payload: true
    });
  });
  test('should test updateUser', () => {
    expect(updateUser(userMocks)).toEqual({
      type: UPDATE_USER,
      payload: userMocks
    });
  });
  test('should test setUserIsConfirmed', () => {
    expect(setUserIsConfirmed(true)).toEqual({
      type: SET_USER_IS_CONFIRMED,
      payload: true
    });
  });
  test('should test setConfirmationLoading', () => {
    expect(setConfirmationLoading(true)).toEqual({
      type: SET_CONFIRMATION_LOADING,
      payload: true
    });
  });
  test('should test setRecoveryLoading', () => {
    expect(setRecoveryLoading(true)).toEqual({
      type: SET_RECOVERY_LOADING,
      payload: true
    });
  });
  test('should test setUserOrders', () => {
    expect(setUserOrders(null)).toEqual({
      type: SET_USER_ORDERS,
      payload: initialStateMock.userOrders
    });
  });
  test('should test addProductToUserCartOrWishlist', () => {
    expect(addProductToUserCartOrWishlist(1)).toEqual({
      type: ADD_PRODUCT_TO_USER_CART_OR_WISHLIST,
      payload: userMocks.id
    });
  });
  test('should test removeProductFromUserCartOrWishlist', () => {
    expect(removeProductFromUserCartOrWishlist(1)).toEqual({
      type: REMOVE_PRODUCT_FROM_USER_CART_OR_WISHLIST,
      payload: userMocks.id
    });
  });
  test('should test deleteUserDataFromStore', () => {
    expect(deleteUserDataFromStore()).toEqual({
      type: SET_DELETE_USER
    });
  });
});
