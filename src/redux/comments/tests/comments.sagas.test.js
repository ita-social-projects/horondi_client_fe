import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { select } from 'redux-saga/effects';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  handleAddComment,
  handleDeleteComment,
  handleGetComments,
  handleAddReply,
  handleDeleteReplyForComment,
  handleGetReplyComments
} from '../comments.sagas';
import reducer from '../comments.reducer';
import {
  addComment,
  deleteComment,
  getComments,
  changeRate,
  addReplyForComment,
  deleteReplyComment,
  getReplyComments
} from '../comments.operations';

import {
  SET_COMMENTS_LOADING,
  SET_COMMENTS,
  SET_REPLY_LOADING,
  SET_GET_COMMENTS_LOADING,
  SET_COMMENTS_COUNT,
  GET_REPLY_LOADING
} from '../comments.types';

import { SNACKBAR_MESSAGE } from '../../../configs';

import {
  SET_SNACKBAR_MESSAGE,
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS
} from '../../snackbar/snackbar.types';

import {
  addReplyCommentsDataWithError,
  addReplyCommentsArgsError,
  addReplySetCommentsData,
  addReplySetCommentsWithOutCommentsData,
  addReplyCommentsWithOutCommentsRedux,
  addReplyCommentsRedux,
  addReplyCommentData,
  addReplyCommentArgs,
  addCommentsArgs,
  addedCommentData,
  changeRateData,
  addCommentsArgsError,
  addCommentsRedux,
  deleteCommentsRedux,
  addedCommentDataError,
  deleteCommentArgs,
  deleteCommentData,
  deleteCommentsArgsError,
  getCommentArgs,
  getCommentData,
  getCommentsSelect,
  getCommentsRedux,
  getCommentsArgsError,
  getReplyCommentsArgsError,
  getReplyCommentsSet,
  getReplyCommentsRedux,
  getReplyCommentData,
  getReplyCommentsArgs,
  deleteReplyCommentsArgs,
  deleteReplyCommentData,
  deleteReplyCommentsSet,
  deleteReplyCommentsRedux,
  deleteReplyCommentsArgsError
} from './comments.variables';

jest.setTimeout(10000);

describe('Add comments saga', () => {
  it('should add comment', () => {
    const args = addCommentsArgs;
    const addedComment = addedCommentData;
    const changedRate = changeRateData;

    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddComment, args)
      .provide([
        [matchers.call.fn(addComment), addedComment.data.addComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: addCommentsRedux
          }
        ],
        [matchers.call.fn(changeRate), changedRate.data.addRate]
      ])
      .withReducer(reducer, {
        Comments: addCommentsRedux
      })
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .call(addComment, args.payload)
      .put({
        type: SET_COMMENTS,
        payload: [addedComment.data.addComment]
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.added })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .call(changeRate, args.payload)
      .run();
  });
  it('should throw an error', () => {
    const args = addCommentsArgsError;
    const e = new Error('Comment adding fails');

    return expectSaga(handleAddComment, args)
      .provide([[matchers.call.fn(addComment), throwError(e)]])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
  it('should receive error when user is blocked comment', () => {
    const args = addCommentsArgs;
    const addedComment = addedCommentDataError;

    return expectSaga(handleAddComment, args)
      .provide([[matchers.call.fn(addComment), addedComment.data.addComment]])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .call(addComment, args.payload)
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.blocked })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .put({ type: SET_COMMENTS_LOADING, payload: false })

      .run();
  });
});

describe('Delete comments saga', () => {
  it('should delete comment', () => {
    const args = deleteCommentArgs;
    const deletedComment = deleteCommentData;

    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleDeleteComment, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: deleteCommentsRedux
          }
        ],
        [matchers.call.fn(deleteComment), deletedComment.data.deleteComment]
      ])
      .withReducer(reducer, {
        Comments: deleteCommentsRedux
      })
      .put({
        type: SET_COMMENTS,
        payload: [deleteCommentsRedux.comments[1]]
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.deleted })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .call(deleteComment, args.payload)
      .run();
  });

  it('should throw an error', () => {
    const args = deleteCommentsArgsError;
    const e = new Error('Comment deleting fails');

    return expectSaga(handleDeleteComment, args)
      .provide([[matchers.call.fn(deleteComment), throwError(e)]])
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});

describe('Get comments saga', () => {
  it('should get comments', () => {
    const args = getCommentArgs;
    const getCommentsByProduct = getCommentData;

    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleGetComments, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: getCommentsSelect
          }
        ],
        [matchers.call.fn(getComments), getCommentsByProduct.data.getAllCommentsByProduct]
      ])
      .withReducer(reducer, {
        Comments: getCommentsRedux
      })
      .put({ type: SET_GET_COMMENTS_LOADING, payload: true })
      .put({
        type: SET_COMMENTS,
        payload: [
          ...getCommentsByProduct.data.getAllCommentsByProduct.items,
          ...getCommentsRedux.comments
        ]
      })
      .put({
        type: SET_COMMENTS_COUNT,
        payload: getCommentsByProduct.data.getAllCommentsByProduct.count
      })
      .put({ type: SET_GET_COMMENTS_LOADING, payload: false })
      .run();
  });

  it('should throw an error', () => {
    const args = getCommentsArgsError;

    const e = new Error('Comment get fails');

    return expectSaga(handleGetComments, args)
      .provide([[matchers.call.fn(getComments), throwError(e)]])
      .put({ type: SET_GET_COMMENTS_LOADING, payload: true })
      .put({ type: SET_GET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});

describe('Add reply comment saga', () => {
  it('should add reply comments', () => {
    const args = addReplyCommentArgs;
    const replyForComment = addReplyCommentData;

    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddReply, args)
      .provide([
        [matchers.call.fn(addReplyForComment), replyForComment.data.replyForComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: addReplyCommentsRedux
          }
        ]
      ])
      .withReducer(reducer, {
        Comments: addReplyCommentsRedux
      })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .call(addReplyForComment, args.payload)
      .put({
        type: SET_COMMENTS,
        payload: addReplySetCommentsData
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.addedReply })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .run();
  });

  it('should add reply count without comments', () => {
    const args = addReplyCommentArgs;
    const replyForComment = addReplyCommentData;

    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddReply, args)
      .provide([
        [matchers.call.fn(addReplyForComment), replyForComment.data.replyForComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: addReplyCommentsWithOutCommentsRedux
          }
        ]
      ])
      .withReducer(reducer, {
        Comments: addReplyCommentsWithOutCommentsRedux
      })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .call(addReplyForComment, args.payload)
      .put({
        type: SET_COMMENTS,
        payload: addReplySetCommentsWithOutCommentsData
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.addedReply })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .run();
  });

  it('should throw an error', () => {
    const args = addReplyCommentsArgsError;

    const e = new Error('ReplyComment add fails');

    return expectSaga(handleAddReply, args)
      .provide([[matchers.call.fn(addReplyForComment), throwError(e)]])
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });

  it('should recieve error when user is blocked', () => {
    const args = addReplyCommentsArgsError;
    const replyForComment = addReplyCommentsDataWithError;

    return expectSaga(handleAddReply, args)
      .provide([[matchers.call.fn(addReplyForComment), replyForComment.data.addedReplyComment]])
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .call(addReplyForComment, args.payload)
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.blocked })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});

describe('Delete reply comments saga', () => {
  it('should delete reply comment', () => {
    const args = deleteReplyCommentsArgs;
    const deleteReplyForComment = deleteReplyCommentData;
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleDeleteReplyForComment, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: deleteReplyCommentsRedux
          }
        ],
        [matchers.call.fn(deleteComment), deleteReplyForComment.data.deleteComment]
      ])
      .withReducer(reducer, {
        Comments: deleteReplyCommentsRedux
      })
      .put({
        type: SET_COMMENTS,
        payload: deleteReplyCommentsSet
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.deletedReply })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .call(deleteReplyComment, args.payload)
      .run();
  });

  it('should throw an error', () => {
    const args = deleteReplyCommentsArgsError;

    const e = new Error('Reply comment deleting fails');

    return expectSaga(handleDeleteReplyForComment, args)
      .provide([[matchers.call.fn(deleteReplyComment), throwError(e)]])
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});

describe('Get reply comments saga', () => {
  it('should get reply comments', () => {
    const args = getReplyCommentsArgs;
    const getReplyCommentsByComment = getReplyCommentData;
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleGetReplyComments, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: getReplyCommentsRedux
          }
        ],
        [matchers.call.fn(getReplyComments), getReplyCommentsByComment.data.replyForComment]
      ])
      .withReducer(reducer, {
        Comments: getReplyCommentsRedux
      })
      .put({
        type: GET_REPLY_LOADING,
        payload: { loader: true, commentId: 'c3a84a5b9866c30390399222' }
      })
      .put({
        type: SET_COMMENTS,
        payload: getReplyCommentsSet
      })
      .put({
        type: GET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .run();
  });

  it('should throw an error', () => {
    const args = getReplyCommentsArgsError;
    const e = new Error('Reply comment get fails');

    return expectSaga(handleGetReplyComments, args)
      .provide([[matchers.call.fn(getReplyComments), throwError(e)]])
      .put({
        type: GET_REPLY_LOADING,
        payload: { loader: true, commentId: 'c3a84a5b9866c30390399222' }
      })
      .put({ type: GET_REPLY_LOADING, payload: { loader: false, commentId: '' } })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});
