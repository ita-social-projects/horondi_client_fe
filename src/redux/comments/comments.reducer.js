import { commentsLimit, commentsReplyLimit } from '../../configs';

import {
  SET_COMMENTS,
  SET_RATE,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT,
  SET_COMMENTS_LIMIT,
  SET_REPLY_LOADING,
  SET_REPLY_COMMENTS_LIMIT,
  SET_GET_COMMENTS_LOADING
} from './comments.types';

export const initialState = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [],
  limit: commentsLimit,
  replyLimit: commentsReplyLimit
};

const commentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RATE:
      return {
        ...state,
        rate: action.payload
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case SET_GET_COMMENTS_LOADING:
      return {
        ...state,
        getCommentsLoading: action.payload
      };
    case SET_COMMENTS_LOADING:
      return {
        ...state,
        commentsLoading: action.payload
      };
    case SET_UPDATING_COMMENT:
      return {
        ...state,
        updatingComment: action.payload
      };
    case SET_COMMENTS_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    case SET_REPLY_COMMENTS_LIMIT:
      return {
        ...state,
        replyLimit: action.payload
      };
    case SET_REPLY_LOADING:
      return {
        ...state,
        replyLoading: action.payload
      };
    default:
      return state;
  }
};

export default commentsReducer;
