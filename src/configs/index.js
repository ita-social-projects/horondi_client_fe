export const HORONDI = 'horondi';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const CONSTRUCTOR_VIDEO_LINK = 'https://i.imgur.com/DsWy1xp.mp4';
export const GOOGLE_MAP_URL = 'https://maps.google.com/maps?q=';
export const HORONDI_FB_LINK = 'https://www.facebook.com/Horondi';
export const HORONDI_INST_LINK = 'https://www.instagram.com/horondi';
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

export const URL_LANGUAGE = 'en';

export const REGISTER_USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};
export const USER_REGISTER_LABELS = {
  email: 'email',
  pass: 'password',
  text: 'text'
};

export const CHAT_USER_DATA = {
  firstName: '',
  email: '',
  message: ''
};
export const LOGIN_USER_DATA = {
  email: '',
  password: '',
  rememberMe: false
};

export const PROFILE_USER_CONTACT_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: ''
};

export const PROFILE_USER_ADRESS_DATA = {
  country: '',
  region: '',
  city: '',
  street: '',
  buildingNumber: '',
  appartment: '',
  zipcode: ''
};

export const COMMENTS_TIME_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

export const USER_TOKENS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken'
};

export const FILTERS_KEYS = ['category', 'models', 'patterns'];

export const REDIRECT_TIMEOUT = 3000;
export const carouselMaterialInterval = 2000;
export const commentsReplyLimit = 10;
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

export const hryvniaUnicode = '\u20b4';
export const dollarUnicode = '\u0024';

export const commentFields = {
  text: { name: 'text', multiline: true, rows: 5 }
};

export const sideBarSubList = [
  { link: '/materials' },
  { link: '/pages/about-us', text: 'about-us' },
  { link: '/news' },
  { link: '/contacts' }
];

export const SCROLL_BAR_DATA = ['#slider', '#catalog', '#constructor', '#models', '#horondiStyle'];

export const toastSettings = {
  autoClose: 3000,
  hideProgressBar: true
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

export const FETCH_POLICY = 'no-cache';
export const RETURN_PAGE = 'returnPage';

export const SORT_BY_SELECT_OPTIONS = [
  { name: 'popularity', value: -1 },
  { name: 'sortDesc', value: -1 },
  { name: 'sortAsc', value: 1 },
  { name: 'rate', value: -1 }
];
export const SORT_ASC = 'sortAsc';
export const SORT_DESC = 'sortDesc';
export const RATE = 'rate';
export const POPULARITY = 'popularity';

export const DRAWER_TEMPORARY = 'temporary';
export const DRAWER_PERMANENT = 'permanent';
export const TEMPORARY_WIDTHS = ['sm', 'xs'];
export const ITEMS_PER_PAGE = [
  {
    title: 'nine products per page',
    value: 9
  },
  {
    title: 'eighteen products per page',
    value: 18
  },
  {
    title: 'thirty products per page',
    value: 30
  }
];
export const AUTH_ERRORS = {
  ACCESS_TOKEN_IS_NOT_VALID: 'USER_NOT_AUTHORIZED',
  REFRESH_TOKEN_IS_NOT_VALID: 'REFRESH_TOKEN_IS_NOT_VALID'
};

export const COURIER = 'COURIER';
export const RESET = 'reset';

export const IMG_ALT = {
  REGISTER_IMG_INFO: 'register info'
};

export const limitHistoryOrders = 10;
export const TEXT_FIELD_VARIANT = {
  OUTLINED: 'outlined',
  ROUNTED: 'rounded'
};

export const statusColors = [
  { label: 'CREATED', color: '#9e9e9e' },
  { label: 'CONFIRMED', color: '#4791db' },
  { label: 'PRODUCED', color: '#81c784' },
  { label: 'CANCELLED', color: '#e33371' },
  { label: 'REFUNDED', color: '#ffb74d' },
  { label: 'SENT', color: '#b39ddb' },
  { label: 'DELIVERED', color: '#546e7a' }
];

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const CURRENCIES_LIST = [
  { currency: 'UAH', value: 0 },
  { currency: 'USD', value: 1 }
];
export const LANGUAGE = 'language';

export const TIME_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

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
export const deliveryTypeKey = 'deliveryType';

export const TEXT_FIELDS = {
  STRING: 'string',
  SMALL: 'small',
  PAGE: 'page',
  SORT: 'sort'
};
