import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const searchValidationSchema = Yup.object().shape({
  search: Yup.string().max(20, 'error.searchLength').matches(formRegExp.search, 'error.onlyLetters')
});
