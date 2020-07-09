import { CHANGE_LANGUAGE } from './language.types';

const changeLanguage = (value = 0) => ({
  type: CHANGE_LANGUAGE,
  payload: value
});

export { changeLanguage };
