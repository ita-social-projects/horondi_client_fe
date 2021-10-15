import { setFilterMenuStatus } from '../theme.actions';
import { themeState as themeReducer } from '../theme.reducer';

describe('theme reducer test', () => {
  let initialState;
  let newState;
  let themeAction;

  beforeEach(() => {
    initialState = {
      filterMenuStatus: false
    };
    themeAction = setFilterMenuStatus(true);
    newState = themeReducer(initialState, themeAction);
  });

  it('should return object', () => {
    expect(typeof newState).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(newState).toBeTruthy();
  });

  it('should set filter menu status to true', () => {
    themeAction = setFilterMenuStatus(true);
    newState = themeReducer(initialState, themeAction);
    expect(newState.filterMenuStatus).toEqual(true);
  });
});
