export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const CONSTRUCTOR_VIDEO_LINK = 'https://i.imgur.com/DsWy1xp.mp4';
export const UNIQUE_MODEL_IMAGE_LINK = 'https://i.imgur.com/ygJaph4.jpg';

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

export const CHAT_USER_DATA = {
  firstName: '',
  email: '',
  message: ''
};

export const CHAT_FACEBOOK_DATA = {
  pageId: '101134448446261',
  appId: '713686025904610'
};

export const LOGIN_USER_DATA = {
  email: '',
  password: '',
  staySignedIn: false
};

export const PROFILE_USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  region: '',
  city: '',
  street: '',
  buildingNumber: '',
  appartment: '',
  zipcode: ''
};

export const REQUIRED_USER_FIELDS = ['firstName', 'lastName', 'email'];

export const errorMessages = [
  {
    lang: 'uk',
    value: {
      firstName: 'Поле повинно містити від 2 до 30 символів',
      lastName: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат пошти',
      pass: 'Від 8 до 30 символів з однією літерою та цифрою',
      confirmPassword: 'Паролі не співпадають',
      text: 'Поле повинно містити від 2 до 700 символів',
      phoneNumber: 'Некоректний формат телефону',
      zipcode: 'Некоректний формат почтового індексу',
      country: 'Поле повинно містити від 2 до 40 символів',
      region: 'Поле повинно містити від 2 до 40 символів',
      city: 'Поле повинно містити від 2 до 40 символів',
      street: 'Поле повинно містити від 2 до 40 символів',
      buildingNumber: 'Поле повинно містити від 1 до 6 символів',
      appartment: 'Поле повинно містити від 1 до 6 символів',
      empty: 'Поле не повинне бути порожнім'
    }
  },
  {
    lang: 'eng',
    value: {
      firstName: 'Field should contain from 2 to 30 characters',
      lastName: 'Field should contain from 2 to 30 characters',
      email: `Wrong email address `,
      pass: 'From 8 to 30 characters with one letter and one digit',
      confirmPassword: 'Passwords do not match',
      text: 'Field should contain from 2 to 700 characters',
      phoneNumber: 'Wrong phone format',
      zipcode: 'Wrong zipcode format',
      country: 'Field should contain from 2 to 40 characters',
      region: 'Field should contain from 2 to 40 characters',
      city: 'Field should contain from 2 to 40 characters',
      street: 'Field should contain from 2 to 40 characters',
      buildingNumber: 'Field should contain from 1 to 6 characters',
      appartment: 'Field should contain from 1 to 6 characters',
      empty: 'Field should not to be empty'
    }
  }
];

export const formRegExp = {
  email: '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$',
  name: /^(?=.{2,30}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$/u,
  firstName: /^(?=.{2,30}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$/u,
  lastName: /^(?=.{2,30}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$/u,
  pass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/,
  phoneNumber: /^\+?[0-9]{3}-?[0-9]{9}$/g,
  zipcode: /^\d{5}(?:[-\s]\d{4})?$/,
  country: "^(?=.{2,40}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  city: "^(?=.{2,40}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  region: "^(?=.{2,40}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  street: "^(?=.{2,40}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  buildingNumber: '^(?=.{1,6}$)[a-zA-Z0-9_.-]*$',
  appartment: '^(?=.{1,6}$)[a-zA-Z0-9_.-]*$',
  deliveryType: "^(?=.{1,30}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  deliveryMethod: "^(?=.{1,30}$)[a-zA-Zа-яА-Яіїє]+(([',. -][a-zA-Zа-яА-Яіїє])?[a-zA-Zа-яА-Яіїє]*)*$",
  text: /^.{2,700}$/gm,
  link: /(^|\s)(.+)?((https?:\/\/)?[\w-]+(\.[a-z0-9-]+)+\.?(:\d+)?(\/\S*)?)/gim
};

export const placeholders = {
  firstName: [
    {
      lang: 'uk',
      value: "Введіть Ім'я"
    },
    {
      lang: 'eng',
      value: 'Enter firstname'
    }
  ],
  lastName: [
    {
      lang: 'uk',
      value: 'Введіть прізвище'
    },
    {
      lang: 'eng',
      value: 'Enter lastname'
    }
  ],
  email: [
    {
      lang: 'uk',
      value: 'Введіть емейл'
    },
    {
      lang: 'eng',
      value: 'Enter email'
    }
  ],
  password: [
    {
      lang: 'uk',
      value: 'Введіть пароль'
    },
    {
      lang: 'eng',
      value: 'Enter password'
    }
  ],
  confirmPassword: [
    {
      lang: 'uk',
      value: 'Підтвердіть пароль'
    },
    {
      lang: 'eng',
      value: 'Confirm password'
    }
  ]
};

export const FORGOT_PASSWORD = [
  {
    lang: 'uk',
    value: 'Забули пароль?'
  },
  {
    lang: 'eng',
    value: 'Forgot password?'
  }
];

export const REGISTER_PROPOSAL = [
  {
    lang: 'uk',
    value: 'Реєстрація'
  },
  {
    lang: 'eng',
    value: 'Registration'
  }
];

export const CONFIRM_ERROR = [
  {
    value: 'Ой! Щось пішло не так.'
  },
  {
    value: 'Oops! Something went wrong.'
  }
];

export const COMMENTS_TIME_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

export const DATE_LANGUAGE_OPTIONS = ['ukr-UA', 'en-US'];
export const SORT_ASC = 'sortAsc';
export const SORT_DESC = 'sortDesc';
export const RATE = 'rate';
export const POPULARITY = 'popularity';
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

export const SNACKBAR_DURATION = 4000;
export const SNACKBAR_MESSAGE = {
  added: ['Ваш коментар успішно створений', 'Your comment is successfully added'],
  updated: ['Ваш коментар успішно оновлений', 'Your comment is successfully updated'],
  deleted: ['Ваш коментар успішно видалений', 'Your comment is successfully deleted'],
  error: ['Щось пішло не так', 'Something went wrong']
};
export const COMMENT_DATA = {
  firstName: '',
  text: '',
  product: '',
  show: true,
  email: ''
};
export const TEXT_VALUE = 'text';
export const IMG_URL = 'https://horondi.blob.core.windows.net/horondi/images/';

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const CURRENCIES_LIST = [
  { currency: 'UAH', value: 0 },
  { currency: 'USD', value: 1 }
];

export const DEFAULT_PRICE = [
  { value: 0, currency: 'UAH' },
  { value: 0, currency: 'USD' }
];

export const DEFAULT_CURRENCY = 0;
export const DEFAULT_LANGUAGE = 0;
export const DEFAULT_COUNT_PER_PAGE = 9;

export const hryvniaUnicode = '\u20b4';
export const dollarUnicode = '\u0024';

export const commentFields = {
  firstName: { name: 'firstName' },
  email: { name: 'email' },
  text: { name: 'text', multiline: true, rows: 7 }
};

export const profileFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'country', 'region', 'city', 'street', 'buildingNumber', 'appartment', 'zipcode'];

export const carouselInterval = 5000;
export const carouselMaterialInterval = 2000;

export const moreHeaderButton = [
  {
    lang: 'uk',
    value: 'Більше'
  },
  {
    lang: 'en',
    value: 'More'
  }
];

export const sideBarSubList = [
  {
    name: ['Матеріали', 'Materials'],
    link: '/materials'
  },
  {
    name: ['Про нас', 'About us'],
    link: '/about-us'
  },
  {
    name: ['Новини', 'News'],
    link: '/news'
  },
  {
    name: ['Контакти', 'Contacts'],
    link: '/contacts'
  }
];

export const SCROLL_BAR_DATA = [
  {
    name: ['Слайдер', 'Slider'],
    href: '#slider'
  },
  {
    name: ['Каталог', 'Catalog'],
    href: '#catalog'
  },
  {
    name: ['Створи сам', 'Create by yourself'],
    href: '#constructor'
  },
  {
    name: ['Моделі', 'Models'],
    href: '#models'
  },
  {
    name: ['Стиль горонді', 'Horondi style'],
    href: '#horondiStyle'
  }
];

export const toastSettings = {
  autoClose: 3000,
  hideProgressBar: true
};

export const NOTHING_FOUND_MESSAGE = ['Нічого не знайдено', 'Nothing found'];

export const commentsLimit = 10;

export const DEFAULT_SIZE = 'M';

export const cookiePolicy = {
  SINGLE_HOST_ORIGIN: 'single_host_origin'
};

export const cartKey = 'cart';
export const wishlistKey = 'wishlist';
export const sort = 'sort';
export const countPerPage = 'countPerPage';
export const page = 'page';
export const deliveryTypeKey = 'deliveryType';

export const deliveryTypes = {
  NOVAPOST: 'NOVAPOST',
  UKRPOST: 'UKRPOST',
  SELFPICKUP: 'SELFPICKUP',
  NOVAPOSTCOURIER: 'NOVAPOSTCOURIER',
  UKRPOSTCOURIER: 'UKRPOSTCOURIER'
};
