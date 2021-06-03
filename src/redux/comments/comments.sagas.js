import { takeEvery, call, put, select } from 'redux-saga/effects';

import { setCommentsLoading, setComments, setRate, setReplyLoading } from './comments.actions';
import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../snackbar/snackbar.actions';
import { SNACKBAR_MESSAGE, USER_IS_BLOCKED } from '../../configs';
import { ADD_COMMENT, ADD_REPLY, DELETE_COMMENT, DELETE_REPLY_COMMENT } from './comments.types';
import {
  addComment,
  deleteComment,
  changeRate,
  addReplyForComment,
  deleteReplyComment
} from './comments.operations';
import { handleUserIsBlocked } from '../../utils/user-helpers';
import { AUTH_ERRORS } from '../../const/error-messages';
import { handleUserError } from '../user/user.sagas';

const { added, deleted, error } = SNACKBAR_MESSAGE;

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
    yield put(setReplyLoading(true));
    const addedReply = yield call(addReplyForComment, payload);
    if (addedReply?.message === USER_IS_BLOCKED) {
      yield call(handleUserIsBlocked);
    } else {
      const comments = yield select(({ Comments }) => Comments.comments);
      const newComments = comments.map((comment) =>
        comment._id === addedReply._id
          ? { ...comment, replyComments: [...addedReply.replyComments] }
          : comment
      );
      yield put(setComments(newComments));
      yield call(handleSnackbar, added);
      yield put(setReplyLoading(false));
    }
  } catch (e) {
    yield put(setReplyLoading(false));
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
    yield call(handleSnackbar, deleted);
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

export default function* commentsSaga() {
  yield takeEvery(ADD_COMMENT, handleAddComment);
  yield takeEvery(DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(ADD_REPLY, handleAddReply);
  yield takeEvery(DELETE_REPLY_COMMENT, handleDeleteReplyForComment);
}
