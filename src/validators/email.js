import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'error.emailLength')
    .max(60, 'error.emailLength')
    .email('error.profile.email')
    .required('error.requiredField')
});
