import { setFilterMenuStatus, setThemeMode } from '../theme.actions';
import { SET_FILTER_MENU_STATUS } from '../theme.types';

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
  it('should return filter menu status = true', () => {
    expect(setFilterMenuStatus(true)).toEqual({
      type: SET_FILTER_MENU_STATUS,
      payload: true
    });
  });

  it('should return filter menu status = false', () => {
    expect(setFilterMenuStatus(false)).toEqual({
      type: SET_FILTER_MENU_STATUS,
      payload: false
    });
  });
});
