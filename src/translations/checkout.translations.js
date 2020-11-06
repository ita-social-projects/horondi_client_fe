export const CHECKOUT_TITLES = {
  0: {
    orderForm: 'Форма замовлення',
    contactInfo: 'Контактна інформація',
    delivery: 'Доставка',
    payment: 'Оплата',
    deliveryPrice: 'Ціна доставки',
    totalPrice: 'Всього',
    schedule: 'Графік роботи:',
    mondayToFriday: 'Пн-пт:  ',
    saturday: 'Сб:  ',
    sunday: 'Нд:  ',
    UAH: 'UAH',
    region: 'Регіон'
  },
  1: {
    orderForm: 'Order form',
    contactInfo: 'Contact information',
    delivery: 'Delivery',
    payment: 'Payment',
    deliveryPrice: 'Delivery price',
    totalPrice: 'Total price',
    schedule: 'Schedule:',
    mondayToFriday: 'Mon-Fri',
    saturday: 'Sat',
    sunday: 'Sun',
    UAH: 'UAH',
    region: 'Region'
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
    orderComment: 'Коментар до замовлення...',
    paymentMethod: 'Виберіть метод оплати',
    deliveryType: 'Виберіть тип доставки',
    department: 'Відділення',
    delivery: 'Тип доставки',
    total: 'Загальна сума'
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
    orderComment: 'Order comment...',
    paymentMethod: 'Choose a payment method',
    deliveryType: 'Select a delivery type',
    department: 'Department',
    delivery: 'Delivery type',
    total: 'Total'
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
    courierNovaPoshta: "Кур'єр Нової пошти"
  },
  1: {
    selfPickUP: 'Self pick-up',
    novaPoshta: 'Nova poshta',
    ukrPoshta: 'Ukrposhta',
    courierNovaPoshta: 'Courier from Nova poshta'
  }
};

export const CHECKOUT_BUTTON = {
  0: {
    createOrder: 'Створити замовлення',
    pay: 'Оплатити',
    confirm: 'Підтвердити',
    cancel: 'Скасувати'
  },
  1: {
    createOrder: 'Create order',
    pay: 'Pay',
    confirm: 'Confirm',
    cancel: 'Cancel'
  }
};
export const CHECKOUT_PAYMENT = {
  0: {
    card: 'Картою',
    cash: 'Готівкою'
  },
  1: {
    card: 'Card',
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

export const CHECKOUT_ERROR = {
  0: {
    firstName: 'Поле повинно містити від 2 до 30 символів',
    lastName: 'Поле повинно містити від 2 до 30 символів',
    email: 'Некоректний формат, електронної пошти ',
    phoneNumber: 'Некоректний формат номеру телефону'
  },
  1: {
    firstName: 'Field should contain from 2 to 30 characters',
    lastName: 'Field should contain from 2 to 30 characters',
    email: `Incorrect email format`,
    phoneNumber: 'Incorrect phone number format'
  }
};
