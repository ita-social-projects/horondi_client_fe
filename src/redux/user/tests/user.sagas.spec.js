import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  resetState,
  setConfirmationEmailStatus,
  setConfirmationLoading,
  setPasswordIsReset,
  setRecoveryLoading,
  setUser,
  setUserError,
  setUserIsChecked,
  setUserIsConfirmed,
  setUserLoading,
  userHasRecovered,
  userHasRegistered
} from '../user.actions';
import userReducer from '../user.reducer';
import {
  email,
  error,
  initialStateMock,
  language,
  pass,
  payload,
  purchasedProducts,
  rememberMe,
  token,
  upload,
  user,
  userId,
  userWithProducts,
  wishlist
} from './user.mocks';
import {
  handleGoogleUserLogin,
  handleFacebookUserLogin,
  handlePasswordReset,
  handleRefreshTokenInvalid,
  handleSendConfirmation,
  handleTokenCheck,
  handleUpdateUser,
  handleUserConfirm,
  handleUserError,
  handleUserLogin,
  handleUserLogout,
  handleUserPreserve,
  handleUserRecovery,
  handleUserRegister
} from '../user.sagas';
import {
  checkIfTokenIsValid,
  confirmUserEmail,
  getGoogleUser,
  getFacebookUser,
  getPurchasedProducts,
  getUserByToken,
  loginUser,
  recoverUser,
  registerUser,
  resetPassword,
  sendEmailConfirmation,
  updateUserById,
  getWishlistByUserId
} from '../user.operations';
import routes from '../../../configs/routes';
import { USER_IS_BLOCKED, AUTH_ERRORS } from '../../../configs';
import { handleUserIsBlocked } from '../../../utils/user-helpers';
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
        [call(getWishlistByUserId, user._id), wishlist]
      ])
      .put(setUser({ ...user, purchasedProducts, wishlist }))
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
        expect(analysisPut).toHaveLength(5);
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

  it('should handle facebook user login ', () =>
    expectSaga(handleFacebookUserLogin, { payload })
      .withReducer(userReducer)
      .put(setUserLoading(true))
      .provide([
        [call(getFacebookUser, payload), user],
        [call(getPurchasedProducts, user._id), purchasedProducts],
        [call(getWishlistByUserId, user._id), wishlist]
      ])
      .put(setUser({ ...user, purchasedProducts, wishlist }))
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
        expect(analysisPut).toHaveLength(5);
        expect(analysisCall).toHaveLength(3);
        clearLocalStorage();
      }));

  it('should hangle facebook login error', () =>
    expectSaga(handleFacebookUserLogin, { payload: null })
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
        [call(getWishlistByUserId, user._id), wishlist]
      ])
      .put(setUser({ ...user, purchasedProducts, wishlist }))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(5);
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
      .provide([
        [call(getUserByToken), user],
        [call(getPurchasedProducts, user._id), purchasedProducts]
      ])
      .put(setUser({ ...user, purchasedProducts }))
      .put(setUserIsChecked(true))
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
        expect(analysisPut).toHaveLength(5);
        expect(analysisCall).toHaveLength(2);
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
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(2);
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
      .put(push(routes.pathToLogin))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === 'PUT');
        const analysisCall = analysis.filter((e) => e.type === 'CALL');
        expect(analysisPut).toHaveLength(1);
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
