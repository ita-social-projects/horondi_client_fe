import * as Yup from 'yup';
import { deliveryTypes, isCourier, countryOptions } from '../configs/index';
import { formRegExp } from '../configs/regexp';

export const validationSchema = (deliveryType, countryOption) => {
  const base = {
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
      .matches(formRegExp.wholeNumber, 'error.onlyNumber')
      .min(9, 'error.profile.phoneTooShort')
      .required('error.requiredField')
      .matches(formRegExp.phoneNumber, 'error.profile.phoneNumber')
      .max(9, 'error.profile.phoneTooLong'),
    paymentMethod: Yup.string().required('error.requiredField'),
    userComment: Yup.string().min(2, 'error.userComment').max(500, 'error.userComment')
  };

  if (countryOption === countryOptions.WITHIN_UKRAINE) {
    return Yup.object().shape({
      ...base,
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
          .required('error.requiredField')
          .matches(formRegExp.city, 'error.onlyLetter'),
      street:
        isCourier(deliveryType) &&
        Yup.string()
          .min(2, 'error.streetLong')
          .max(100, 'error.streetLong')
          .required('error.requiredField')
          .matches(formRegExp.street, 'error.onlyLetter'),
      house:
        isCourier(deliveryType) &&
        Yup.string()
          .min(1, 'error.house')
          .max(6, 'error.house')
          .matches(formRegExp.buildingNumber, 'error.houseFormatNumber')
          .required('error.requiredField'),
      flat:
        isCourier(deliveryType) &&
        Yup.string()
          .min(1, 'error.flat')
          .max(6, 'error.flat')
          .matches(formRegExp.appartment, 'error.appartment')
          .required('error.requiredField')
    });
  }

  if (countryOption === countryOptions.WORLDWIDE) {
    return Yup.object().shape({
      ...base,
      messenger: Yup.string().required('error.requiredField'),
      messengerPhone: Yup.string()
        .matches(formRegExp.wholeNumber, 'error.onlyNumber')
        .min(9, 'error.profile.phoneTooShort')
        .required('error.requiredField')
        .matches(formRegExp.phoneNumber, 'error.profile.phoneNumber')
        .max(14, 'error.profile.phoneTooLong'),
      worldWideCountry: Yup.string().required('error.requiredField'),
      stateOrProvince: Yup.string(),
      worldWideCity: Yup.string().required('error.requiredField'),
      worldWideStreet: Yup.string().required('error.requiredField'),
      cityCode: Yup.string()
        .required('error.requiredField')
        .matches(formRegExp.wholeNumber, 'checkout.checkoutError.cityCode')
    });
  }
};
