import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_CHAT_MAIL } from './chat.types';
import { setCommentsLoading, setMessageState } from './chat.actions';
import { sendMail } from './chat.operations';
import { handleIsUserBlockedChecker } from '../../utils/is-user-blocked-checker';
import { USER_IS_BLOCKED } from '../../configs';

export function* handleSendMail({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const res = yield call(sendMail, payload);
    if (res?.message === USER_IS_BLOCKED) {
      yield call(handleIsUserBlockedChecker);
    } else {
      yield call(handleIsUserBlockedChecker, res);
      yield put(setMessageState(res._id));
      yield put(setCommentsLoading(false));
    }
  } catch (e) {
    yield put(setMessageState(false));
  }
}

export default function* chatSaga() {
  yield takeEvery(SEND_CHAT_MAIL, handleSendMail);
}
