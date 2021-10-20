import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  resetState,
  setConfirmationLoading,
  setPasswordIsReset,
  setRecoveryLoading,
  setUser,
  setUserIsChecked,
  setUserIsConfirmed,
  setUserLoading,
  userHasRegistered,
  setConfirmationEmailStatus,
  userHasRecovered,
  setUserError
} from '../user.actions';
import userReducer from '../user.reducer';
import {
  payload,
  initialStateMock,
  email,
  pass,
  rememberMe,
  user,
  purchasedProducts,
  token,
  userWithProducts,
  language,
  userCart,
  userId,
  upload,
  error,
  cartFromLc
} from './user.mocks';
import {
  handleUserLogin,
  handleUserConfirm,
  handleUserRecovery,
  handlePasswordReset,
  handleTokenCheck,
  handleUserRegister,
  handleUserPreserve,
  handleUpdateUser,
  handleSendConfirmation,
  handleGoogleUserLogin,
  handleUserLogout,
  handleRefreshTokenInvalid,
  handleUserError
} from '../user.sagas';
import {
  loginUser,
  getGoogleUser,
  confirmUserEmail,
  recoverUser,
  checkIfTokenIsValid,
  registerUser,
  resetPassword,
  updateUserById,
  sendEmailConfirmation,
  getUserByToken,
  getPurchasedProducts
} from '../user.operations';
import routes from '../../../const/routes';
import { resetWishlist, setWishlist } from '../../wishlist/wishlist.actions';
import { getCartByUserId, mergeCartFromLSWithUserCart } from '../../cart/cart.operations';
import { resetCart, setCart, setCartLoading, setCartTotalPrice } from '../../cart/cart.actions';
import { SNACKBAR_MESSAGE, SNACKBAR_TYPES, USER_IS_BLOCKED } from '../../../configs';
import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../../snackbar/snackbar.actions';
import { handleUserIsBlocked } from '../../../utils/user-helpers';
import { AUTH_ERRORS } from '../../../const/error-messages';
import { USER_ERROR } from '../../../translations/user.translations';
import { clearLocalStorage } from '../../../services/local-storage.service';

describe('user sagas tests', () => {
  it('should handle google user login ', () =>
    expectSaga(handleGoogleUserLogin, { payload })
      .withReducer(userReducer)
      .put(setUserLoading(true))
      .provide([
        [call(getGoogleUser, payload), user],
        [call(getPurchasedProducts, user._id), purchasedProducts],
        [call(mergeCartFromLSWithUserCart, cartFromLc, user._id), userCart]
      ])
      .put(setUser({ ...user, purchasedProducts }))
      .put(setWishlist(user.wishlist))
      .put(setCart(userCart.cart.items))
      .put(setCartTotalPrice(userCart.cart.totalPrice))
      .put(push(routes.pathToProfile))
      .put(setUserLoading(false))
      .hasFinalState({
        ...initialStateMock,
        userData: userWithProducts
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(7);
        expect(analysisCall).toHaveLength(3);
        clearLocalStorage();
      }));

  it('should hangle google login error', () =>
    expectSaga(handleGoogleUserLogin, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user login', () =>
    expectSaga(handleUserLogin, { payload })
      .put(setUserLoading(true))
      .provide([
        [call(loginUser, { user: { email, pass, rememberMe } }), user],
        [call(getPurchasedProducts, user._id), purchasedProducts],
        [call(mergeCartFromLSWithUserCart, cartFromLc, user._id), userCart]
      ])
      .put(setUser({ ...user, purchasedProducts }))
      .put(setWishlist(user.wishlist))
      .put(setCart(userCart.cart.items))
      .put(setCartTotalPrice(userCart.cart.totalPrice))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(7);
        expect(analysisCall).toHaveLength(3);
      }));

  it('should hangle login error', () =>
    expectSaga(handleUserLogin, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user confirm', () =>
    expectSaga(handleUserConfirm, { payload: token })
      .withReducer(userReducer)
      .put(resetState())
      .put(setUserLoading(true))
      .provide([[call(confirmUserEmail, token), user]])
      .put(setUserIsConfirmed(true))
      .put(setUserLoading(false))
      .hasFinalState({
        ...initialStateMock,
        userData: { confirmed: true }
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle user confirm error', () =>
    expectSaga(handleUserConfirm, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user recovery', () =>
    expectSaga(handleUserRecovery, { payload: { email, language } })
      .withReducer(userReducer)
      .put(resetState())
      .put(setRecoveryLoading(true))
      .provide([[call(recoverUser, { email, language })]])
      .put(setRecoveryLoading(false))
      .put(userHasRecovered(true))
      .hasFinalState({
        ...initialStateMock,
        userRecovered: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle user recovery error', () =>
    expectSaga(handleUserRecovery, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        recoveryLoading: true,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle password reset', () =>
    expectSaga(handlePasswordReset, { payload: { pass, token } })
      .withReducer(userReducer)
      .put(resetState())
      .put(setUserLoading(true))
      .provide([[call(resetPassword, { pass, token })]])
      .put(setUserLoading(false))
      .put(setPasswordIsReset(true))
      .hasFinalState({
        ...initialStateMock,
        passwordReset: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(2);
      }));

  it('should handle password reset error', () =>
    expectSaga(handlePasswordReset, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user register', () =>
    expectSaga(handleUserRegister, { payload: { user, language } })
      .withReducer(userReducer)
      .put(setUserLoading(true))
      .provide([[call(registerUser, { user, language })]])
      .put(setUserLoading(false))
      .put(userHasRegistered(true))
      .hasFinalState({
        ...initialStateMock,
        userRegistered: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(3);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle user register error', () =>
    expectSaga(handleUserRegister, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user preserve', () =>
    expectSaga(handleUserPreserve)
      .withReducer(userReducer)
      .put(setUserLoading(true))
      .put(setCartLoading(true))
      .provide([
        [call(getUserByToken), user],
        [call(getPurchasedProducts, user._id), purchasedProducts],
        [call(getCartByUserId, user._id), userCart]
      ])
      .put(setUser({ ...user, purchasedProducts }))
      .put(setCart(userCart.cart.items))
      .put(setCartTotalPrice(userCart.cart.totalPrice))
      .put(setUserIsChecked(true))
      .put(setCartLoading(false))
      .put(setUserLoading(false))
      .hasFinalState({
        ...initialStateMock,
        userIsChecked: true,
        userData: {
          ...user,
          purchasedProducts
        }
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(8);
        expect(analysisCall).toHaveLength(3);
      }));

  it('should handle user preserve error', () =>
    expectSaga(handleUserPreserve)
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        userIsChecked: true,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle update user', () =>
    expectSaga(handleUpdateUser, { payload: { user, id: userId, upload } })
      .withReducer(userReducer)
      .put(resetState())
      .put(setUserLoading(true))
      .provide([
        [call(updateUserById, { user, id: userId, upload }), user],
        [call(getPurchasedProducts, user._id), purchasedProducts]
      ])
      .put(setUser({ ...user, purchasedProducts }))
      .put(setUserLoading(false))
      .hasFinalState({
        ...initialStateMock,
        userData: {
          ...user,
          purchasedProducts
        }
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(2);
      }));

  it('should handle update user error', () =>
    expectSaga(handleUpdateUser, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle send confirmation', () =>
    expectSaga(handleSendConfirmation, { payload: { email, language } })
      .withReducer(userReducer)
      .put(resetState())
      .put(setConfirmationLoading(true))
      .provide([[call(sendEmailConfirmation, { email, language })]])
      .put(setConfirmationLoading(false))
      .put(setConfirmationEmailStatus(true))
      .hasFinalState({
        ...initialStateMock,
        confirmationEmailSent: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle user confirmation error', () =>
    expectSaga(handleSendConfirmation, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        confirmationLoading: true,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle user logout', () =>
    expectSaga(handleUserLogout)
      .put(setUser(null))
      .put(resetCart())
      .put(resetWishlist())
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(5);
        expect(analysisCall).toHaveLength(0);
      }));

  it('should handle token check', () =>
    expectSaga(handleTokenCheck, { payload: { token } })
      .put(resetState())
      .put(setUserLoading(true))
      .provide([[call(checkIfTokenIsValid, { token })]])
      .put(setUserLoading(false))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(3);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle token check error', () =>
    expectSaga(handleTokenCheck, { payload: null })
      .provide([[call(handleUserError, error)]])
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run());

  it('should handle refresh token invalid', () =>
    expectSaga(handleRefreshTokenInvalid)
      .provide([[call(handleUserLogout)]])
      .put(setSnackBarMessage(SNACKBAR_MESSAGE.tokenExpired))
      .put(setSnackBarSeverity(SNACKBAR_TYPES.warning))
      .put(setSnackBarStatus(true))
      .put(push(routes.pathToLogin))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(4);
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle user default error', () =>
    expectSaga(handleUserError, error)
      .withReducer(userReducer)
      .put(setUserError(USER_ERROR.DEFAULT_ERROR[language].value))
      .hasFinalState({
        ...initialStateMock,
        error: USER_ERROR.DEFAULT_ERROR[language].value
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        expect(analysisPut).toHaveLength(1);
      }));

  it('should handle user is blocked error', () =>
    expectSaga(handleUserError, { message: USER_IS_BLOCKED })
      .withReducer(userReducer)
      .provide([[call(handleUserIsBlocked)]])
      .hasFinalState({
        ...initialStateMock
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisCall).toHaveLength(1);
      }));

  it('should handle refresh token invalid error', () =>
    expectSaga(handleUserError, { message: AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID })
      .withReducer(userReducer)
      .provide([[call(handleRefreshTokenInvalid)]])
      .hasFinalState({
        ...initialStateMock
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisCall).toHaveLength(1);
      }));
});
