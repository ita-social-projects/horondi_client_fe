/* eslint-disable no-undef */
import languageReducer, { initialState } from '../language.reducer';

describe('test language reducer', () => {
  test('should return default state', () => {
    expect(languageReducer()).toMatchSnapshot();
    expect(languageReducer()).toEqual({
      language: 0
    });
  });
  test('should change language', () => {
    expect(languageReducer({ ...initialState, language: 1 })).toMatchSnapshot();
    expect(languageReducer({ ...initialState, language: 1 })).toEqual({
      language: 1
    });
  });
});
