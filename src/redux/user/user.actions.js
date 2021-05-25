import {
  LOGIN_USER,
  SET_USER,
  LOGOUT_USER,
  SET_USER_ERROR,
  SET_USER_LOADING,
  CONFIRM_USER,
  STATE_RESET,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID,
  REGISTER_USER,
  USER_HAS_RECOVERED,
  USER_HAS_REGISTERED,
  PRESERVE_USER,
  SET_USER_IS_CHECKED,
  UPDATE_USER,
  PASSWORD_IS_RESET,
  SEND_CONFIRMATION_EMAIL,
  CONFIRMATION_EMAIL_SENT,
  SET_USER_IS_CONFIRMED,
  SET_CONFIRMATION_LOADING,
  SET_RECOVERY_LOADING,
  SET_USER_ORDERS,
  GET_USER_ORDERS,
  ADD_PRODUCT_TO_USER_CART_OR_WISHLIST,
  REMOVE_PRODUCT_FROM_USER_CART_OR_WISHLIST,
  LOGIN_BY_GOOGLE,
  SET_DELETE_USER,
  SET_EMAIL_ERROR
} from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

const loginByGoogle = (payload) => ({
  type: LOGIN_BY_GOOGLE,
  payload
});

const confirmUser = (payload) => ({
  type: CONFIRM_USER,
  payload
});

const setUserError = (error) => ({
  type: SET_USER_ERROR,
  payload: error
});

const setEmailError = (error) => ({
  type: SET_EMAIL_ERROR,
  payload: error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

const setUserLoading = (payload) => ({
  type: SET_USER_LOADING,
  payload
});

const resetState = () => ({
  type: STATE_RESET
});

const recoverUser = (payload) => ({
  type: RECOVER_USER,
  payload
});

const resetPassword = (payload) => ({
  type: PASSWORD_RESET,
  payload
});

const checkIfTokenValid = (payload) => ({
  type: CHECK_IF_TOKEN_VALID,
  payload
});

const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload
});

const userHasRecovered = (payload) => ({
  type: USER_HAS_RECOVERED,
  payload
});

const userHasRegistered = (payload) => ({
  type: USER_HAS_REGISTERED,
  payload
});

const preserveUser = () => ({
  type: PRESERVE_USER
});

const setUserIsChecked = (payload) => ({
  type: SET_USER_IS_CHECKED,
  payload
});

const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload
});

const setPasswordIsReset = (payload) => ({
  type: PASSWORD_IS_RESET,
  payload
});

const sendConfirmationEmail = (payload) => ({
  type: SEND_CONFIRMATION_EMAIL,
  payload
});

const setConfirmationEmailStatus = (payload) => ({
  type: CONFIRMATION_EMAIL_SENT,
  payload
});

const setUserIsConfirmed = (payload) => ({
  type: SET_USER_IS_CONFIRMED,
  payload
});

const setConfirmationLoading = (payload) => ({
  type: SET_CONFIRMATION_LOADING,
  payload
});

const setRecoveryLoading = (payload) => ({
  type: SET_RECOVERY_LOADING,
  payload
});

const setUserOrders = (payload) => ({
  type: SET_USER_ORDERS,
  payload
});

const getUserOrders = () => ({
  type: GET_USER_ORDERS
});

const addProductToUserCartOrWishlist = (productId) => ({
  type: ADD_PRODUCT_TO_USER_CART_OR_WISHLIST,
  payload: productId
});

const removeProductFromUserCartOrWishlist = (productId) => ({
  type: REMOVE_PRODUCT_FROM_USER_CART_OR_WISHLIST,
  payload: productId
});

const deleteUserDataFromStore = () => ({
  type: SET_DELETE_USER
});

export {
  loginUser,
  setUser,
  loginByGoogle,
  setUserError,
  logoutUser,
  setUserLoading,
  confirmUser,
  resetState,
  recoverUser,
  resetPassword,
  checkIfTokenValid,
  registerUser,
  userHasRecovered,
  userHasRegistered,
  preserveUser,
  setUserIsChecked,
  updateUser,
  setPasswordIsReset,
  sendConfirmationEmail,
  setConfirmationEmailStatus,
  setUserIsConfirmed,
  setConfirmationLoading,
  setRecoveryLoading,
  setUserOrders,
  getUserOrders,
  addProductToUserCartOrWishlist,
  removeProductFromUserCartOrWishlist,
  deleteUserDataFromStore,
  setEmailError
};
