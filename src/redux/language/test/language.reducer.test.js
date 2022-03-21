/* eslint-disable no-undef */
import languageReducer, { initialState } from '../language.reducer';
import { changeLanguage } from '../language.actions';

describe('test language reducer', () => {
  test('should return default state', () => {
    expect(languageReducer()).toMatchSnapshot();
    expect(languageReducer()).toEqual({
      language: 'ua'
    });
  });
  test('should change language', () => {
    expect(languageReducer(initialState, changeLanguage(1))).toMatchSnapshot();
    expect(languageReducer(initialState, changeLanguage(1))).toEqual({
      language: 1
    });
  });
});
