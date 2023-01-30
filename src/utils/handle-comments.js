import React from 'react';
import Rating from '@material-ui/lab/Rating';
import LoadMoreCommentsIcon from '../images/loadMoreCommentsIcon.js';

export const handleHelperText = (errorsName) => errorsName || '';

export const handleUserCommentOwner = (userData, email) =>
  userData ? userData.email === email : false;

export const handleUserCommentApprove = (userData, email, show) =>
  handleUserCommentOwner(userData, email) && !show;

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

export const handleArrowIcon = (limitOption) => (limitOption ? null : <LoadMoreCommentsIcon />);

export const handleUserId = (userData) => (userData ? userData._id : '');

export const handleRate = (rate) =>
  rate > 0 ? <Rating data-cy='rate' name='edit-rate' value={rate} disabled /> : null;

export const handleTextStyle = (show, text, notAproveText) => (show ? text : notAproveText);

export const handleLimitOptions = (replyCommentsList, replyComments, replyCommentsCount) =>
  replyCommentsList.length === replyComments?.items?.length &&
  replyComments?.items?.length > replyCommentsCount;

export const handleSkip = (replyCommentsCount, currentLimit) => {
  const value = replyCommentsCount - currentLimit;
  if (value < 0) {
    return 0;
  }
  return value;
};
