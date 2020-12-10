import { setFilterMenuStatus, setThemeMode } from '../theme.actions';
import { themeState as themeReducer } from '../theme.reducer';

describe('theme reducer test', () => {
  let initialState;
  let newState;
  let themeAction;

  beforeEach(() => {
    initialState = {
      lightMode: true,
      filterMenuStatus: false
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
  it('should set filter menu status to true', () => {
    themeAction = setFilterMenuStatus(true);
    newState = themeReducer(initialState, themeAction);
    expect(newState.filterMenuStatus).toEqual(true);
  });
});
