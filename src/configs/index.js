export const HORONDI = 'horondi';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const IMG_URL = 'https://horondi.blob.core.windows.net/horondi/images/';

export const CART_AND_WISHLIST_IMAGES = {
  lightTheme: './images/cart/empty-cart-light-theme-image.png',
  darkTheme: './images/cart/empty-cart-black-theme-image.png'
};

export const ERROR_PAGE_IMAGES = {
  light: './images/error-page/error-light.png',
  dark: './images/error-page/error-dark.png'
};

export const NOT_FOUND_PAGE_IMAGES = {
  light: './images/not-found-page/bag.png',
  dark: './images/not-found-page/bag.png'
};

export const USER_TOKENS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken'
};

export const FILTERS_KEYS = ['category', 'models', 'patterns'];

export const REDIRECT_TIMEOUT = 3000;
export const constructorDefaultPrice = ['1400 ', '50 '];
export const DEFAULT_CURRENCY = 0;
export const DEFAULT_LANGUAGE = 0;
export const DEFAULT_COUNT_PER_PAGE = 9;

export const RESPONSIVE_PDP = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1146, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 810, min: 0 },
    items: 1
  }
};
export const RESPONSIVE_CATEGORIES = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1146, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 760, min: 0 },
    items: 1
  }
};

export const commentFields = {
  text: { name: 'text', multiline: true, rows: 5 }
};

export const cookiePolicy = {
  SINGLE_HOST_ORIGIN: 'single_host_origin'
};

export const deliveryTypes = {
  NOVAPOST: 'NOVAPOST',
  UKRPOST: 'UKRPOST',
  SELFPICKUP: 'SELFPICKUP',
  NOVAPOSTCOURIER: 'NOVAPOSTCOURIER',
  UKRPOSTCOURIER: 'UKRPOSTCOURIER',
  COURIER: 'COURIER'
};

const courierArray = ['NOVAPOSTCOURIER', 'UKRPOSTCOURIER', 'COURIER'];
export const isCourier = (type) => courierArray.some((arrType) => arrType === type);

export const CY_CODE_ERR = 'code-error';

export const USER_IS_BLOCKED = 'USER_IS_BLOCKED';

export const SESSION_STORAGE = {
  CHECKOUT_FORM: 'checkoutForm',
  DELIVERY_TYPE: 'deliveryType'
};

export const RETURN_PAGE = 'returnPage';

export const SORT_ASC = 'sortAsc';
export const SORT_DESC = 'sortDesc';
export const RATE = 'rate';
export const POPULARITY = 'popularity';

export const AUTH_ERRORS = {
  ACCESS_TOKEN_IS_NOT_VALID: 'USER_NOT_AUTHORIZED',
  REFRESH_TOKEN_IS_NOT_VALID: 'REFRESH_TOKEN_IS_NOT_VALID'
};

export const COURIER = 'COURIER';
export const RESET = 'reset';

export const TEXT_FIELD_VARIANT = {
  OUTLINED: 'outlined',
  ROUNTED: 'rounded'
};

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const CURRENCIES_LIST = [
  { currency: 'UAH', value: 0 },
  { currency: 'USD', value: 1 }
];
export const LANGUAGE = 'language';

export const URL_QUERIES_NAME = {
  page: 'page',
  sort: 'sort',
  countPerPage: 'countPerPage',
  categoryFilter: 'categoryFilter',
  modelsFilter: 'modelsFilter',
  colorsFilter: 'colorsFilter',
  patternsFilter: 'patternsFilter',
  isHotItemFilter: 'isHotItemFilter',
  priceFilter: 'priceFilter',
  defaultPage: '1'
};

export const TEXT_VALUE = 'text';

export const SNACKBAR_TYPES = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success'
};

export const MATERIAL_UI_COLOR = {
  INHERIT: 'inherit',
  PRIMARY: 'primary',
  ACTION: 'action'
};

export const cartKey = 'cart';
export const WISHLIST_KEY = 'wishlist';
export const countPerPage = 'countPerPage';

export const TEXT_FIELDS = {
  STRING: 'string',
  SMALL: 'small',
  PAGE: 'page',
  SORT: 'sort'
};
