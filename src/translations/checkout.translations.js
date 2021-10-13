export const CHECKOUT_TITLES = {
  0: {
    orderForm: 'Форма замовлення',
    deliveryPrice: 'Ціна доставки',
    UAH: 'грн',
    USD: 'долл',
    region: 'Регіон',
    orderNumber: 'Замовлення № ',
    deliveryAddress: 'Адреса доставки'
  },
  1: {
    orderForm: 'Order form',
    deliveryPrice: 'Delivery price',
    UAH: 'UAH',
    USD: 'USD',
    region: 'Region',
    orderNumber: 'Order № ',
    deliveryAddress: 'Delivery Address'
  }
};

export const CHECKOUT_TEXT_FIELDS = {
  0: {
    firstName: "Ім'я *",
    lastName: 'Прізвище *',
    email: 'Email *',
    contactPhoneNumber: 'Номер телефону *',
    city: 'Місто *',
    house: 'Будинок *',
    street: 'Вулиця *',
    flat: 'Квартира ',
    orderComment: 'Коментар до замовлення...',
    deliveryType: 'Виберіть тип доставки',
    department: 'Відділення *',
    delivery: 'Тип доставки',
    total: 'Загальна сума',
    region: 'Область *',
    district: 'Район '
  },
  1: {
    firstName: 'First name *',
    lastName: 'Last name *',
    email: 'Email *',
    contactPhoneNumber: 'Phone *',
    city: 'City *',
    house: 'Building *',
    street: 'Street *',
    flat: 'Apartment ',
    orderComment: 'Order comment...',
    deliveryType: 'Select a delivery type',
    department: 'Department *',
    delivery: 'Delivery type',
    total: 'Total',
    region: 'Region *',
    district: 'District *'
  }
};
export const CHECKOUT_BUTTON = {
  0: {
    createOrder: 'Створити замовлення',
    payOrder: 'Перейти до оплати',
    confirmOrder: 'Підтвердити замовлення',
    cancel: 'Скасувати'
  },
  1: {
    createOrder: 'Create order',
    payOrder: 'Pay',
    confirmOrder: 'Confirm order',
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
    noOneCity: 'Жодного міста не знайдено',
    noOneDepartment: 'Жодного відділення не знайдено',
    noOneRegion: 'Жодної області не знайдено',
    noOneDistrict: 'Жодного району не знайдено'
  },
  1: {
    noOneCity: 'City not found',
    noOneDepartment: 'Department not found',
    noOneRegion: 'Region not found',
    noOneDistrict: 'District not found'
  }
};
export const CHECKOUT_ERROR = {
  0: {
    requiredField: 'Поле не повинне бути порожнім',
    firstName: 'Поле повинно містити від 2 до 30 символів',
    lastName: 'Поле повинно містити від 2 до 30 символів',
    email: 'Некоректний формат електронної пошти ',
    phoneNumber: 'Некоректний формат номеру телефону',
    userComment: 'Поле повинно містити від 2 до 500 символів',
    city: 'Поле повинно містити від 2 до 50 символів',
    street: 'Поле повинно містити від 2 до 100 символів',
    house: 'Мінімальне значення не повинно бути меншим 1 символу',
    flat: 'Мінімальне значення не повинно бути меншим 1 символу',
    onlyLetter: 'Поле повинно містити лише літери'
  },
  1: {
    requiredField: 'Field should not to be empty',
    firstName: 'Field should contain from 2 to 30 characters',
    lastName: 'Field should contain from 2 to 30 characters',
    email: `Incorrect email format`,
    phoneNumber: 'Incorrect phone number format',
    userComment: 'Field should contain from 2 to 500 characters',
    city: 'Field should contain from 2 to 50 characters',
    street: 'Field should contain from 2 to 100 characters',
    house: 'Min value is 1 character',
    flat: 'Min value is 1 character',
    onlyLetter: 'Field should contain only letters'
  }
};
