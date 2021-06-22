import { COMMENTS } from '../translations/product-details.translations';
import { TEXT_VALUE } from '../configs';

export const handleRateTip = (userId, language) => {
  if (!userId) {
    return COMMENTS[language].unregisteredTip;
  }
  return COMMENTS[language].successfulTip;
};

export const handleClassName = (name, stylesText, stylesInput) =>
  `${name === TEXT_VALUE ? stylesText : stylesInput}`;

export const handleTextField = (name, userData) =>
  (name !== TEXT_VALUE && !userData) || name === TEXT_VALUE;

export const handleHelperText = (errorsName) => errorsName || '';

export const handleUserCommentOwner = (userData, email) =>
  userData ? userData.email === email : false;

export const handleUserLogin = (isLogin) => (isLogin ? 5 : 0);

export const handleReply = (isEmptyCount, replyCount, replyLimit) => {
  const isAdd = isEmptyCount === replyCount && (isEmptyCount + 1) % replyLimit !== 1;
  return isAdd || replyCount === 0;
};

export const handleAddReplyCount = (comment, addedReplyComment) =>
  comment._id === addedReplyComment._id
    ? {
      ...comment,
      replyCommentsCount: comment.replyCommentsCount + 1
    }
    : comment;
