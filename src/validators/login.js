import * as Yup from 'yup';
import { formRegExp } from '../configs';
import { errorMessages } from '../translations/user.translations';

export const validationSchema = (language) =>
  Yup.object().shape({
    email: Yup.string()
      .min(8, errorMessages[language].value.emailLength)
      .max(60, errorMessages[language].value.emailLength)
      .email(errorMessages[language].value.email)
      .required(errorMessages[language].value.empty),
    password: Yup.string()
      .matches(formRegExp.password, errorMessages[language].value.pass)
      .required(errorMessages[language].value.empty),
    rememberMe: Yup.bool()
  });
