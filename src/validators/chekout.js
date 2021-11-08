import * as Yup from 'yup';
import { deliveryTypes, formRegExp } from '../configs';

export const validationSchema = (deliveryType, t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('error.profile.firstName'))
      .max(20, t('error.profile.firstName'))
      .matches(formRegExp.firstName, t('error.onlyLetter'))
      .required(t('error.requiredField')),
    lastName: Yup.string()
      .min(2, t('error.profile.lastName'))
      .max(20, t('error.profile.lastName'))
      .matches(formRegExp.lastName, t('error.onlyLetter'))
      .required(t('error.requiredField')),
    email: Yup.string().email(t('error.profile.email')).required(t('error.requiredField')),
    phoneNumber: Yup.string()
      .matches(formRegExp.phoneNumber, t('error.profile.phoneNumber'))
      .required(t('error.requiredField')),
    paymentMethod: Yup.string().required(t('error.requiredField')),
    userComment: Yup.string().min(2, t('error.userComment')).max(500, t('error.userComment')),
    courierOffice:
      (deliveryType === deliveryTypes.NOVAPOST || deliveryType === deliveryTypes.UKRPOST) &&
      Yup.string().required(t('error.requiredField')),
    region:
      (deliveryType === deliveryTypes.UKRPOST ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().required(t('error.requiredField')),
    district:
      (deliveryType === deliveryTypes.UKRPOST ||
        deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().required(t('error.requiredField')),
    city:
      deliveryType !== deliveryTypes.SELFPICKUP &&
      Yup.string()
        .min(2, t('error.profile.city'))
        .max(50, t('error.profile.city'))
        .required(t('error.requiredField')),
    street:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string()
        .min(2, t('error.streetLong'))
        .max(100, t('error.streetLong'))
        .required(t('error.requiredField')),
    house:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
        deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(1, t('error.house')).required(t('error.requiredField'))
  });
