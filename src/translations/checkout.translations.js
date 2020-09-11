export const CHECKOUT_TITLES = {
  0: {
    orderForm: 'Форма замовлення',
    contactInfo: 'Контактна інформація',
    delivery: 'Доставка',
    payment: 'Оплата'
  },
  1: {
    orderForm: 'Order form',
    contactInfo: 'Contact information',
    delivery: 'Delivery',
    payment: 'Payment'
  }
};

export const CHECKOUT_TEXT_FIELDS = {
  0: {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    email: 'Email',
    contactPhoneNumber: 'Номер телефону',
    city: 'Місто',
    building: 'Будинок',
    street: 'Вулиця',
    apartment: 'Квартира',
    orderComment: 'Коментар до замовлення...'
  },
  1: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    contactPhoneNumber: 'Contact phone number',
    city: 'City',
    building: 'Building',
    street: 'Street',
    apartment: 'Apartment',
    orderComment: 'Order comment...'
  }
};

export const CHECKOUT_DROP_LIST = {
  0: {
    deliveryType: 'Тип доставки',
    paymentMethod: 'Метод оплати',
    department: 'Відділення'
  },
  1: {
    deliveryType: 'Delivery type',
    paymentMethod: 'Payment method',
    department: 'Department'
  }
};

export const CHECKOUT_DELIVERY_TYPES = {
  0: {
    selfPickUP: 'Самовивіз',
    novaPoshta: 'Нова пошта',
    ukrPoshta: 'Укрпошта',
    currierNovaPoshta: "Кур'єр Нової пошти"
  },
  1: {
    selfPickUP: 'Self pick-up',
    novaPoshta: 'Nova poshta',
    ukrPoshta: 'Ukrposhta',
    currierNovaPoshta: 'Currier from Nova poshta'
  }
};

export const CHECKOUT_BUTTON = {
  0: {
    createOrder: 'Створити замовлення'
  },
  1: {
    createOrder: 'Create order'
  }
};
export const CHECKOUT_PAYMENT = {
  0: {
    cart: 'Картою',
    cash: 'Готівкою'
  },
  1: {
    cart: 'Cart',
    cash: 'Cash'
  }
};

export const CHECKOUT_ADDITIONAL_INFORMATION = {
  0: {
    additionalInfo:
      '* Замовлення буде відправлено протягом десяти робочих днів.'
  },
  1: {
    additionalInfo: '* Order will be shipped within 10 business days.'
  }
};

export const errorMessages = [
  {
    value: {
      firstname: 'Поле повинно містити від 2 до 30 символів',
      lastname: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат, електронної пошти ',
      phoneNumber: 'Некоректний формат номеру телефону'
    }
  },
  {
    value: {
      firstname: 'Field should contain from 2 to 30 characters',
      lastname: 'Field should contain from 2 to 30 characters',
      email: `Incorrect email format`,
      phoneNumber: 'Incorrect phone number format'
    }
  }
];
