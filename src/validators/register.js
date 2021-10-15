import * as Yup from 'yup';
import { formRegExp } from '../configs';

export const validationSchema = (t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('error.firstName'))
      .max(30, t('error.firstName'))
      .matches(formRegExp.firstName, t('error.wrongFormat'))
      .required(t('error.requiredField')),
    lastName: Yup.string()
      .min(2, t('error.firstName'))
      .max(30, t('error.firstName'))
      .matches(formRegExp.firstName, t('error.wrongFormat'))
      .required(t('error.requiredField')),
    email: Yup.string().email(t('error.email')).required(t('error.email')),
    password: Yup.string()
      .matches(formRegExp.password, t('error.pass'))
      .required(t('error.requiredField'))
  });
