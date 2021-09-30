export const CHECKOUT_TITLES = {
  0: {
    address: 'Адреса:',
    addressHorondi: 'Львів, вул. Заводська,31',
    orderComment: 'Коментар до замовлення',
    checkoutTitle: 'Оплата та доставка',
    yourOrderTitle: 'Ваше замовлення',
    orderForm: 'Форма замовлення',
    contactInfo: 'Контактна інформація',
    delivery: 'Доставка',
    payment: 'Метод оплати',
    deliveryPrice: 'Ціна доставки',
    totalPrice: 'До сплати',
    schedule: 'Графік роботи:',
    workDay: '10:00 - 19:00',
    restDay: 'Вихідний',
    UAH: 'грн',
    USD: 'долл',
    region: 'Регіон',
    orderNumber: 'Замовлення № ',
    deliveryAddress: 'Адреса доставки'
  },
  1: {
    address: 'Address:',
    addressHorondi: 'Lviv, st. Zavodska,31',
    orderComment: 'Order comment',
    checkoutTitle: 'Payment and delivery',
    yourOrderTitle: 'Your order',
    orderForm: 'Order form',
    contactInfo: 'Contact information',
    delivery: 'Delivery',
    payment: 'Payment method',
    deliveryPrice: 'Delivery price',
    totalPrice: 'Total price',
    schedule: 'Schedule:',
    workDay: '10:00 - 19:00',
    restDay: 'Day off',
    UAH: 'UAH',
    USD: 'USD',
    region: 'Region',
    orderNumber: 'Order № ',
    deliveryAddress: 'Delivery address'
  }
};

export const SCHEDULE = {
  0: {
    monday: 'Пн:  ',
    tuesday: 'Вт:  ',
    wednesday: 'Ср:  ',
    thursday: 'Чт:  ',
    friday: 'Пт:  ',
    saturday: 'Сб:  ',
    sunday: 'Нд:  '
  },
  1: {
    monday: 'Mon:  ',
    tuesday: 'Tue:  ',
    wednesday: 'Wed:  ',
    thursday: 'Thu:  ',
    friday: 'Fri:  ',
    saturday: 'Sat:  ',
    sunday: 'Sun:  '
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
    paymentMethod: 'Виберіть метод оплати *',
    deliveryType: 'Виберіть тип доставки',
    department: 'Відділення *',
    delivery: 'Тип доставки',
    total: 'Загальна сума',
    region: 'Область *',
    district: 'Район *'
  },
  1: {
    firstName: 'First name *',
    lastName: 'Last name *',
    email: 'Email *',
    contactPhoneNumber: 'Contact phone number *',
    city: 'City *',
    house: 'Building *',
    street: 'Street *',
    flat: 'Apartment ',
    orderComment: 'Order comment...',
    paymentMethod: 'Choose a payment method *',
    deliveryType: 'Select a delivery type',
    department: 'Department *',
    delivery: 'Delivery type',
    total: 'Total',
    region: 'Region *',
    district: 'District *'
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
    novaPoshta: 'Нова Пошта',
    ukrPoshta: 'Укрпошта',
    courierNovaPoshta: "Новa Пошта кур'єр",
    courierUkrPoshta: "Укрпошта кур'єр"
  },
  1: {
    selfPickUP: 'Self pick-up',
    novaPoshta: 'Nova Poshta',
    ukrPoshta: 'Ukrposhta',
    courierNovaPoshta: 'Nova post courier',
    courierUkrPoshta: 'Ukrposhta courier'
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
    additionalInfo: '* Замовлення буде відправлено протягом десяти робочих днів.',
    noOneCity: 'Жодного міста не знайдено',
    noOneDepartment: 'Жодного відділення не знайдено',
    noOneRegion: 'Жодної області не знайдено',
    noOneDistrict: 'Жодного району не знайдено',
    consent: ['Підтверджуючи замовлення, я приймаю', ' угоду користувача']
  },
  1: {
    additionalInfo: '* Order will be shipped within 10 business days.',
    noOneCity: 'City not found',
    noOneDepartment: 'Department not found',
    noOneRegion: 'Region not found',
    noOneDistrict: 'District not found',
    consent: ['Making order you agree with', ' terms and conditions']
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

export const CHECKOUT_INPUT_FIELD = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phoneNumber: 'phoneNumber',
  city: 'city',
  street: 'street',
  house: 'house',
  flat: 'flat',
  userComment: 'userComment',
  paymentMethod: 'paymentMethod',
  courierOffice: 'courierOffice',
  region: 'region',
  district: 'district',
  regionId: 'regionId',
  districtId: 'districtId',
  cityId: 'cityId'
};
