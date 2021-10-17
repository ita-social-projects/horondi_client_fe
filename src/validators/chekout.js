import * as Yup from 'yup';
import { deliveryTypes, formRegExp } from '../configs';

export const validationSchema = (deliveryType, t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('error.firstName'))
      .max(20, t('error.firstName'))
      .matches(formRegExp.firstName, t('error.onlyLetter'))
      .required(t('error.requiredField')),
    lastName: Yup.string()
      .min(2, t('error.lastName'))
      .max(20, t('error.lastName'))
      .matches(formRegExp.lastName, t('error.onlyLetter'))
      .required(t('error.requiredField')),
    email: Yup.string().email(t('error.email')).required(t('error.requiredField')),
    phoneNumber: Yup.string()
      .matches(formRegExp.phoneNumber, t('error.phoneNumber'))
      .required(t('error.requiredField')),
    paymentMethod: Yup.string().required(t('error.requiredField')),
    userComment: Yup.string().min(2, t('error.userComment')).max(500, t('error.userComment')),
    courierOffice:
      (deliveryType === deliveryTypes.NOVAPOST || deliveryType === deliveryTypes.UKRPOST) &&
      Yup.string().required(t('error.requiredField')),
    region:
      deliveryType === deliveryTypes.UKRPOST && Yup.string().required(t('error.requiredField')),
    district:
      deliveryType === deliveryTypes.UKRPOST && Yup.string().required(t('error.requiredField')),
    city:
      deliveryType !== deliveryTypes.SELFPICKUP &&
      Yup.string()
        .min(2, t('error.city'))
        .max(50, t('error.city'))
        .required(t('error.requiredField')),
    street:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string()
        .min(2, t('error.street'))
        .max(100, t('error.street'))
        .required(t('error.requiredField')),
    house:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(1, t('error.house')).required(t('error.requiredField')),
    flat:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(1, t('error.flat'))
  });
