import * as Yup from 'yup';
import { deliveryTypes, isCourier } from '../configs/index';
import { formRegExp } from '../configs/regexp';

export const validationSchema = (deliveryType) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'error.profile.firstName')
      .max(30, 'error.profile.firstName')
      .matches(formRegExp.firstName, 'error.onlyLetter')
      .required('error.requiredField'),
    lastName: Yup.string()
      .min(2, 'error.profile.lastName')
      .max(30, 'error.profile.lastName')
      .matches(formRegExp.lastName, 'error.onlyLetter')
      .required('error.requiredField'),
    email: Yup.string()
      .email('error.profile.email')
      .required('error.requiredField')
      .min(8, 'error.emailLength')
      .max(60, 'error.emailLength'),
    phoneNumber: Yup.string()
      .matches(formRegExp.phoneNumber, 'error.profile.phoneNumber')
      .required('error.requiredField'),
    paymentMethod: Yup.string().required('error.requiredField'),
    userComment: Yup.string().min(2, 'error.userComment').max(500, 'error.userComment'),
    courierOffice:
      (deliveryType === deliveryTypes.NOVAPOST || deliveryType === deliveryTypes.UKRPOST) &&
      Yup.string().required('error.requiredField'),
    courierOrganization:
      deliveryType === deliveryTypes.COURIER && Yup.string().required('error.requiredField'),
    region:
      (deliveryType === deliveryTypes.UKRPOST || isCourier(deliveryType)) &&
      Yup.string().required('error.requiredField'),
    district:
      (deliveryType === deliveryTypes.UKRPOST || isCourier(deliveryType)) &&
      Yup.string().required('error.requiredField'),
    city:
      deliveryType !== deliveryTypes.SELFPICKUP &&
      Yup.string()
        .min(2, 'error.profile.city')
        .max(50, 'error.profile.city')
        .required('error.requiredField'),
    street:
      isCourier(deliveryType) &&
      Yup.string()
        .min(2, 'error.streetLong')
        .max(100, 'error.streetLong')
        .required('error.requiredField'),
    house:
      isCourier(deliveryType) && Yup.string().min(1, 'error.house').required('error.requiredField')
  });
