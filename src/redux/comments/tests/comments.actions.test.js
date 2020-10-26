import {
  SET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_LOADING,
  SET_RATE,
  DELETE_COMMENT
} from '../comments.types';

import {
  setRate,
  setComments,
  addComment,
  deleteComment,
  updateComment,
  setCommentsLoading
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

  test('should set comment to delete to payload', () => {
    const commentToUpdate = {
      data: {
        updateComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: UPDATE_COMMENT,
      payload: commentToUpdate
    };

    expect(updateComment(commentToUpdate)).toEqual(result);
  });

  test('should set comments loading', () => {
    const result = {
      type: SET_COMMENTS_LOADING,
      payload: true
    };

    expect(setCommentsLoading(true)).toEqual(result);
  });

  test('should set updating comment', () => {
    const commentId = '859238jfj3n4fybu5';

    const result = {
      type: SET_COMMENTS_LOADING,
      payload: commentId
    };

    expect(setCommentsLoading(commentId)).toEqual(result);
  });
});
