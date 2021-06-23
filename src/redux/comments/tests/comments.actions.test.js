import {
  SET_COMMENTS,
  ADD_COMMENT,
  SET_COMMENTS_LOADING,
  SET_RATE,
  DELETE_COMMENT,
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
} from '../comments.types';

import {
  setRate,
  setComments,
  addComment,
  deleteComment,
  setCommentsLoading,
  setCommentsSkip,
  setReplyLoading,
  addReply,
  deleteReplyComment,
  setReplyCommentsLimit,
  getComments,
  setGetCommentsLoading,
  setCommentsCount,
  getReplyComments,
  clearComments,
  getReplyLoading
} from '../comments.actions';

describe('comments actions tests', () => {
  test('should set rate to payload', () => {
    const newRate = {
      data: {
        addRate: {
          rate: 5
        }
      }
    };
    const result = {
      type: SET_RATE,
      payload: newRate
    };

    expect(setRate(newRate)).toEqual(result);
  });

  test('should set comment to payload', () => {
    const newComment = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: SET_COMMENTS,
      payload: newComment
    };

    expect(setComments(newComment)).toEqual(result);
  });

  test('should set comment to add to payload', () => {
    const commentToAdd = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: ADD_COMMENT,
      payload: commentToAdd
    };

    expect(addComment(commentToAdd)).toEqual(result);
  });

  test('should set comment to delete to payload', () => {
    const commentToDelete = {
      data: {
        deleteComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: DELETE_COMMENT,
      payload: commentToDelete
    };

    expect(deleteComment(commentToDelete)).toEqual(result);
  });

  test('should set comments loading', () => {
    const result = {
      type: SET_COMMENTS_LOADING,
      payload: true
    };

    expect(setCommentsLoading(true)).toEqual(result);
  });

  test('should set updating skip', () => {
    const updatedSkip = 6;
    const result = {
      type: SET_COMMENTS_SKIP,
      payload: updatedSkip
    };

    expect(setCommentsSkip(updatedSkip)).toEqual(result);
  });

  test('should set reply loading', () => {
    const replyLoading = { loader: true, commentId: 'c3a84a5b9866c30390366168' };
    const result = {
      type: SET_REPLY_LOADING,
      payload: replyLoading
    };

    expect(setReplyLoading(replyLoading)).toEqual(result);
  });

  test('should deleteReply comment', () => {
    const deleteReply = {
      replyCommentId: 'c3a84a5b9866c30390366168',
      id: 'c3a84a5b9866c30390366111'
    };
    const result = {
      type: DELETE_REPLY_COMMENT,
      payload: deleteReply
    };

    expect(deleteReplyComment(deleteReply)).toEqual(result);
  });

  test('should addReply comment', () => {
    const addReplyComment = {
      id: 'c3a84a5b9866c30390366144',
      answerer: 'c3a84a5b9866c30390366133',
      replyText: 'reply text',
      commentId: 'c3a84a5b9866c30390366122',
      productId: 'c3a84a5b9866c30390366111'
    };
    const result = {
      type: ADD_REPLY,
      payload: addReplyComment
    };

    expect(addReply(addReplyComment)).toEqual(result);
  });

  test('should set comments reply limit', () => {
    const setCommentReplyLimit = 9;
    const result = {
      type: SET_REPLY_COMMENTS_LIMIT,
      payload: setCommentReplyLimit
    };

    expect(setReplyCommentsLimit(setCommentReplyLimit)).toEqual(result);
  });

  test('should get comments', () => {
    const getCommentsList = {
      productId: 'c3a84a5b9866c30390366111',
      skip: 0,
      currentLimit: 10
    };
    const result = {
      type: GET_COMMENTS,
      payload: getCommentsList
    };

    expect(getComments(getCommentsList)).toEqual(result);
  });

  test('should get comments loading', () => {
    const setGetCommentsLoadingData = true;
    const result = {
      type: SET_GET_COMMENTS_LOADING,
      payload: setGetCommentsLoadingData
    };

    expect(setGetCommentsLoading(setGetCommentsLoadingData)).toEqual(result);
  });

  test('should set comments count', () => {
    const setCount = 10;
    const result = {
      type: SET_COMMENTS_COUNT,
      payload: setCount
    };

    expect(setCommentsCount(setCount)).toEqual(result);
  });

  test('should get reply comments', () => {
    const getReply = {
      commentId: 'c3a84a5b9866c30390366111',
      skip: 0,
      limit: 10
    };
    const result = {
      type: GET_REPLY_COMMENTS,
      payload: getReply
    };

    expect(getReplyComments(getReply)).toEqual(result);
  });

  test('should clear comments', () => {
    const result = {
      type: CLEAR_COMMENTS
    };

    expect(clearComments()).toEqual(result);
  });

  test('should get reply loading', () => {
    const getReply = { loader: true, commentId: 'c3a84a5b9866c30390366111' };
    const result = {
      type: GET_REPLY_LOADING,
      payload: getReply
    };

    expect(getReplyLoading(getReply)).toEqual(result);
  });
});
