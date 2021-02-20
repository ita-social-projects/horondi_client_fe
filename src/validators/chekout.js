import * as Yup from 'yup';
import { CHECKOUT_ERROR } from '../translations/checkout.translations';
import { deliveryTypes, formRegExp } from '../configs';

export const validationSchema = (deliveryType, language) =>
  Yup.object().shape({
    firstName: Yup.string().min(2, CHECKOUT_ERROR[language].firstName).max(20, CHECKOUT_ERROR[language].firstName).required(CHECKOUT_ERROR[language].requiredField),
    lastName: Yup.string().min(2, CHECKOUT_ERROR[language].lastName).max(20, CHECKOUT_ERROR[language].lastName).required(CHECKOUT_ERROR[language].requiredField),
    email: Yup.string().email(CHECKOUT_ERROR[language].email).required(CHECKOUT_ERROR[language].requiredField),
    phoneNumber: Yup.string().matches(formRegExp.phoneNumber, CHECKOUT_ERROR[language].phoneNumber).required(CHECKOUT_ERROR[language].requiredField),
    paymentMethod: Yup.string().required(CHECKOUT_ERROR[language].requiredField),
    userComment: Yup.string().min(2, CHECKOUT_ERROR[language].userComment).max(500, CHECKOUT_ERROR[language].userComment),
    courierOffice: deliveryType === deliveryTypes.NOVAPOST && Yup.string().required(CHECKOUT_ERROR[language].requiredField),
    courierOfficeName: deliveryType === deliveryTypes.NOVAPOST && Yup.string().required(CHECKOUT_ERROR[language].requiredField),
    city: deliveryType !== deliveryTypes.SELFPICKUP && Yup.string().min(2, CHECKOUT_ERROR[language].city).max(50, CHECKOUT_ERROR[language].city).required(CHECKOUT_ERROR[language].requiredField),
    street:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER || deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(2, CHECKOUT_ERROR[language].street).max(100, CHECKOUT_ERROR[language].street).required(CHECKOUT_ERROR[language].requiredField),
    house:
      (deliveryType === deliveryTypes.NOVAPOSTCOURIER || deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
      Yup.string().min(1, CHECKOUT_ERROR[language].house).required(CHECKOUT_ERROR[language].requiredField),
    flat: (deliveryType === deliveryTypes.NOVAPOSTCOURIER || deliveryType === deliveryTypes.UKRPOSTCOURIER) && Yup.string().min(1, CHECKOUT_ERROR[language].flat)
  });
