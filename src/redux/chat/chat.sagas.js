import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_CHAT_MAIL } from './chat.types';
import { setCommentsLoading, setMessageState } from './chat.actions';
import { sendMail } from './chat.operations';

export function* handleSendMail({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    const res = yield call(sendMail, payload);
    // console.log(res);
    yield put(setMessageState(res.data.addEmailQuestion._id));
    yield put(setCommentsLoading(false));
  } catch (e) {
    yield put(setMessageState(false));
  }
}

export default function* chatSaga() {
  yield takeEvery(SEND_CHAT_MAIL, handleSendMail);
}
