import * as Yup from 'yup';
import { formRegExp } from '../configs';
import { errorMessages } from '../translations/user.translations';

export const validationSchema = (language) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, errorMessages[language].value.firstName)
      .max(30, errorMessages[language].value.firstName)
      .matches(formRegExp.firstName, errorMessages[language].value.wrongFormat)
      .required(errorMessages[language].value.empty),
    lastName: Yup.string()
      .min(2, errorMessages[language].value.firstName)
      .max(30, errorMessages[language].value.firstName)
      .matches(formRegExp.firstName, errorMessages[language].value.wrongFormat)
      .required(errorMessages[language].value.empty),
    email: Yup.string()
      .email(errorMessages[language].value.email)
      .required(errorMessages[language].value.email),
    password: Yup.string()
      .matches(formRegExp.password, errorMessages[language].value.pass)
      .required(errorMessages[language].value.empty)
  });
