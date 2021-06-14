import { COMMENTS } from '../translations/product-details.translations';
import { TEXT_VALUE } from '../configs';

export const handleRateTip = (userId, language, hasBought) => {
  if (!userId) {
    return COMMENTS[language].unregisteredTip;
  }
  return !hasBought ? COMMENTS[language].registeredTip : COMMENTS[language].successfulTip;
};

export const handleClassName = (name, stylesText, stylesInput) =>
  `${name === TEXT_VALUE ? stylesText : stylesInput}`;

export const handleTextField = (name, userData) =>
  (name !== TEXT_VALUE && !userData) || name === TEXT_VALUE;

export const handleHelperText = (errorsName) => errorsName || '';

export const handleCommentsFilter = (arr, id) => {
  if (id) {
    return arr?.filter((item) => item.show === true || item.user?._id === id);
  }
  return arr?.filter((item) => item.show === true);
};

export const handleReplyCommentsFilter = (arr, id) => {
  if (id) {
    return arr?.filter((item) => item.showReplyComment === true || item?.answerer?._id === id);
  }
  return arr?.filter((item) => item.showReplyComment === true);
};

export const handleCommentsLength = (arr, id) => handleCommentsFilter(arr, id).length;

export const handleReplyCommentsLength = (arr, id) => handleReplyCommentsFilter(arr, id).length;

export const handleCommentsLimit = (limitOption, commentsLimit, currentLimit) =>
  limitOption ? commentsLimit : currentLimit + commentsLimit;

export const handleUserCommentOwner = (userData, email) =>
  userData ? userData.email === email : false;

export const handleHasBought = (isBought) => (isBought ? 5 : 0);
