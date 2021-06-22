import {
  SET_RATE,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  SET_COMMENTS,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT,
  SET_COMMENTS_SKIP,
  SET_REPLY_LOADING,
  DELETE_REPLY_COMMENT,
  ADD_REPLY,
  SET_REPLY_COMMENTS_LIMIT,
  GET_COMMENTS,
  SET_GET_COMMENTS_LOADING,
  SET_COMMENTS_COUNT,
  GET_REPLY_COMMENTS,
  CLEAR_COMMENTS,
  GET_REPLY_LOADING
} from './comments.types';

export const setRate = (rate) => ({
  type: SET_RATE,
  payload: rate
});

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload
});

export const updateComment = (payload) => ({
  type: UPDATE_COMMENT,
  payload
});

export const deleteComment = (payload) => ({
  type: DELETE_COMMENT,
  payload
});

export const setComments = (payload) => ({
  type: SET_COMMENTS,
  payload
});

export const setCommentsLoading = (payload) => ({
  type: SET_COMMENTS_LOADING,
  payload
});

export const setUpdatingComment = (payload) => ({
  type: SET_UPDATING_COMMENT,
  payload
});

export const setCommentsSkip = (payload) => ({
  type: SET_COMMENTS_SKIP,
  payload
});

export const setReplyLoading = (payload) => ({
  type: SET_REPLY_LOADING,
  payload
});

export const addReply = (payload) => ({
  type: ADD_REPLY,
  payload
});

export const deleteReplyComment = (payload) => ({
  type: DELETE_REPLY_COMMENT,
  payload
});

export const setReplyCommentsLimit = (payload) => ({
  type: SET_REPLY_COMMENTS_LIMIT,
  payload
});
export const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload
});

export const setGetCommentsLoading = (payload) => ({
  type: SET_GET_COMMENTS_LOADING,
  payload
});

export const setCommentsCount = (payload) => ({
  type: SET_COMMENTS_COUNT,
  payload
});

export const getReplyComments = (payload) => ({
  type: GET_REPLY_COMMENTS,
  payload
});
export const clearComments = () => ({
  type: CLEAR_COMMENTS
});
export const getReplyLoading = (payload) => ({
  type: GET_REPLY_LOADING,
  payload
});
