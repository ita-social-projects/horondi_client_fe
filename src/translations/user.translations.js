export const USER_ERROR = {
  USER_ALREADY_EXIST: {
    ua: {
      value: 'Користувач з такою електронною поштою вже зареєстрований'
    },
    en: {
      value: 'An account with this email already exists'
    }
  },
  USER_NOT_AUTHORIZED: {
    ua: {
      value: 'Користувач не авторизований'
    },
    en: {
      value: 'User is not authorized'
    }
  },
  REFRESH_TOKEN_IS_NOT_VALID: {
    ua: { value: 'Данні авторизації застарілі, будь ласка авторизуйтеся' },
    en: {
      value: 'You have be logged out, please sign in again'
    }
  },
  WRONG_CREDENTIALS: {
    ua: {
      value: 'Неправильна електронна адреса або пароль'
    },
    en: {
      value: 'Wrong e-mail address or password'
    }
  },
  INPUT_NOT_VALID: {
    ua: {
      value: 'Ви ввели невірні дані'
    },
    en: {
      value: 'Wrong input data'
    }
  },
  USER_IS_BLOCKED: {
    ua: {
      value: 'Вибачте, ваш обліковий запис заблоковано.'
    },
    en: {
      value: 'Sorry, your account is blocked.'
    }
  },
  USER_EMAIL_ALREADY_CONFIRMED: {
    ua: {
      value: 'Користувач з таким email вже підтверджений'
    },
    en: {
      value: 'User with this email is already confirmed'
    }
  },
  USER_NOT_FOUND: {
    ua: {
      value: 'Користувач не знайдений!!!'
    },
    en: {
      value: 'User has not been found!'
    }
  },
  TOKEN_IS_EXPIRIED: {
    ua: {
      value:
        'Дані авторизації застаріли. Будь ласка, підтвердіть свою електронну адресу в особистому кабінеті'
    },
    en: {
      value: 'You have be logged out. Try to confirm your email in your personal cabinet'
    }
  },
  CART_IS_NOT_FOUND: {
    ua: {
      value: 'Данні авторизації застарілі'
    },
    en: {
      value: 'You have be logged out'
    }
  },
  DEFAULT_ERROR: {
    ua: {
      value: 'Ой! Щось пішло не так. Спробуйте будь ласка пізніше.'
    },
    en: {
      value: 'Oops! Something went wrong. Please, try again later.'
    }
  }
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
  USER_NOT_FOUND: {
    ua: {
      value: 'Користувача з даним емейлом не знайдено'
    },
    en: {
      value: 'User with given e-mail address is not found'
    }
  },
  EMAIL_ERROR: {
    ua: {
      value: 'Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    en: {
      value: 'Please, reload your page and try again.'
    }
  }
};
