import { commentsLimit, commentsReplyLimit, commentsSkip } from '../../configs';

import {
  SET_COMMENTS,
  SET_RATE,
  SET_COMMENTS_LOADING,
  SET_COMMENTS_SKIP,
  SET_REPLY_LOADING,
  SET_REPLY_COMMENTS_LIMIT,
  SET_GET_COMMENTS_LOADING,
  SET_COMMENTS_COUNT,
  CLEAR_COMMENTS,
  GET_REPLY_LOADING
} from './comments.types';

export const initialState = {
  replyLoading: false,
  getReplyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [],
  limit: commentsLimit,
  skip: commentsSkip,
  replyLimit: commentsReplyLimit,
  commentsCount: 0
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
    case CLEAR_COMMENTS:
      return {
        ...state,
        comments: [],
        limit: commentsLimit,
        skip: commentsSkip,
        replyLimit: commentsReplyLimit,
        commentsCount: 0
      };
    case SET_COMMENTS_COUNT:
      return {
        ...state,
        commentsCount: action.payload
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
    case SET_COMMENTS_SKIP:
      return {
        ...state,
        skip: action.payload
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
    case GET_REPLY_LOADING:
      return {
        ...state,
        getReplyLoading: action.payload
      };
    default:
      return state;
  }
};

export default commentsReducer;
