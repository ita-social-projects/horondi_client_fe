import {
  SET_RATE,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  SET_COMMENTS,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT,
  SET_COMMENTS_LIMIT
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

export const setCommentsLimit = (payload) => ({
  type: SET_COMMENTS_LIMIT,
  payload
});
