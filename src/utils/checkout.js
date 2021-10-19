import PropTypes from 'prop-types';

import {
  CHECKOUT_BUTTON,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../translations/checkout.translations';
import { DEFAULT_CURRENCY, deliveryTypes, SESSION_STORAGE } from '../configs';
import { getFromSessionStorage, setToSessionStorage } from '../services/session-storage.service';
import { COURIER } from '../const/checkout';
import { MATERIAL_UI_COLOR } from '../const/material-ui';
import { checkoutPayMethod } from '../containers/checkout/checkout-form/const';

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
    price: item.price,
    options: {
      size: item.options.size._id
    }
  }));

export const orderInputData = (data, deliveryType, cartItems, language) => ({
  recipient: {
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
  values.paymentMethod === '' || values.paymentMethod === checkoutPayMethod[1].label
    ? CHECKOUT_BUTTON[language].confirmOrder
    : CHECKOUT_BUTTON[language].payOrder;

export const courierInputLabels = (language) => [
  {
    name: 'city',
    label: CHECKOUT_TEXT_FIELDS[language].city
  },
  {
    name: 'street',
    label: CHECKOUT_TEXT_FIELDS[language].street
  },
  {
    name: 'house',
    label: CHECKOUT_TEXT_FIELDS[language].house
  },
  {
    name: 'flat',
    label: CHECKOUT_TEXT_FIELDS[language].flat
  }
];

export const userNameInputLabels = (language) => [
  {
    name: 'firstName',
    label: CHECKOUT_TEXT_FIELDS[language].firstName
  },
  {
    name: 'lastName',
    label: CHECKOUT_TEXT_FIELDS[language].lastName
  }
];

export const userContactInputLabels = (language) => [
  {
    name: 'email',
    label: CHECKOUT_TEXT_FIELDS[language].email
  },
  {
    name: 'phoneNumber',
    label: CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber
  }
];

export const POSTOMAT = 'Поштомат';
export const POST_OFFICE_NUMBER = 'Відділення № ';

export const getCurrentCurrency = (currency, language = 1) =>
  currency === DEFAULT_CURRENCY ? CHECKOUT_TITLES[language].UAH : CHECKOUT_TITLES[language].USD;

export const setUserValues = (values, userData, deliveryType) => {
  const { firstName, lastName, email, phoneNumber } = userData;
  const result = { ...values, firstName, lastName, email, phoneNumber };
  if (
    (deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
      deliveryType === deliveryTypes.UKRPOSTCOURIER) &&
    userData.address
  ) {
    const { city, street, buildingNumber: house, appartment: flat } = userData.address;
    return {
      ...result,
      city,
      street,
      house,
      flat
    };
  }
  return result;
};

export const setDeliveryTypeToStorage = (deliveryType) => {
  const typeFromStorage = getFromSessionStorage(SESSION_STORAGE.DELIVERY_TYPE);
  setToSessionStorage(SESSION_STORAGE.DELIVERY_TYPE, deliveryType);
  const checkoutForm = getFromSessionStorage(SESSION_STORAGE.CHECKOUT_FORM);
  if (
    (deliveryType.includes(COURIER) && typeFromStorage.includes(COURIER)) ||
    !typeFromStorage ||
    !checkoutForm
  ) {
    return;
  }
  if (typeFromStorage !== deliveryType) {
    setToSessionStorage(SESSION_STORAGE.CHECKOUT_FORM, {
      ...checkoutForm,
      city: '',
      cityId: '',
      courierOffice: '',
      district: '',
      districtId: '',
      flat: '',
      house: '',
      region: '',
      regionId: '',
      street: '',
      userComment: ''
    });
  }
};

export const getThemeColor = (isLightTheme) =>
  isLightTheme ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.ACTION;

export const handleError = (touched, errors) => touched && !!errors;
