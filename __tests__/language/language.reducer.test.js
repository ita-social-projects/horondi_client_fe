/* eslint-disable no-undef */
import Language from '../../src/redux/language/language.reducer';

describe('test language reducer', () => {
  test('should return default state', () => {
    expect(Language()).toMatchSnapshot();
    expect(Language()).toEqual({
      language: 0
    });
  });
  test('should change language', () => {
    expect(Language({ language: 1 })).toMatchSnapshot();
    expect(Language({ language: 1 })).toEqual({
      language: 1
    });
  });
});
