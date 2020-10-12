export const ORDER_TABLE_FIELDS = {
  0: {
    item: 'ПРОДУКТ',
    quantity: 'КІЛЬКІСТЬ',
    price: 'ЦІНА',
    size: 'Розмір',
    bagBottom: 'Дно рюкзака',
    sidePocket: 'Бокова кишеня',
    total: 'СУМА'
  },
  1: {
    item: 'PRODUCT',
    quantity: 'QUANTITY',
    price: 'PRICE',
    size: 'Size',
    bagBottom: 'Bag bottom',
    sidePocket: 'Side pocket',
    total: 'TOTAL'
  }
};

export const ORDER_HISTORY_TABLE_FIELDS = {
  0: {
    order: 'ЗАМОВЛЕННЯ',
    date: 'ДАТА',
    status: 'СТАТУС'
  },
  1: {
    order: 'ORDER',
    date: 'DATE',
    status: 'STATUS'
  }
};

export const ORDER_STATUSES = {
  CREATED: ['СТВОРЕНО', ''],
  CONFIRMED: ['Підтвердженно', 'CONFIRMED'],
  CANCELLED: ['СКАСОВАНО', 'CANCELLED'],
  REFUNDED: ['ПОВЕРНЕНО КОШТИ', 'REFUNDED'],
  SENT: ['НАДІСЛАНО', 'SENT'],
  DELIVERED: ['ДОСТАВЛЕНО', 'DELIVERED']
};

export const ORDER_HISTORY_LABELS = {
  0: {
    empty: 'Ваша історія замовлень пуста'
  },
  1: {
    empty: 'Your order history is empty'
  }
};

export const ORDER_BUTTON_TITLES = {
  0: {
    empty: 'Обрати зараз'
  },
  1: {
    empty: 'Shop now'
  }
};
