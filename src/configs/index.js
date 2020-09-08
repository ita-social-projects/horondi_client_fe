export const LANGUAGE = 0;

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const HOMEPAGE_LOOKS_IMAGES = [
  'https://horondi.blob.core.windows.net/horondi/our-looks/img1.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img2.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img3.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img4.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img5.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img6.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img7.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img8.jpg'
];

export const ABOUT_US_IMAGES = {
  hero: './images/about-us/hero-bg.jpg',
  horondi_1: './images/about-us/horondi.jpg',
  horondi_2: './images/about-us/horondi-2.jpg',
  horondi_3: './images/about-us/horondi-3.jpg',
  workPlace_1: './images/about-us/work-place.jpg',
  workPlace_2: './images/about-us/work-place-2.jpg'
};

export const CART_IMAGES = {
  lightTheme: './images/cart/cart-light-theme-img.png',
  darkTheme: './images/cart/cart-dark-theme-img.png'
};

export const WISHLIST_IMAGES = {
  lightTheme: './images/wishlist/wishlist-light-theme-img.png',
  darkTheme: './images/wishlist/wishlist-dark-theme-img.png'
};

export const ERROR_PAGE_IMAGES = {
  light: './images/error-page/error-light.png',
  dark: './images/error-page/error-dark.png'
};

export const LOGO = 'HORONDI';
export const URL_LANGUAGE = 'en';

export const TIME_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export const REGISTER_USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export const LOGIN_USER_DATA = {
  email: '',
  password: ''
};

export const formRegExp = {
  email:
    '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$',
  name: /^(?=.{2,30}$)[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/u,
  password: '^(?!.* )(?=.*[0-9])(?=.*[A-Z]).{6,30}$',
  phone: /^\+?[0-9]{3}-?[0-9]{6,12}$/g,
  country: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  city: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  street: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  buildingNum: '^[a-zA-Z0-9_.-]*$',
  deliveryType: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  deliveryMethod: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
};

export const COMMENTS_TIME_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};
export const DATE_LANGUAGE_OPTIONS = ['ukr-UA', 'en-US'];
export const DEFAULT_SIZE = 'M';
export const SORT_ASC = 'sortAsc';
export const SORT_DESC = 'sortDesc';
export const RATE = 'rate';
export const POPULARITY = 'POPULARITY';

export const FAKE_PRODUCT_FOR_TEST = {
  _id: 'xdfgbvc3',
  name: {
    0: { value: 'гарбуз' },
    1: { value: 'Pumpkin' }
  },
  bagBottom: 'Натуральна шкіра',
  selectedSize: 'S',
  sidePocket: {
    isSelected: true
  },
  totalPrice: 1200,
  images:
    'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/47230850_1840441399415884_8917409871041658880_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=hm88c7z3vA8AX-1Hz30&_nc_ht=scontent.flwo4-2.fna&oh=72d7ebf7aaa8fee317e60c68bbc8a987&oe=5F47F0CA',
  quantity: 1,
  productUrl: '/backpacks/foweoo423'
};

export const INPUT_VARIANT = 'outlined';
export const REDIRECT_TIMEOUT = 3000;
export const responsive = {
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
export const IMG_URL = 'https://horondi.blob.core.windows.net/horondi/images/';

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const CURRENCIES_LIST = [
  { currency: 'UAH', value: 0 },
  { currency: 'USD', value: 1 }
];

export const DEFAULT_CURRENCY = 0;
export const DEFAULT_LANGUAGE = 0;

export const hryvniaUnicode = '\u20b4';
export const dollarUnicode = '\u0024';
