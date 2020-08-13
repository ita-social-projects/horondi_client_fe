export const CONFIRM_EMAIL = [
  {
    lang: 'uk',
    value:
      'Ви успішно зареєструвались! Будь ласка, підтвердіть свою електронну адресу.'
  },
  {
    lang: 'en',
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
    lang: 'en',
    value: 'log in'
  }
];
export const OR_TEXT = [
  {
    lang: 'uk',
    value: 'або'
  },
  {
    lang: 'en',
    value: 'or'
  }
];

export const REGISTER_FORM_LABEL = [
  {
    lang: 'uk',
    value: 'Реєстрація'
  },
  {
    lang: 'en',
    value: 'Register'
  }
];

export const EMPTY_FIELD = [
  {
    lang: 'uk',
    value: 'Заповніть поле'
  },
  {
    lang: 'en',
    value: 'Empty field'
  }
];

export const LOGIN_USER_ERROR = {
  WRONG_CREDENTIALS: [
    {
      lang: 'uk',
      value: 'Неправильна електронна адреса або пароль'
    },
    {
      lang: 'en',
      value: 'Wrong e-mail address or password'
    }
  ],
  INPUT_NOT_VALID: [
    {
      lang: 'uk',
      value: 'Ви ввели невірні дані'
    },
    {
      lang: 'en',
      value: 'You have typed wrong data'
    }
  ],
  DEFAULT_ERROR: [
    {
      lang: 'uk',
      value: 'Ой! Щось пішло не так. Спробуйте будь ласка пізніше.'
    },
    {
      lang: 'en',
      value: 'Oops! Something went wrong. Please, try again later.'
    }
  ]
};

export const REGISTER_USER_ERROR = {
  USER_ALREADY_EXIST: [
    {
      lang: 'uk',
      value: 'Користувач за вказаним емейлом вже існує'
    },
    {
      lang: 'en',
      value: 'User with given email already exists'
    }
  ],
  INPUT_NOT_VALID: [
    {
      lang: 'uk',
      value: 'Невірно введені дані'
    },
    {
      lang: 'en',
      value: 'Wrong input data'
    }
  ]
};

export const errorMessages = [
  {
    lang: 'uk',
    value: {
      firstname: 'Поле повинно містити від 2 до 30 символів',
      lastname: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат, ',
      password: 'Від 6 до 30 символів з однією великою літерою та цифрою',
      confirmPassword: 'Паролі не співпадають'
    }
  },
  {
    lang: 'en',
    value: {
      firstname: 'Field should contain from 2 to 30 characters',
      lastname: 'Field should contain from 2 to 30 characters',
      email: `Wrong email address, `,
      password: 'From 6 to 30 characters with one capital letter and one digit',
      confirmPassword: 'Passwords do not match'
    }
  }
];

export const placeholders = {
  firstName: [
    {
      lang: 'uk',
      value: "Введіть Ім'я"
    },
    {
      lang: 'en',
      value: 'Enter firstname'
    }
  ],
  lastName: [
    {
      lang: 'uk',
      value: 'Введіть прізвище'
    },
    {
      lang: 'en',
      value: 'Enter lastname'
    }
  ],
  email: [
    {
      lang: 'uk',
      value: 'Введіть емейл'
    },
    {
      lang: 'en',
      value: 'Enter email'
    }
  ],
  password: [
    {
      lang: 'uk',
      value: 'Введіть пароль'
    },
    {
      lang: 'en',
      value: 'Enter password'
    }
  ],
  confirmPassword: [
    {
      lang: 'uk',
      value: 'Підтвердіть пароль'
    },
    {
      lang: 'en',
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
    lang: 'en',
    value: 'Forgot password?'
  }
];

export const REGISTER_PROPOSAL = [
  {
    lang: 'uk',
    value: 'Реєстрація'
  },
  {
    lang: 'en',
    value: 'Registration'
  }
];

export const WELCOME_MESSAGE = [
  {
    lang: 'uk',
    h2: 'Вітаємо',
    h3: 'Реєстрація пройшла успішно!',
    button_1: 'В магазин',
    button_2: 'Увійти'
  },
  {
    lang: 'en',
    h2: 'Welcome',
    h3: 'Registration was successful!',
    button_1: 'Go to shop',
    button_2: 'Log in'
  }
];

export const CONFIRM_ERROR = [
  {
    lang: 'uk',
    value: 'Ой! Щось пішло не так.'
  },
  {
    lang: 'en',
    value: 'Oops! Something went wrong.'
  }
];

export const RECOVERY_MESSAGES = [
  {
    lang: 'uk',
    h2: 'Відновлення паролю',
    label: 'Електронна адреса',
    p_1:
      'Вкажіть свою електронну пошту для скидання паролю і ми надішлемо інструкції для відновлення.',
    button: 'Відправити'
  },
  {
    lang: 'en',
    h2: 'Password recovery',
    label: 'E-mail  ',
    p_1:
      'Specify your e-mail to reset the password and we will send recovery instructions.',
    button: 'Send'
  }
];

export const RECOVERY_SUCCESS_MESSAGE = [
  {
    lang: 'uk',
    h2: 'Успішно!',
    p: 'Будь ласка виконайте інструкції у листі, який ми вам надіслали.'
  },
  {
    lang: 'en',
    h2: 'Success!',
    p: 'Please follow the instructions in the message, we have just sent you.'
  }
];

export const RECOVERY_ERROR_MESSAGE = {
  USER_NOT_FOUND: [
    {
      lang: 'uk',
      value: 'Користувача з даним емейлом не знайдено'
    },
    {
      lang: 'en',
      value: 'User with given e-mail address is not found'
    }
  ],
  EMAIL_ERROR: [
    {
      lang: 'uk',
      value: 'Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      lang: 'en',
      value: 'Please, reload your page and try again.'
    }
  ]
};

export const CHANGE_PASSWORD = [
  {
    lang: 'uk',
    h2: 'Введіть новий пароль',
    pass_label: 'Новий пароль',
    confirm_label: 'Підтвердіть пароль',
    button: 'Змінити'
  },
  {
    lang: 'en',
    h2: 'Enter new password',
    pass_label: 'New password',
    confirm_label: 'Confirm password',
    button: 'Change'
  }
];

export const NEW_PASSWORD_ERROR = {
  USER_NOT_FOUND: [
    {
      lang: 'uk',
      value: 'Користувача не знайдено'
    },
    {
      lang: 'en',
      value: 'User is not found'
    }
  ],
  DEFAULT_ERROR: [
    {
      lang: 'uk',
      value:
        'Відбулась помилка! Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      lang: 'en',
      value: 'An error occurred! Please, reload your page and try again.'
    }
  ]
};

export const NEW_PASSWORD_SUCCESS_MESSAGE = [
  {
    lang: 'uk',
    h2: 'Ваш пароль успішно змінено!',
    p: 'Вас буде спрямовано на сторінку логінування'
  },
  {
    lang: 'en',
    h2: 'Your password is successfully changed!',
    p: 'You will be directed to login page'
  }
];
