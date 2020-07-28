export const LANGUAGE = 1;

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

export const LOGO = 'HORONDI';
export const URL_LANGUAGE = 'en';

export const TIME_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const formRegExp = {
  email:
    '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$',
  // '^(?=.{1,60}$)(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
  name: "^(?=.{2,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  password: '^(?!.* )(?=.*[0-9])(?=.*[A-Z]).{8,30}$',
  phone: /^\+?[0-9]{3}-?[0-9]{6,12}$/g,
  // /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g,
  // ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
  country: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  city: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  street: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  buildingNum: '^[a-zA-Z0-9_.-]*$',
  deliveryType: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  deliveryMethod: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
};

export const placeholders = {
  firstName: [
    {
      lang: 'eng',
      value: 'Enter firstname'
    },
    {
      lang: 'uk',
      value: "Введіть Ім'я"
    }
  ],
  lastName: [
    {
      lang: 'eng',
      value: 'Enter lastname'
    },
    {
      lang: 'uk',
      value: 'Введіть прізвище'
    }
  ],
  email: [
    {
      lang: 'eng',
      value: 'Enter email'
    },
    {
      lang: 'uk',
      value: 'Введіть емейл'
    }
  ],
  password: [
    {
      lang: 'eng',
      value: 'Enter password'
    },
    {
      lang: 'uk',
      value: 'Введіть пароль'
    }
  ],
  confirmPassword: [
    {
      lang: 'eng',
      value: 'Confirm password'
    },
    {
      lang: 'uk',
      value: 'Підтвердіть пароль'
    }
  ]
};

export const errorMessages = [
  {
    lang: 'eng',
    value: {
      firstname: 'Minimum 2 characters',
      lastname: 'Minimum 2 characters',
      email: `Wrong email address, `,
      password: 'Minimum 6 characters with one letter and one digit',
      confirmPassword: 'Passwords do not match'
    }
  },
  {
    lang: 'uk',
    value: {
      firstname: 'Мінімум 2 символа',
      lastname: 'Мінімум 2 символа',
      email: 'Некоректний фоомат',
      password: 'Мінімум 6 символів з однією літерою та цифрою',
      confirmPassword: 'Паролі не співпадають'
    }
  }
];

export const LOGIN_FORM_LABEL = [
  {
    lang: 'eng',
    value: 'log in'
  },
  {
    lang: 'uk',
    value: 'увійти'
  }
];
export const OR_TEXT = [
  {
    lang: 'eng',
    value: 'or'
  },
  {
    lang: 'uk',
    value: 'або'
  }
];

export const REGISTER_FORM_LABEL = [
  {
    lang: 'eng',
    value: 'Register'
  },
  {
    lang: 'uk',
    value: 'Реєстрація'
  }
];

export const CONFIRM_EMAIL = [
  {
    lang: 'eng',
    value:
      'You have successfully registered! Please, confirm your email address.'
  },
  {
    lang: 'uk',
    value:
      'Ви успішно зареєструвались! Будь ласка, підтвердіть свою електронну адресу.'
  }
];

export const REGISTER_USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const LOGIN_USER_DATA = {
  email: '',
  password: ''
};

export const EMPTY_FIELD = [
  {
    lang: 'eng',
    value: 'Empty field'
  },
  {
    lang: 'uk',
    value: 'Заповніть поле'
  }
];

export const SHOW_AFTER = 3000;
