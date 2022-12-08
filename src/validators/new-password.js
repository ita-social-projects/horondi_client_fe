import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .matches(formRegExp.password, 'error.profile.pass')
    .required('error.requiredField'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'error.profile.passConfirm')
    .required('error.requiredField')
});
