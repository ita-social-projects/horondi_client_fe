import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_CHAT_MAIL } from './chat.types';
import { setCommentsLoading, setMessageState } from './chat.actions';
import { sendMail } from './chat.operations';
import { handleUserIsBlocked } from '../../utils/user-helpers';
import { USER_IS_BLOCKED } from '../../configs';
import { AUTH_ERRORS } from '../../const/error-messages';
import { handleUserError } from '../user/user.sagas';

export function* handleSendMail({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const res = yield call(sendMail, payload);
    if (res?.message === USER_IS_BLOCKED) {
      yield call(handleUserIsBlocked);
    } else {
      yield put(setMessageState(res._id));
      yield put(setCommentsLoading(false));
    }
  } catch (e) {
    yield call(handleChatError, e);
  }
}

function* handleChatError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setMessageState(false));
  }
}

export default function* chatSaga() {
  yield takeEvery(SEND_CHAT_MAIL, handleSendMail);
}
