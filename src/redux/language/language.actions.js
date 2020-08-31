import { CHANGE_LANGUAGE } from './language.types';

const changeLanguage = (value) => ({
  type: CHANGE_LANGUAGE,
  payload: value
});

export { changeLanguage };
