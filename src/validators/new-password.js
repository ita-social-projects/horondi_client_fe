import i18next from 'i18next';
import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .matches(formRegExp.password, i18next.t('error.profile.pass'))
    .required(i18next.t('error.profile.pass')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], i18next.t('error.confirmPassword'))
    .when('password', {
      is: (val) => {
        if (val) return val;
      },
      then: Yup.string().required(i18next.t('error.confirmPassword'))
    })
});
