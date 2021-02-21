import React from 'react';
import PropTypes from 'prop-types';

import { CHECKOUT_BUTTON, CHECKOUT_INPUT_FIELD, CHECKOUT_PAYMENT, CHECKOUT_TEXT_FIELDS } from '../translations/checkout.translations';
import { deliveryTypes } from '../configs';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  paymentMethod: '',
  userComment: '',
  courierOffice: '',
  courierOfficeName: '',
  city: '',
  street: '',
  house: '',
  flat: ''
};
export const checkoutPropTypes = {
  language: PropTypes.number,
  isLightTheme: PropTypes.bool,
  currency: PropTypes.number,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  deliveryType: PropTypes.string,
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOffice: PropTypes.string,
    courierOfficeName: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOffice: PropTypes.string,
    courierOfficeName: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOffice: PropTypes.string,
    courierOfficeName: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string
  })
};
export const checkoutDefaultProps = {
  language: null,
  isLightTheme: false,
  currency: null,
  deliveryType: '',
  cartItems: [],
  values: {},
  errors: {},
  touched: {}
};
const productItemsInput = (cartItems) =>
  cartItems.map((item) => ({
    product: item?._id,
    quantity: item.quantity,
    isFromConstructor: !item._id,
    options: {
      size: item.selectedSize._id,
      sidePocket: item.sidePocket
    }
  }));
export const orderInputData = (data, deliveryType, cartItems, language) => ({
  user: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber
  },
  delivery: {
    sentBy: deliveryType,
    invoiceNumber: data.invoiceNumber || '',
    courierOffice: data.courierOffice || '',
    courierOfficeName: data.courierOfficeName || '',
    city: data.city || '',
    street: data.street || '',
    house: data.house || '',
    flat: data.flat || '',
    byCourier: deliveryType === deliveryTypes.NOVAPOSTCOURIER || deliveryType === deliveryTypes.UKRPOSTCOURIER
  },
  items: productItemsInput(cartItems),
  paymentMethod: data.paymentMethod === CHECKOUT_PAYMENT[language].card ? CHECKOUT_PAYMENT[1].card.toUpperCase() : CHECKOUT_PAYMENT[1].cash.toUpperCase(),
  userComment: data.userComment
});
export const checkoutFormBtnValue = (values, language) =>
  values.paymentMethod === '' || values.paymentMethod === CHECKOUT_PAYMENT[language].cash ? CHECKOUT_BUTTON[language].confirmOrder : CHECKOUT_BUTTON[language].payOrder;
export const courierInputLabels = (language) => [
  { name: CHECKOUT_INPUT_FIELD.city, label: CHECKOUT_TEXT_FIELDS[language].city },
  { name: CHECKOUT_INPUT_FIELD.street, label: CHECKOUT_TEXT_FIELDS[language].street },
  { name: CHECKOUT_INPUT_FIELD.house, label: CHECKOUT_TEXT_FIELDS[language].house },
  { name: CHECKOUT_INPUT_FIELD.flat, label: CHECKOUT_TEXT_FIELDS[language].flat }
];
export const userNameInputLabels = (language) => [
  { name: CHECKOUT_INPUT_FIELD.firstName, label: CHECKOUT_TEXT_FIELDS[language].firstName },
  { name: CHECKOUT_INPUT_FIELD.lastName, label: CHECKOUT_TEXT_FIELDS[language].lastName }
];
export const userContactInputLabels = (language) => [
  { name: CHECKOUT_INPUT_FIELD.email, label: CHECKOUT_TEXT_FIELDS[language].email },
  { name: CHECKOUT_INPUT_FIELD.phoneNumber, label: CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber }
];
