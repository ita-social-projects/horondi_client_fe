import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'error.emailLength')
    .max(60, 'error.emailLength')
    .email('error.profile.email')
    .required('error.requiredField'),
  password: Yup.string()
    .matches(formRegExp.password, 'error.profile.pass')
    .required('error.requiredField'),
  rememberMe: Yup.bool()
});
