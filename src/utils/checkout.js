import PropTypes from 'prop-types';
import i18next from 'i18next';
import {
  COURIER,
  DEFAULT_CURRENCY,
  deliveryTypes,
  MATERIAL_UI_COLOR,
  SESSION_STORAGE,
  countryOptions
} from '../configs';
import { getFromSessionStorage, setToSessionStorage } from '../services/session-storage.service';
import { checkoutPayMethod } from '../containers/checkout/checkout-form/const';

export const stateInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  paymentMethod: '',
  userComment: '',
  courierOrganization: '',
  courierOffice: '',
  city: '',
  street: '',
  house: '',
  flat: '',
  region: '',
  district: '',
  regionId: '',
  districtId: '',
  cityId: '',
  messenger: '',
  messengerPhone: '',
  worldWideCountry: '',
  stateOrProvince: '',
  worldWideCity: '',
  worldWideStreet: '',
  cityCode: ''
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
    courierOrganization: PropTypes.string,
    courierOffice: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    region: PropTypes.string,
    district: PropTypes.string,
    messenger: PropTypes.string,
    messengerPhone: PropTypes.string,
    worldWideCountry: PropTypes.string,
    stateOrProvince: PropTypes.string,
    worldWideCity: PropTypes.string,
    worldWideStreet: PropTypes.string,
    cityCode: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    paymentMethod: PropTypes.string,
    userComment: PropTypes.string,
    courierOrganization: PropTypes.string,
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
    courierOrganization: PropTypes.string,
    courierOffice: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    flat: PropTypes.string,
    region: PropTypes.string,
    district: PropTypes.string,
    messenger: PropTypes.string,
    messengerPhone: PropTypes.string,
    worldWideCountry: PropTypes.string,
    stateOrProvince: PropTypes.string,
    worldWideCity: PropTypes.string,
    worldWideStreet: PropTypes.string,
    cityCode: PropTypes.string
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
    product: item.productId,
    quantity: item.quantity,
    isFromConstructor: item.constructor.isConstructor,
    price: item.sizeAndPrice.price,
    options: {
      size: item.sizeAndPrice.size._id
    }
  }));

const handleOrderItem = (item) => item || '';

export const orderInputData = (data, deliveryType, cartItems, countryOption, _id = '') => {
  const recipient = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber
  };
  const items = productItemsInput(cartItems);
  const paymentMethod =
    data.paymentMethod === checkoutPayMethod.card ? checkoutPayMethod.card : checkoutPayMethod.cash;
  const { userComment } = data;

  if (countryOption === countryOptions.WITHIN_UKRAINE) {
    return {
      recipient,
      delivery: {
        sentBy: deliveryType,
        invoiceNumber: handleOrderItem(data.invoiceNumber),
        courierOffice: handleOrderItem(data.courierOffice),
        region: handleOrderItem(data.region),
        district: handleOrderItem(data.district),
        regionId: handleOrderItem(data.regionId),
        districtId: handleOrderItem(data.districtId),
        cityId: handleOrderItem(data.cityId),
        city: handleOrderItem(data.city),
        street: handleOrderItem(data.street),
        house: handleOrderItem(data.house),
        flat: handleOrderItem(data.flat),
        byCourier:
          deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
          deliveryType === deliveryTypes.UKRPOSTCOURIER
      },
      items,
      paymentMethod,
      userComment,
      promoCodeId: _id
    };
  }

  if (countryOption === countryOptions.WORLDWIDE) {
    return {
      recipient,
      delivery: {
        sentBy: deliveryTypes.WORLDWIDE,
        invoiceNumber: handleOrderItem(data.invoiceNumber),
        messenger: handleOrderItem(data.messenger),
        messengerPhone: handleOrderItem(data.messengerPhone),
        worldWideCountry: handleOrderItem(data.worldWideCountry),
        stateOrProvince: handleOrderItem(data.stateOrProvince),
        worldWideCity: handleOrderItem(data.worldWideCity),
        worldWideStreet: handleOrderItem(data.worldWideStreet),
        cityCode: handleOrderItem(data.cityCode),
        byCourier: false
      },
      items,
      paymentMethod,
      userComment,
      promoCodeId: _id
    };
  }
};

export const checkoutFormBtnValue = (values) =>
  values.paymentMethod === '' || values.paymentMethod === checkoutPayMethod.cash
    ? i18next.t(`checkout.confirmOrder`)
    : i18next.t(`checkout.payOrder`);

export const courierInputLabels = () => [
  {
    name: 'house',
    label: i18next.t(`checkout.checkoutTextFields.house`)
  },
  {
    name: 'flat',
    label: i18next.t(`checkout.checkoutTextFields.flat`)
  }
];

export const userContactInputLabels = () => [
  {
    name: 'firstName',
    label: i18next.t(`checkout.checkoutTextFields.firstName`)
  },
  {
    name: 'lastName',
    label: i18next.t(`checkout.checkoutTextFields.lastName`)
  },
  {
    name: 'email',
    label: i18next.t(`checkout.checkoutTextFields.email`)
  },
  {
    name: 'phoneNumber',
    label: i18next.t(`checkout.checkoutTextFields.contactPhoneNumber`)
  }
];

export const POSTOMAT = 'Поштомат';
export const POST_OFFICE_NUMBER = 'Відділення № ';

export const getCurrentCurrency = (currency) =>
  currency === DEFAULT_CURRENCY
    ? i18next.t(`checkout.checkoutTitles.UAH`)
    : i18next.t(`checkout.checkoutTitles.USD`);

export const updateInitialValues = (data, deliveryType) => {
  const { firstName, lastName, email, phoneNumber, address } = data;

  const profileData = {
    firstName: handleOrderItem(firstName),
    lastName: handleOrderItem(lastName),
    email: handleOrderItem(email),
    phoneNumber: handleOrderItem(phoneNumber),
    messengerPhone: handleOrderItem(phoneNumber)
  };

  const initValuesForNovaPost = {
    ...stateInitialValues,
    ...profileData,
    city: handleOrderItem(address?.city)
  };
  const initValuesForUkrPost = {
    ...stateInitialValues,
    ...profileData,
    region: handleOrderItem(address?.region),
    district: handleOrderItem(address?.district),
    city: handleOrderItem(address?.city)
  };
  const initValuesForSelfpickup = {
    ...stateInitialValues,
    ...profileData
  };

  switch (deliveryType) {
    case 'NOVAPOST':
      return initValuesForNovaPost;
    case 'UKRPOST':
      return initValuesForUkrPost;
    case 'SELFPICKUP':
      return initValuesForSelfpickup;
    default:
      return {
        ...stateInitialValues,
        ...profileData,
        region: handleOrderItem(address?.region),
        district: handleOrderItem(address?.district),
        city: handleOrderItem(address?.city),
        street: handleOrderItem(address?.street),
        house: handleOrderItem(address?.buildingNumber),
        flat: handleOrderItem(address?.appartment)
      };
  }
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
