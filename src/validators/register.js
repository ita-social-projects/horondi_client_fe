import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const regValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'error.profile.firstName')
    .max(30, 'error.profile.firstName')
    .matches(formRegExp.firstName, 'error.wrongFormat')
    .required('error.requiredField'),
  lastName: Yup.string()
    .min(2, 'error.profile.firstName')
    .max(30, 'error.profile.firstName')
    .matches(formRegExp.firstName, 'error.wrongFormat')
    .required('error.requiredField'),
  email: Yup.string().email('error.profile.email').required('error.profile.email'),
  password: Yup.string()
    .matches(formRegExp.password, 'error.profile.pass')
    .required('error.requiredField')
});
