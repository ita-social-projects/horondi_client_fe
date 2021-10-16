import { setFilterMenuStatus } from '../theme.actions';
import { SET_FILTER_MENU_STATUS } from '../theme.types';

describe('theme actions test', () => {
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
