import * as Yup from 'yup';
import { deliveryTypes, formRegExp } from '../configs';

export const validationSchema = (deliveryType) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'error.profile.firstName')
      .max(20, 'error.profile.firstName')
      .matches(formRegExp.firstName, 'error.onlyLetter')
      .required('error.requiredField'),
    lastName: Yup.string()
      .min(2, 'error.profile.lastName')
      .max(20, 'error.profile.lastName')
      .matches(formRegExp.lastName, 'error.onlyLetter')
      .required('error.requiredField'),
    email: Yup.string().email('error.profile.email').required('error.requiredField'),
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
      (deliveryType === deliveryTypes.UKRPOST ||
        deliveryType === deliveryTypes.COURIER ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().required('error.requiredField'),
    district:
      (deliveryType === deliveryTypes.UKRPOST ||
        deliveryType === deliveryTypes.COURIER ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().required('error.requiredField'),
    city:
      deliveryType !== deliveryTypes.SELFPICKUP &&
      Yup.string()
        .min(2, 'error.profile.city')
        .max(50, 'error.profile.city')
        .required('error.requiredField'),
    street:
      (deliveryType === deliveryTypes.COURIER ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string()
        .min(2, 'error.streetLong')
        .max(100, 'error.streetLong')
        .required('error.requiredField'),
    house:
      (deliveryType === deliveryTypes.COURIER ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(1, 'error.house').required('error.requiredField')
  });
