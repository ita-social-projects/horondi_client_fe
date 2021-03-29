import PropTypes from 'prop-types';

import {
  CHECKOUT_BUTTON,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../translations/checkout.translations';
import { DEFAULT_CURRENCY, deliveryTypes } from '../configs';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  paymentMethod: '',
  userComment: '',
  courierOffice: '',
  city: '',
  street: '',
  house: '',
  flat: '',
  region: '',
  district: '',
  regionId: '',
  districtId: '',
  cityId: ''
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
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    region: PropTypes.string,
    district: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOffice: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    region: PropTypes.string,
    district: PropTypes.string
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOffice: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    region: PropTypes.string,
    district: PropTypes.string
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
    product: item.product?._id,
    quantity: item.quantity,
    isFromConstructor: !item.product._id,
    options: {
      size: item.options.size._id
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
    region: data.region || '',
    district: data.district || '',
    regionId: data.regionId || '',
    districtId: data.districtId || '',
    cityId: data.cityId || '',
    city: data.city || '',
    street: data.street || '',
    house: data.house || '',
    flat: data.flat || '',
    byCourier:
      deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
      deliveryType === deliveryTypes.UKRPOSTCOURIER
  },
  items: productItemsInput(cartItems),
  paymentMethod:
    data.paymentMethod === CHECKOUT_PAYMENT[language].card
      ? CHECKOUT_PAYMENT[1].card.toUpperCase()
      : CHECKOUT_PAYMENT[1].cash.toUpperCase(),
  userComment: data.userComment
});

export const checkoutFormBtnValue = (values, language) =>
  values.paymentMethod === '' || values.paymentMethod === CHECKOUT_PAYMENT[language].cash
    ? CHECKOUT_BUTTON[language].confirmOrder
    : CHECKOUT_BUTTON[language].payOrder;

export const courierInputLabels = (language) => [
  {
    name: CHECKOUT_INPUT_FIELD.city,
    label: CHECKOUT_TEXT_FIELDS[language].city
  },
  {
    name: CHECKOUT_INPUT_FIELD.street,
    label: CHECKOUT_TEXT_FIELDS[language].street
  },
  {
    name: CHECKOUT_INPUT_FIELD.house,
    label: CHECKOUT_TEXT_FIELDS[language].house
  },
  {
    name: CHECKOUT_INPUT_FIELD.flat,
    label: CHECKOUT_TEXT_FIELDS[language].flat
  }
];

export const userNameInputLabels = (language) => [
  {
    name: CHECKOUT_INPUT_FIELD.firstName,
    label: CHECKOUT_TEXT_FIELDS[language].firstName
  },
  {
    name: CHECKOUT_INPUT_FIELD.lastName,
    label: CHECKOUT_TEXT_FIELDS[language].lastName
  }
];

export const userContactInputLabels = (language) => [
  {
    name: CHECKOUT_INPUT_FIELD.email,
    label: CHECKOUT_TEXT_FIELDS[language].email
  },
  {
    name: CHECKOUT_INPUT_FIELD.phoneNumber,
    label: CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber
  }
];

export const POSTOMAT = 'Поштомат';
export const POST_OFFICE_NUMBER = 'Відділення № ';

export const getCurrentCurrency = (currency, language = 1) =>
  currency === DEFAULT_CURRENCY ? CHECKOUT_TITLES[language].UAH : CHECKOUT_TITLES[language].USD;
