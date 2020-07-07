import themeReducer from './theme.reducer';
import { setThemeMode } from './theme.actions';

describe('theme actions test', () => {
  let type;
  let themeAction;

  beforeEach(() => {
    type = 'SET_THEME_MODE';
    themeAction = setThemeMode(true);
  });

  it('should return object', () => {
    expect(typeof themeAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(themeAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "SET_THEME_MODE"', () => {
    expect(themeAction.type).toEqual(type);
  });

  it('value by key "payload" of returned object should to be true', () => {
    expect(themeAction.payload).toEqual(true);
  });

  it('value by key "payload" of returned object should to be false', () => {
    themeAction = setThemeMode(false);
    expect(themeAction.payload).toEqual(false);
  });
});

describe('theme reducer test', () => {
  let initialState;
  let newState;
  let themeAction;

  beforeEach(() => {
    initialState = {
      lightMode: true
    };
    themeAction = setThemeMode(true);
    newState = themeReducer(initialState, themeAction);
  });

  it('should return object', () => {
    expect(typeof newState).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(newState).toBeTruthy();
  });

  it('value by key "lightMode" of returned state should to be true', () => {
    expect(newState.lightMode).toEqual(true);
  });

  it('value by key "lightMode" of returned state should to be false', () => {
    themeAction = setThemeMode(false);
    newState = themeReducer(initialState, themeAction);
    expect(newState.lightMode).toEqual(false);
  });

  it('value by key "lightMode" of returned state should to be equal to initial state', () => {
    newState = themeReducer(initialState, { type: 'ANYTHING' });
    expect(newState.lightMode).toEqual(initialState.lightMode);
  });
});
