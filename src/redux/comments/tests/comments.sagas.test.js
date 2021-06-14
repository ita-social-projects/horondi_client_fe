import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { handleAddComment, handleDeleteComment } from '../comments.sagas';

import { addComment, deleteComment, getComments } from '../comments.operations';

import { SET_COMMENTS_LOADING, SET_COMMENTS } from '../comments.types';
import { SNACKBAR_MESSAGE } from '../../../configs';

import {
  SET_SNACKBAR_MESSAGE,
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS
} from '../../snackbar/snackbar.types';

const productId = 'c3a84a5b9866c30390366168';
const userId = 'c3a84a5b9866c30390366169';
const fakeComments = {
  data: {
    getAllCommentsByProduct: {
      text: 'nice'
    }
  }
};

describe('Add comments saga', () => {
  it.skip('should add comment', () => {
    const args = {
      payload: {
        rate: 1,
        product: productId,
        show: false,
        text: 'nice',
        user: userId
      }
    };
    const addedComment = {
      data: {
        addComment: {
          text: 'nice'
        }
      }
    };

    return expectSaga(handleAddComment, args)
      .provide([[matchers.call.fn(addComment), addedComment]])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({
        type: SET_COMMENTS,
        payload: fakeComments.data.getAllCommentsByProduct
      })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.added })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
  it('should throw an error', () => {
    const args = {
      payload: {
        rate: 0,
        product: productId
      }
    };
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
});

describe('Delete comments saga', () => {
  it.skip('should delete comment', () => {
    const args = {
      payload: {
        product: productId
      }
    };
    const deletedComment = {
      data: {
        deleteComment: {
          text: 'nice'
        }
      }
    };

    return expectSaga(handleDeleteComment, args)
      .provide([
        [matchers.call.fn(deleteComment), deletedComment],
        [matchers.call.fn(getComments), fakeComments]
      ])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({
        type: SET_COMMENTS,
        payload: fakeComments.data.getAllCommentsByProduct
      })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.deleted })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });

  it.skip('should throw an error', () => {
    const args = {
      payload: {
        product: productId
      }
    };
    const e = new Error('Comment deleting fails');

    return expectSaga(handleDeleteComment, args)
      .provide([[matchers.call.fn(deleteComment), throwError(e)]])
      .put({ type: SET_COMMENTS_LOADING, payload: true })
      .put({ type: SET_COMMENTS_LOADING, payload: false })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'error' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.error })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .run();
  });
});
