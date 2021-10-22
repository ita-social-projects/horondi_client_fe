import React from 'react';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import Rating from '@material-ui/lab/Rating';
import { TEXT_VALUE } from '../configs';

export const handleClassName = (name, stylesText, stylesInput) =>
  `${name === TEXT_VALUE ? stylesText : stylesInput}`;

export const handleTextField = (name, userData) =>
  (name !== TEXT_VALUE && !userData) || name === TEXT_VALUE;

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

export const handleArrowIcon = (limitOption) => (limitOption ? null : <ArrowDownwardRoundedIcon />);

export const handleUserId = (userData) => (userData ? userData._id : '');

export const handleRate = (rate) =>
  rate > 0 ? <Rating data-cy='rate' name='edit-rate' value={rate} disabled /> : null;

export const handleTextStyle = (show, text, notAproveText) => (show ? text : notAproveText);

export const handleLimitOptions = (replyCommentsList, replyComments, replyCommentsCount) =>
  replyCommentsList.length === replyComments?.items?.length &&
  replyComments?.items?.length > replyCommentsCount;
