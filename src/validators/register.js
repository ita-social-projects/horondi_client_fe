import * as Yup from 'yup';
import { formRegExp } from '../configs';

export const validationSchema = (t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('error.profile.firstName'))
      .max(30, t('error.profile.firstName'))
      .matches(formRegExp.firstName, t('error.wrongFormat'))
      .required(t('error.requiredField')),
    lastName: Yup.string()
      .min(2, t('error.profile.firstName'))
      .max(30, t('error.profile.firstName'))
      .matches(formRegExp.firstName, t('error.wrongFormat'))
      .required(t('error.requiredField')),
    email: Yup.string().email(t('error.profile.email')).required(t('error.profile.email')),
    password: Yup.string()
      .matches(formRegExp.password, t('error.profile.pass'))
      .required(t('error.requiredField')),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required(t('error.requiredField'))
  });
