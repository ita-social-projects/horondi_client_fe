import { changeLanguage } from '../language.actions';
import { CHANGE_LANGUAGE } from '../language.types';

describe('test action', () => {
  test('should return payload = 1', () => {
    expect(changeLanguage(1)).toEqual({
      type: CHANGE_LANGUAGE,
      payload: 1
    });
  });
});
