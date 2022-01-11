import commentsReducer, { initialState } from '../comments.reducer';

import {
  setComments,
  setCommentsLoading,
  setRate,
  setReplyCommentsLimit,
  setCommentsSkip,
  clearComments
} from '../comments.actions';

describe('comments reducer', () => {
  it('should set comments loading to true', () => {
    const state = {
      ...initialState,
      commentsLoading: true
    };

    expect(commentsReducer(initialState, setCommentsLoading(true))).toEqual(state);
  });

  it('should set rate to state', () => {
    const payload = {
      rate: 5
    };
    const state = {
      ...initialState,
      rate: payload
    };

    expect(commentsReducer(initialState, setRate(payload))).toEqual(state);
  });

  it('should set comments to state', () => {
    const payload = [
      {
        text: 'nice'
      },
      {
        text: 'good'
      }
    ];
    const state = {
      ...initialState,
      comments: payload
    };

    expect(commentsReducer(initialState, setComments(payload))).toEqual(state);
  });

  it('should set comments skip to state', () => {
    const payload = 5;

    const state = {
      ...initialState,
      skip: payload
    };

    expect(commentsReducer(initialState, setCommentsSkip(payload))).toEqual(state);
  });

  it('should set reply comments limit to state', () => {
    const payload = 10;

    const state = {
      ...initialState,
      replyLimit: payload
    };

    expect(commentsReducer(initialState, setReplyCommentsLimit(payload))).toEqual(state);
  });

  it('should clear comments', () => {
    expect(commentsReducer(undefined, clearComments())).toEqual(initialState);
  });

  it('should return default state', () => {
    expect(commentsReducer()).toEqual(initialState);
  });
});
