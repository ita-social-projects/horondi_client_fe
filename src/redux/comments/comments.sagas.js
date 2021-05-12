import { takeEvery, call, put, select } from 'redux-saga/effects';

import { setCommentsLoading, setComments, setRate, setUpdatingComment } from './comments.actions';

import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../snackbar/snackbar.actions';

import { SNACKBAR_MESSAGE, USER_IS_BLOCKED } from '../../configs';
import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from './comments.types';
import { addComment, updateComment, deleteComment, changeRate } from './comments.operations';
import { handleIsUserBlockedChecker } from '../../utils/is-user-blocked-checker';
import { AUTH_ERRORS } from '../../const/error-messages';
import { setUserError } from '../user/user.actions';
import { handleUserLogout } from '../user/user.sagas';

const { added, updated, deleted, error } = SNACKBAR_MESSAGE;

export function* handleAddComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const addedComment = yield call(addComment, payload);
    if (addedComment?.message === USER_IS_BLOCKED) {
      yield call(handleIsUserBlockedChecker);
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

export function* handleUpdateComment({ payload }) {
  try {
    yield put(setUpdatingComment(payload.comment));
    const updatedComment = yield call(updateComment, payload);
    if (updatedComment) {
      if (updatedComment?.message === USER_IS_BLOCKED) {
        yield call(handleIsUserBlockedChecker);
      } else {
        const comments = yield select(({ Comments }) => Comments.comments);
        const commentToUpdate = comments.findIndex(({ _id }) => _id === updatedComment._id);
        const newComments = [
          ...comments.slice(0, commentToUpdate),
          updatedComment,
          ...comments.slice(commentToUpdate + 1)
        ];
        yield put(setComments(newComments));
        yield put(setUpdatingComment(null));
        yield call(handleSnackbar, updated);
      }
    }
  } catch (e) {
    yield put(setUpdatingComment(null));
    yield call(handleCommentsError, e);
  }
}

function* handleCommentsError(e) {
  if (e.message === USER_IS_BLOCKED || e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
    yield call(handleUserLogout);
    yield put(setUserError(e.message));
  } else {
    yield put(setSnackBarSeverity('error'));
    yield put(setSnackBarMessage(error));
    yield put(setSnackBarStatus(true));
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
  yield takeEvery(UPDATE_COMMENT, handleUpdateComment);
}
