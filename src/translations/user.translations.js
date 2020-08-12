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

export const LOGIN_USER_ERROR = {
  WRONG_CREDENTIALS: [
    {
      lang: 'uk',
      value: 'Неправильна електронна адреса або пароль'
    },
    {
      lang: 'eng',
      value: 'Wrong e-mail address or password'
    }
  ],
  INPUT_NOT_VALID: [
    {
      lang: 'uk',
      value: 'Ви ввели невірні дані'
    },
    {
      lang: 'eng',
      value: 'You have typed wrong data'
    }
  ]
};

export const REGISTER_USER_ERROR = {
  USER_ALREADY_EXIST: [
    {
      value: 'Користувач за вказаним емейлом вже існує'
    },
    {
      value: 'User with given email already exists'
    }
  ],
  INPUT_NOT_VALID: [
    {
      value: 'Невірно введені дані'
    },
    {
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
    lang: 'eng',
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
    button_1: 'В магазин',
    button_2: 'Увійти'
  },
  {
    h2: 'Welcome',
    h3: 'Registration was successful!',
    button_1: 'Go to shop',
    button_2: 'Log in'
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

export const RECOVERY_MESSAGES = [
  {
    h2: 'Відновлення паролю',
    label: 'Електронна адреса',
    p_1:
      'Вкажіть свою електронну пошту для скидання паролю і ми надішлемо інструкції для відновлення.',
    button: 'Відправити'
  },
  {
    h2: 'Password recovery',
    label: 'E-mail  ',
    p_1:
      'Specify your e-mail to reset the password and we will send recovery instructions.',
    button: 'Send'
  }
];

export const RECOVERY_SUCCESS_MESSAGE = [
  {
    h2: 'Успішно!',
    p: 'Будь ласка виконайте інструкції у листі, який ми вам надіслали.'
  },
  {
    h2: 'Success!',
    p: 'Please follow the instructions in the message, we have just sent you.'
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
  DEFAULT_ERROR: [
    {
      value:
        'Відбулась помилка! Будь ласка перезавантажте сторінку та спробуйте ще раз.'
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
