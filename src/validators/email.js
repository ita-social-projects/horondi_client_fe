import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'error.emailLength')
    .max(60, 'error.emailLength')
    .email('error.profile.email')
    .matches(formRegExp.email, 'error.profile.email')
    .required('error.requiredField')
});
