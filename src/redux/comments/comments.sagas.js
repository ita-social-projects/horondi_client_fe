import { takeEvery, call, put, select } from 'redux-saga/effects';

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
  changeRate
} from './comments.operations';

const { added, updated, deleted, error } = SNACKBAR_MESSAGE;

export function* handleAddComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const addedComment = yield call(addComment, payload);
    if (addedComment) {
      const comments = yield select(({ Comments }) => Comments.comments);
      const newComments = [addedComment, ...comments];
      yield put(setComments(newComments));
      yield call(handleSnackbar, added);
      yield put(setCommentsLoading(false));
    }
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
    const deletedComment = yield call(deleteComment, payload);
    if (deletedComment) {
      const comments = yield select(({ Comments }) => Comments.comments);
      const newComments = comments.filter(
        ({ _id }) => _id !== deletedComment._id
      );
      yield put(setComments(newComments));
      yield call(handleSnackbar, deleted);
    }
  } catch (e) {
    yield call(handleCommentsError);
  }
}

export function* handleUpdateComment({ payload }) {
  try {
    yield put(setUpdatingComment(payload.comment));
    const updatedComment = yield call(updateComment, payload);
    if (updatedComment) {
      const comments = yield select(({ Comments }) => Comments.comments);
      const commentToDelete = comments.findIndex(
        ({ _id }) => _id === updatedComment._id
      );
      const newComments = [
        ...comments.slice(0, commentToDelete),
        updatedComment,
        ...comments.slice(commentToDelete + 1)
      ];
      yield put(setComments(newComments));
      yield put(setUpdatingComment(null));
      yield call(handleSnackbar, updated);
    }
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
