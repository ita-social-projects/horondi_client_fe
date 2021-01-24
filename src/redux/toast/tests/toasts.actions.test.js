import { setToastSettings } from '../toast.actions';
import { SET_TOAST_SETTINGS } from '../toast.types';
import { newToastSettings } from './toasts.variables';

describe('toasts action tests', () => {
  it('should set toast settings', () => {
    expect(setToastSettings(newToastSettings)).toEqual({
      type: SET_TOAST_SETTINGS,
      payload: newToastSettings
    });
  });
});
