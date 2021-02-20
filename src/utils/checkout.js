import React from 'react';
import { CHECKOUT_BUTTON, CHECKOUT_INPUT_FIELD, CHECKOUT_PAYMENT, CHECKOUT_TEXT_FIELDS } from '../translations/checkout.translations';

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
    courierOffice: data.courierOffice || null,
    byCourier: data.byCourier || false
  },
  items: productItemsInput(cartItems),
  paymentMethod: data.paymentMethod === CHECKOUT_PAYMENT[language].card ? CHECKOUT_PAYMENT[1].card.toUpperCase() : CHECKOUT_PAYMENT[1].cash.toUpperCase(),
  userComment: data.userComment
});

export const checkoutFormBtnValue = (values, language) =>
  values.paymentMethod === '' || values.paymentMethod === CHECKOUT_PAYMENT[language].cash ? CHECKOUT_BUTTON[language].confirmOrder : CHECKOUT_BUTTON[language].payOrder;

export const courierInputData = (language) => [
  { name: CHECKOUT_INPUT_FIELD.city, label: CHECKOUT_TEXT_FIELDS[language].city },
  { name: CHECKOUT_INPUT_FIELD.street, label: CHECKOUT_TEXT_FIELDS[language].street },
  { name: CHECKOUT_INPUT_FIELD.house, label: CHECKOUT_TEXT_FIELDS[language].house },
  { name: CHECKOUT_INPUT_FIELD.flat, label: CHECKOUT_TEXT_FIELDS[language].flat }
];
