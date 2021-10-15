import * as Yup from 'yup';
import { formRegExp } from '../configs';

export const validationSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .min(8, t('error.emailLength'))
      .max(60, t('error.emailLength'))
      .email(t('error.email'))
      .required(t('error.requiredField')),
    password: Yup.string()
      .matches(formRegExp.password, t('error.pass'))
      .required(t('error.requiredField')),
    rememberMe: Yup.bool()
  });
