import { commentsLimit } from '../../configs';

import {
  SET_COMMENTS,
  SET_RATE,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT,
  SET_COMMENTS_LIMIT
} from './comments.types';

export const initialState = {
  commentsLoading: false,
  updatingComment: null,
  comments: [],
  limit: commentsLimit
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
    default:
      return state;
  }
};

export default commentsReducer;
