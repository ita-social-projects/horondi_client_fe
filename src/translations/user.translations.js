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
      value: 'Користувач не авториваний'
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
      value: 'Користувач не знайдений'
    },
    {
      value: 'User has not been found'
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

export const errorMessages = [
  {
    value: {
      firstName: 'Поле повинно містити від 2 до 30 символів',
      lastName: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат, ',
      emailLength: 'Поле повинно містити від 8 до 60 символів',
      pass: 'Від 6 до 30 символів з однією великою літерою та цифрою',
      confirmPassword: 'Паролі не збігаються',
      wrongFormat: 'Некоректний формат',
      empty: 'Поле не повинне бути порожнім'
    }
  },
  {
    value: {
      firstName: 'Field should contain from 2 to 30 characters',
      lastName: 'Field should contain from 2 to 30 characters',
      email: `Wrong email address, `,
      emailLength: `Field should contain from 8 to 60 characters`,
      pass: 'From 6 to 30 characters with one capital  letter and one digit',
      confirmPassword: 'Passwords do not match',
      wrongFormat: 'Wrong format',
      empty: 'Field should not to be empty'
    }
  }
];

export const placeholders = {
  firstName: [
    {
      value: 'Ім’я'
    },
    {
      value: 'Firstname'
    }
  ],
  lastName: [
    {
      value: 'Прізвище'
    },
    {
      value: 'Lastname'
    }
  ],
  email: [
    {
      value: 'Електронна пошта'
    },
    {
      value: 'Email'
    }
  ],
  password: [
    {
      value: 'Пароль'
    },
    {
      value: 'Password'
    }
  ],
  confirmPassword: [
    {
      value: 'Підтвердіть пароль'
    },
    {
      value: 'Confirm password'
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

export const CHANGE_PASSWORD = [
  {
    h2: 'Введіть новий пароль',
    pass_label: 'Новий пароль',
    confirm_label: 'Підтвердіть пароль',
    button: 'Змінити'
  },
  {
    h2: 'Enter new password',
    pass_label: 'New password',
    confirm_label: 'Confirm password',
    button: 'Change'
  }
];

export const NEW_PASSWORD_ERROR = {
  USER_NOT_FOUND: [
    {
      value: 'Користувача не знайдено'
    },
    {
      value: 'User is not found'
    }
  ],
  PASSWORD_RECOVERY_ATTEMPTS_LIMIT_EXCEEDED: [
    {
      value: 'Перевищено максимальну кількість спроб відновлення'
    },
    {
      value: 'Exceeded password recovery limit'
    }
  ],
  DEFAULT_ERROR: [
    {
      value: 'Відбулась помилка! Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      value: 'An error occurred! Please, reload your page and try again.'
    }
  ]
};

export const NEW_PASSWORD_SUCCESS_MESSAGE = [
  {
    h2: 'Ваш пароль успішно змінено!',
    p: 'Вас буде спрямовано на сторінку логінування'
  },
  {
    h2: 'Your password is successfully changed!',
    p: 'You will be directed to login page'
  }
];
