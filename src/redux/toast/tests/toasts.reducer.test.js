import { setToastMessage, setToastSettings } from '../toast.actions';
import { newToastMessage, newToastSettings } from './toasts.variables';
import { initialState, toastReducer } from '../toast.reducer';

describe('toasts reducer tests', () => {
  it('should return default state', () => {
    expect(toastReducer()).toEqual(initialState);
  });
  it('should return default state', () => {
    expect(toastReducer(initialState)).toEqual(initialState);
  });
  it('should set message to store', () => {
    expect(
      toastReducer(initialState, setToastMessage(newToastMessage))
    ).toEqual({
      ...initialState,
      toastMessage: newToastMessage
    });
  });
  it('should set settings to store', () => {
    expect(
      toastReducer(initialState, setToastSettings(newToastSettings))
    ).toEqual({
      ...initialState,
      toastSettings: newToastSettings
    });
  });
});
