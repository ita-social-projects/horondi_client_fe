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

export const CABINET_OPTIONS_NOT_LOGGED = {
  0: {
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logIn: 'Увійти'
  },
  1: {
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logIn: 'Log in'
  }
};

export const CABINET_OPTIONS_LOGGED = {
  0: {
    profile: 'Профіль',
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logOut: 'Вийти'
  },
  1: {
    profile: 'Profile',
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logOut: 'Log out'
  }
};

export const HOMEPAGE_TITLES = {
  0: {
    catalog: 'Каталог',
    look: 'Стиль Горонді'
  },
  1: {
    catalog: 'Catalog',
    look: 'Horondi style'
  }
};

export const LOGO = 'HORONDI';
export const URL_LANGUAGE = 'en';

export const FOOTER_CATALOGS = {
  0: { title: 'Каталоги' },
  1: { title: 'Catalogs' }
};
export const FOOTER_INFORMATION = {
  0: {
    title: 'Інформація',
    items: [
      { id: 1, url: '/about-us', item: 'Про нас' },
      { id: 2, url: '#', item: 'Матеріали' },
      { id: 3, url: '#', item: 'Оплата і доставка' },
      { id: 4, url: '#', item: 'Умови конфіденційності' }
    ]
  },
  1: {
    title: 'Information',
    items: [
      { id: 1, url: '/about-us', item: 'About us' },
      { id: 2, url: '#', item: 'Materials' },
      { id: 3, url: '#', item: 'Payment & shipping' },
      { id: 4, url: '#', item: 'Privacy policy' }
    ]
  }
};

export const FOOTER_CONTACTS = {
  0: {
    title: 'Контакти',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Львів, вул.Угорська,2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Показати на мапі'
    }
  },
  1: {
    title: 'Contacts',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Lviv, Ugorska str.2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Show on map'
    }
  }
};

export const FOOTER_SOCIAL_NETWORK_LINKS = {
  0: {
    title: 'Ми в соцмережах'
  },
  1: {
    title: 'Social networks'
  },
  facebook: 'https://www.facebook.com/Horondi',
  instagram: 'https://www.instagram.com/horondi'
};
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

export const CONFIRM_EMAIL = [
  {
    lang: 'uk',
    value:
      'Ви успішно зареєструвались! Будь ласка, підтвердіть свою електронну адресу.'
  },
  {
    lang: 'eng',
    value:
      'You have successfully registered! Please, confirm your email address.'
  }
];

export const LOGIN_FORM_LABEL = [
  {
    lang: 'uk',
    value: 'увійти'
  },
  {
    lang: 'eng',
    value: 'log in'
  }
];
export const OR_TEXT = [
  {
    lang: 'uk',
    value: 'або'
  },
  {
    lang: 'eng',
    value: 'or'
  }
];

export const REGISTER_FORM_LABEL = [
  {
    lang: 'uk',
    value: 'Реєстрація'
  },
  {
    lang: 'eng',
    value: 'Register'
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
    lang: 'uk',
    value: 'Заповніть поле'
  },
  {
    lang: 'eng',
    value: 'Empty field'
  }
];

export const LOGIN_USER_ERROR = [
  {
    lang: 'uk',
    value: 'Неправильна електронна адреса або пароль'
  },
  {
    lang: 'eng',
    value: 'Wrong e-mail address or password'
  }
];

export const SHOW_AFTER = 3000;

export const errorMessages = [
  {
    lang: 'uk',
    value: {
      firstname: 'Поле повинно містити від 2 до 30 символів',
      lastname: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат, ',
      password: 'Від 6 до 30 символів з однією літерою та цифрою',
      confirmPassword: 'Паролі не співпадають'
    }
  },
  {
    lang: 'eng',
    value: {
      firstname: 'Field should contain from 2 to 30 characters',
      lastname: 'Field should contain from 2 to 30 characters',
      email: `Wrong email address, `,
      password: 'From 6 to 30 characters with one letter and one digit',
      confirmPassword: 'Passwords do not match'
    }
  }
];

export const formRegExp = {
  email:
    '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$',
  // '^(?=.{1,60}$)(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
  name: /^(?=.{2,30}$)[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/u,
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

export const WELCOME_MESSAGE = [
  {
    h2: 'Вітаємо',
    h3: 'Реєстрація пройшла успішно!',
    button: 'В магазин'
  },
  {
    h2: 'Welcome',
    h3: 'Registration was successful!',
    button: 'Go to shop'
  }
];
