import { expectSaga, testSaga } from 'redux-saga-test-plan';
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

import { SNACKBAR_MESSAGE, USER_IS_BLOCKED } from '../../../configs';

import {
  SET_SNACKBAR_MESSAGE,
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS
} from '../../snackbar/snackbar.types';

jest.setTimeout(10000);
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
  it('should add comment', () => {
    const args = {
      payload: {
        rate: 5,
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
    const changedRate = {
      data: {
        addRate: 5
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddComment, args)
      .provide([
        [matchers.call.fn(addComment), addedComment.data.addComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [],
              limit: 10,
              replyLimit: 3
            }
          }
        ],
        [matchers.call.fn(changeRate), changedRate.data.addRate]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [],
          limit: 10,
          replyLimit: 3
        }
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
  it('should receive error when user is blocked comment', () => {
    const args = {
      payload: {
        rate: 5,
        product: productId,
        show: false,
        text: 'nice',
        user: userId
      }
    };
    const addedComment = {
      data: {
        addComment: {
          message: USER_IS_BLOCKED
        }
      }
    };
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
    const args = {
      payload: {
        comment: 'c3a84a5b9866c30390366168',
        id: 'c3a84a5b9866c30390366222'
      }
    };
    const deletedComment = {
      data: {
        deleteComment: {
          _id: 'c3a84a5b9866c30390366168'
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleDeleteComment, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [
                {
                  _id: 'c3a84a5b9866c30390366168',
                  text: 'deleted'
                },
                {
                  _id: 'c3a84a5b9866c30390366444',
                  text: 'text'
                }
              ],
              limit: 10,
              replyLimit: 3
            }
          }
        ],
        [matchers.call.fn(deleteComment), deletedComment.data.deleteComment]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [
            {
              _id: 'c3a84a5b9866c30390366168',
              text: 'deleted'
            },
            {
              _id: 'c3a84a5b9866c30390366444',
              text: 'text'
            }
          ],
          limit: 10,
          replyLimit: 3
        }
      })
      .put({
        type: SET_COMMENTS,
        payload: [
          {
            _id: 'c3a84a5b9866c30390366444',
            text: 'text'
          }
        ]
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.deleted })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .call(deleteComment, args.payload)
      .run();
  });

  it('should throw an error', () => {
    const args = {
      payload: {
        comment: 'c3a84a5b9866c30390366168',
        id: 'c3a84a5b9866c30390366222'
      }
    };
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
    const args = {
      payload: {
        productId: 'c3a84a5b9866c30390399222',
        skip: 0,
        filters: false,
        currentLimit: 10
      }
    };
    const getCommentsByProduct = {
      data: {
        getAllCommentsByProduct: {
          count: 2,
          items: [
            {
              _id: 'c3a84a5b9866c30390366168',
              text: 'deleted'
            },
            {
              _id: 'c3a84a5b9866c30390366444',
              text: 'text'
            }
          ]
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleGetComments, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [],
              limit: 10,
              replyLimit: 3
            }
          }
        ],
        [matchers.call.fn(getComments), getCommentsByProduct.data.getAllCommentsByProduct]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [
            {
              _id: 'c3a84a5b9866c30390366168',
              text: 'deleted'
            },
            {
              _id: 'c3a84a5b9866c30390366444',
              text: 'text'
            }
          ],
          limit: 10,
          replyLimit: 3
        }
      })
      .put({ type: SET_GET_COMMENTS_LOADING, payload: true })
      .put({
        type: SET_COMMENTS,
        payload: [
          ...getCommentsByProduct.data.getAllCommentsByProduct.items,
          {
            _id: 'c3a84a5b9866c30390366168',
            text: 'deleted'
          },
          {
            _id: 'c3a84a5b9866c30390366444',
            text: 'text'
          }
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
    const args = {
      payload: {
        id: 'c3a84a5b9866c30390399222'
      }
    };
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
    const args = {
      payload: {
        id: 'c3a84a5b9866c30390366000',
        commentId: 'c3a84a5b9866c30390366111',
        replyText: 'text reply',
        productId: 'c3a84a5b9866c30390366222',
        answerer: 'c3a84a5b9866c30390366000'
      }
    };
    const replyForComment = {
      data: {
        replyForComment: {
          _id: 'c3a84a5b9866c30390366111',
          replyComments: [
            {
              replyText: 'text reply'
            }
          ]
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddReply, args)
      .provide([
        [matchers.call.fn(addReplyForComment), replyForComment.data.replyForComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [
                {
                  _id: 'c3a84a5b9866c30390366111',
                  text: 'nice',
                  replyCommentsCount: 0
                }
              ],

              limit: 10,
              replyLimit: 3
            }
          }
        ]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [{ _id: 'c3a84a5b9866c30390366111', text: 'nice', replyCommentsCount: 0 }],

          limit: 10,
          replyLimit: 3
        }
      })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .call(addReplyForComment, args.payload)
      .put({
        type: SET_COMMENTS,
        payload: [
          {
            _id: 'c3a84a5b9866c30390366111',
            text: 'nice',
            replyCommentsCount: 1,
            replyComments: {
              items: [
                {
                  replyText: 'text reply'
                }
              ],
              count: 1
            }
          }
        ]
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
    const args = {
      payload: {
        id: 'c3a84a5b9866c30390366000',
        commentId: 'c3a84a5b9866c30390366111',
        replyText: 'text reply',
        productId: 'c3a84a5b9866c30390366222',
        answerer: 'c3a84a5b9866c30390366000'
      }
    };
    const replyForComment = {
      data: {
        replyForComment: {
          _id: 'c3a84a5b9866c30390366111',
          replyComments: {
            count: 1,
            items: [
              {
                replyText: 'text reply'
              }
            ]
          }
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleAddReply, args)
      .provide([
        [matchers.call.fn(addReplyForComment), replyForComment.data.replyForComment],
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [
                {
                  _id: 'c3a84a5b9866c30390366111',
                  text: 'nice',
                  replyCommentsCount: 3
                }
              ],

              limit: 10,
              replyLimit: 3
            }
          }
        ]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [{ _id: 'c3a84a5b9866c30390366111', text: 'nice', replyCommentsCount: 3 }],

          limit: 10,
          replyLimit: 3
        }
      })
      .put({
        type: SET_REPLY_LOADING,
        payload: { loader: true, commentId: args.payload.commentId }
      })
      .call(addReplyForComment, args.payload)
      .put({
        type: SET_COMMENTS,
        payload: [
          {
            _id: 'c3a84a5b9866c30390366111',
            text: 'nice',
            replyCommentsCount: 4
          }
        ]
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
    const args = {
      payload: {
        id: 'c3a84a5b9866c30390366000',
        commentId: 'c3a84a5b9866c30390366111',
        replyText: 'text reply',
        productId: 'c3a84a5b9866c30390366222',
        answerer: 'c3a84a5b9866c30390366000'
      }
    };
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
    const args = {
      payload: {
        id: 'c3a84a5b9866c30390366000',
        commentId: 'c3a84a5b9866c30390366111',
        replyText: 'text reply',
        productId: 'c3a84a5b9866c30390366222',
        answerer: 'c3a84a5b9866c30390366000'
      }
    };
    const replyForComment = {
      data: {
        addedReplyComment: {
          message: USER_IS_BLOCKED
        }
      }
    };

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
    const args = {
      payload: {
        replyCommentId: 'c3a84a5b9866c30390366168',
        id: 'c3a84a5b9866c30390366222'
      }
    };
    const deletedComment = {
      data: {
        deleteComment: {
          _id: 'c3a84a5b9866c30390366168'
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleDeleteReplyForComment, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [
                {
                  _id: 'c3a84a5b9866c30390366444',
                  text: 'text',
                  replyCommentsCount: 2,
                  replyComments: {
                    count: 2,
                    items: [
                      { _id: 'c3a84a5b9866c30390366168', replyText: 'text reply' },
                      { _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }
                    ]
                  }
                }
              ],
              limit: 10,
              replyLimit: 3
            }
          }
        ],
        [matchers.call.fn(deleteComment), deletedComment.data.deleteComment]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [
            {
              _id: 'c3a84a5b9866c30390366444',
              text: 'text',
              replyCommentsCount: 2,
              replyComments: {
                count: 2,
                items: [
                  { _id: 'c3a84a5b9866c30390366168', replyText: 'text reply' },
                  { _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }
                ]
              }
            }
          ],
          limit: 10,
          replyLimit: 3
        }
      })
      .put({
        type: SET_COMMENTS,
        payload: [
          {
            _id: 'c3a84a5b9866c30390366444',
            text: 'text',
            replyCommentsCount: 1,
            replyComments: {
              count: 1,
              items: [{ _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }]
            }
          }
        ]
      })
      .put({ type: SET_SNACKBAR_SEVERITY, payload: 'success' })
      .put({ type: SET_SNACKBAR_MESSAGE, payload: SNACKBAR_MESSAGE.deletedReply })
      .put({ type: SET_SNACKBAR_STATUS, payload: true })
      .call(deleteReplyComment, args.payload)
      .run();
  });

  it('should throw an error', () => {
    const args = {
      payload: {
        replyCommentId: 'c3a84a5b9866c30390366222'
      }
    };
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
    const args = {
      payload: {
        commentId: 'c3a84a5b9866c30390399222',
        skip: 0,
        filters: false,
        currentLimit: 10
      }
    };
    const getCommentsByProduct = {
      data: {
        replyForComment: {
          items: [
            {
              _id: 'c3a84a5b9866c30390399222',
              replyComments: [
                {
                  replyText: 'text reply'
                }
              ]
            }
          ],
          count: 1
        }
      }
    };
    const selectTest = select(({ Comments }) => Comments.comments);

    return expectSaga(handleGetReplyComments, args)
      .provide([
        [
          matchers.select.selector(selectTest),
          {
            Comments: {
              replyLoading: false,
              commentsLoading: false,
              getCommentsLoading: false,
              updatingComment: null,
              comments: [
                {
                  _id: 'c3a84a5b9866c30390399222',
                  text: 'hello'
                }
              ],
              limit: 10,
              replyLimit: 3
            }
          }
        ],
        [matchers.call.fn(getReplyComments), getCommentsByProduct.data.replyForComment]
      ])
      .withReducer(reducer, {
        Comments: {
          replyLoading: false,
          commentsLoading: false,
          getCommentsLoading: false,
          updatingComment: null,
          comments: [
            {
              _id: 'c3a84a5b9866c30390399222',
              text: 'hello'
            }
          ],
          limit: 10,
          replyLimit: 3
        }
      })
      .put({
        type: GET_REPLY_LOADING,
        payload: { loader: true, commentId: 'c3a84a5b9866c30390399222' }
      })
      .put({
        type: SET_COMMENTS,
        payload: [
          {
            _id: 'c3a84a5b9866c30390399222',
            text: 'hello',
            replyComments: {
              items: [
                {
                  replyText: 'text reply'
                }
              ],
              count: 1
            }
          }
        ]
      })
      .put({
        type: GET_REPLY_LOADING,
        payload: { loader: false, commentId: '' }
      })
      .run();
  });

  it('should throw an error', () => {
    const args = {
      payload: {
        commentId: 'c3a84a5b9866c30390399222',
        skip: 0,
        filters: false,
        currentLimit: 10
      }
    };
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
