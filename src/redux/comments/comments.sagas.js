import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
  setCommentsLoading,
  setComments,
  setRate,
  setReplyLoading,
  setGetCommentsLoading
} from './comments.actions';
import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../snackbar/snackbar.actions';
import { SNACKBAR_MESSAGE, USER_IS_BLOCKED } from '../../configs';
import {
  ADD_COMMENT,
  ADD_REPLY,
  DELETE_COMMENT,
  DELETE_REPLY_COMMENT,
  GET_COMMENTS
} from './comments.types';
import {
  addComment,
  deleteComment,
  changeRate,
  addReplyForComment,
  deleteReplyComment,
  getComments
} from './comments.operations';
import { handleUserIsBlocked } from '../../utils/user-helpers';
import { AUTH_ERRORS } from '../../const/error-messages';
import { handleUserError } from '../user/user.sagas';

const { added, deleted, error, addedReply, deletedReply } = SNACKBAR_MESSAGE;

export function* handleAddComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const addedComment = yield call(addComment, payload);
    if (addedComment?.message === USER_IS_BLOCKED) {
      yield call(handleUserIsBlocked);
    } else {
      if (addedComment) {
        const comments = yield select(({ Comments }) => Comments.comments);
        const newComments = [addedComment, ...comments];
        yield put(setComments(newComments));
        yield call(handleSnackbar, added);
        yield put(setCommentsLoading(false));
      }
      if (payload.rate > 0) {
        const rate = yield call(changeRate, payload);
        yield put(setRate(rate));
      }
    }
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield call(handleCommentsError, e);
  }
}

export function* handleDeleteComment({ payload }) {
  try {
    const comments = yield select(({ Comments }) => Comments.comments);
    const newComments = comments.filter(({ _id }) => _id !== payload.comment);
    yield put(setComments(newComments));
    yield call(handleSnackbar, deleted);
    yield call(deleteComment, payload);
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield call(handleCommentsError, e);
  }
}

function* handleCommentsError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setSnackBarSeverity('error'));
    yield put(setSnackBarMessage(error));
    yield put(setSnackBarStatus(true));
  }
}

export function* handleAddReply({ payload }) {
  try {
    yield put(setReplyLoading({ loader: true, commentId: payload.commentId }));
    const addedReplyComment = yield call(addReplyForComment, payload);
    if (addedReplyComment?.message === USER_IS_BLOCKED) {
      yield call(handleUserIsBlocked);
    } else {
      const comments = yield select(({ Comments }) => Comments.comments);
      const newComments = comments.map((comment) =>
        comment._id === addedReplyComment._id
          ? { ...comment, replyComments: [...addedReplyComment.replyComments] }
          : comment
      );
      yield put(setComments(newComments));
      yield call(handleSnackbar, addedReply);
      yield put(setReplyLoading({ loader: false, commentId: '' }));
    }
  } catch (e) {
    yield put(setReplyLoading({ loader: false, commentId: '' }));
    yield call(handleCommentsError, e);
  }
}

export function* handleDeleteReplyForComment({ payload }) {
  try {
    const comments = yield select(({ Comments }) => Comments.comments);
    const newComments = comments.map((comment) =>
      comment.replyComments.some((item) => item._id === payload.replyCommentId)
        ? {
          ...comment,
          replyComments: comment.replyComments.filter(({ _id }) => _id !== payload.replyCommentId)
        }
        : comment
    );
    yield put(setComments(newComments));
    yield call(handleSnackbar, deletedReply);
    yield call(deleteReplyComment, payload);
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield call(handleCommentsError, e);
  }
}

function* handleSnackbar(message) {
  yield put(setSnackBarSeverity('success'));
  yield put(setSnackBarMessage(message));
  yield put(setSnackBarStatus(true));
}

export function* handleGetComments({ payload }) {
  try {
    yield put(setGetCommentsLoading(true));
    const comments = yield call(getComments, payload);
    console.log(comments);
    if (comments) {
      yield put(setComments(comments));
    }
    yield put(setGetCommentsLoading(false));
  } catch (e) {
    yield put(setGetCommentsLoading(false));
    yield call(handleCommentsError, e);
  }
}

export default function* commentsSaga() {
  yield takeEvery(ADD_COMMENT, handleAddComment);
  yield takeEvery(DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(ADD_REPLY, handleAddReply);
  yield takeEvery(DELETE_REPLY_COMMENT, handleDeleteReplyForComment);
  yield takeEvery(GET_COMMENTS, handleGetComments);
}
