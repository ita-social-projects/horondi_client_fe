import { setThemeMode } from '../theme.actions';

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
