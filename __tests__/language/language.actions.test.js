import { changeLanguage } from '../../src/redux/language/language.actions';
import { CHANGE_LANGUAGE } from '../../src/redux/language/language.types';

describe('test action', () => {
  test('should return default payload', () => {
    expect(changeLanguage()).toEqual({
      type: CHANGE_LANGUAGE,
      payload: 0
    });
  });
  test('should return payload = 1', () => {
    expect(changeLanguage(1)).toEqual({
      type: CHANGE_LANGUAGE,
      payload: 1
    });
  });
});
