import * as Yup from 'yup';
import { formRegExp } from '../configs/regexp';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'error.profile.firstName')
    .max(30, 'error.profile.firstName')
    .matches(formRegExp.firstName, 'error.wrongFormat')
    .required('error.requiredField'),
  lastName: Yup.string()
    .min(2, 'error.profile.lastName')
    .max(30, 'error.profile.lastName')
    .matches(formRegExp.firstName, 'error.wrongFormat')
    .required('error.requiredField'),
  email: Yup.string()
    .min(8, 'error.emailLength')
    .max(60, 'error.emailLength')
    .matches(formRegExp.email, 'error.wrongFormat')
    .required('error.requiredField'),
  phoneNumber: Yup.string()
    .min(9, 'error.profile.phoneTooShort')
    .matches(formRegExp.phoneNumber, 'error.profile.phoneNumber')
    .max(9, 'error.profile.phoneTooLong')
    .nullable(),
  country: Yup.string()
    .min(2, 'error.profile.country')
    .max(40, 'error.profile.country')
    .matches(formRegExp.country, 'error.wrongFormat')
    .nullable(),
  region: Yup.string()
    .min(2, 'error.profile.region')
    .max(40, 'error.profile.region')
    .matches(formRegExp.region, 'error.wrongFormat')
    .nullable(),
  district: Yup.string()
    .min(2, 'error.profile.district')
    .max(40, 'error.profile.district')
    .matches(formRegExp.district, 'error.wrongFormat')
    .nullable(),
  city: Yup.string()
    .min(2, 'error.profile.city')
    .max(50, 'error.profile.city')
    .matches(formRegExp.city, 'error.wrongFormat')
    .nullable(),
  street: Yup.string()
    .min(2, 'error.profile.street')
    .max(40, 'error.profile.street')
    .matches(formRegExp.street, 'error.wrongFormat')
    .nullable(),
  buildingNumber: Yup.string()
    .min(1, 'error.profile.buildingNumber')
    .max(6, 'error.profile.buildingNumber')
    .matches(formRegExp.buildingNumber, 'error.wrongFormat')
    .nullable(),
  appartment: Yup.string()
    .min(1, 'error.profile.appartment')
    .max(6, 'error.profile.appartment')
    .matches(formRegExp.appartment, 'error.wrongFormat')
    .nullable(),
  zipcode: Yup.string()
    .length(5, 'error.profile.zipcode')
    .matches(formRegExp.buildingNumber, 'error.zipcode')
    .nullable()
});
