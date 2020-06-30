import { CHANGE_LANGUAGE, START_LANGUAGE_SAGA } from './language.types';

const changeLanguage = (value) => ({
  type: CHANGE_LANGUAGE,
  payload: value
});
const initLanguageSaga = (value) => ({
  type: START_LANGUAGE_SAGA,
  payload: value
});
export { changeLanguage, initLanguageSaga };
