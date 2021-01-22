import { setToastMessage, setToastSettings } from '../toast.actions';
import { SET_TOAST_MESSAGE, SET_TOAST_SETTINGS } from '../toast.types';
import { newToastMessage, newToastSettings } from './toasts.variables';

describe('toasts action tests', () => {
  it('should set toast message', () => {
    expect(setToastMessage(newToastMessage)).toEqual({
      type: SET_TOAST_MESSAGE,
      payload: newToastMessage
    });
  });

  it('should set toast settings', () => {
    expect(setToastSettings(newToastSettings)).toEqual({
      type: SET_TOAST_SETTINGS,
      payload: newToastSettings
    });
  });
});
