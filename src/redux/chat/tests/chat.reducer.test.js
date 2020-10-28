import chatReducer from '../chat.reducer';
import { setMessageState, setCommentsLoading } from '../chat.actions';

describe('Chat reducer tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      mailID: false
    };
  });

  it('should return default state', () => {
    expect(chatReducer(initialState, {})).toEqual(initialState);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(chatReducer(initialState, setCommentsLoading(true))).toEqual(state);
  });

  it('should set state of sent message', () => {
    const state = {
      ...initialState,
      mailID: true
    };
    expect(
      chatReducer(
        initialState,
        setMessageState({
          id: 'someID'
        })
      )
    ).toEqual(state);
  });
});
