export const USER_ERROR = {
  USER_ALREADY_EXIST: [
    {
      value: 'Користувач за вказаним емейлом вже існує'
    },
    {
      value: 'User with given email already exists'
    }
  ],
  USER_NOT_AUTHORIZED: [
    {
      value: 'Користувач не авторизований'
    },
    {
      value: 'User is not authorized'
    }
  ],
  REFRESH_TOKEN_IS_NOT_VALID: [
    { value: 'Данні авторизації застарілі, будь ласка авторизуйтеся' },
    {
      value: 'You have be logged out, please sign in again'
    }
  ],
  WRONG_CREDENTIALS: [
    {
      value: 'Неправильна електронна адреса або пароль'
    },
    {
      value: 'Wrong e-mail address or password'
    }
  ],
  INPUT_NOT_VALID: [
    {
      value: 'Ви ввели невірні дані'
    },
    {
      value: 'Wrong input data'
    }
  ],
  USER_IS_BLOCKED: [
    {
      value: 'Вибачте, ваш обліковий запис заблоковано.'
    },
    {
      value: 'Sorry, your account is blocked.'
    }
  ],
  USER_EMAIL_ALREADY_CONFIRMED: [
    {
      value: 'Користувач з таким email вже підтверджений'
    },
    {
      value: 'User with this email is already confirmed'
    }
  ],
  USER_NOT_FOUND: [
    {
      value: 'Користувач не знайдений!!!'
    },
    {
      value: 'User has not been found!'
    }
  ],
  TOKEN_IS_EXPIRIED: [
    {
      value:
        'Дані авторизації застаріли. Будь ласка, підтвердіть свою електронну адресу в особистому кабінеті'
    },
    {
      value: 'You have be logged out. Try to confirm your email in your personal cabinet'
    }
  ],
  CART_IS_NOT_FOUND: [
    {
      value: 'Данні авторизації застарілі'
    },
    {
      value: 'You have be logged out'
    }
  ],
  DEFAULT_ERROR: [
    {
      value: 'Ой! Щось пішло не так. Спробуйте будь ласка пізніше.'
    },
    {
      value: 'Oops! Something went wrong. Please, try again later.'
    }
  ]
};

export const WELCOME_MESSAGE = [
  {
    h2: 'Вітаємо',
    h3: 'Реєстрація пройшла успішно!',
    button_goToShop: 'В магазин',
    button_logIn: 'Увійти'
  },
  {
    h2: 'Welcome',
    h3: 'Registration was successful!',
    button_goToShop: 'Go to shop',
    button_logIn: 'Log in'
  }
];

export const RECOVERY_ERROR_MESSAGE = {
  USER_NOT_FOUND: [
    {
      value: 'Користувача з даним емейлом не знайдено'
    },
    {
      value: 'User with given e-mail address is not found'
    }
  ],
  EMAIL_ERROR: [
    {
      value: 'Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      value: 'Please, reload your page and try again.'
    }
  ]
};
