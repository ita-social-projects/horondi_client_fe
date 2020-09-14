import { takeEvery, call, put } from 'redux-saga/effects';

import {
  setCommentsLoading,
  setComments,
  setRate,
  setUpdatingComment
} from './comments.actions';

import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../snackbar/snackbar.actions';

import { SNACKBAR_MESSAGE } from '../../configs';
import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from './comments.types';
import {
  addComment,
  updateComment,
  deleteComment,
  getComments,
  changeRate
} from './comments.operations';

const { added, updated, deleted, error } = SNACKBAR_MESSAGE;

export function* handleAddComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    yield call(addComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComments(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
    yield call(handleSnackbar, added);
    if (payload.rate > 0) {
      const rate = yield call(changeRate, payload);
      yield put(setRate(rate.data.addRate));
    }
  } catch (e) {
    yield call(handleCommentsError);
  }
}

export function* handleDeleteComment({ payload }) {
  try {
    yield call(deleteComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComments(comments.data.getAllCommentsByProduct));
    yield call(handleSnackbar, deleted);
  } catch (e) {
    yield call(handleCommentsError);
  }
}

export function* handleUpdateComment({ payload }) {
  try {
    yield put(setUpdatingComment(payload.comment));
    yield call(updateComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComments(comments.data.getAllCommentsByProduct));
    yield put(setUpdatingComment(null));
    yield call(handleSnackbar, updated);
  } catch (e) {
    yield put(setUpdatingComment(null));
    yield put(setSnackBarSeverity('error'));
    yield put(setSnackBarMessage(error));
    yield put(setSnackBarStatus(true));
  }
}

function* handleCommentsError() {
  yield put(setCommentsLoading(false));
  yield put(setSnackBarSeverity('error'));
  yield put(setSnackBarMessage(error));
  yield put(setSnackBarStatus(true));
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
