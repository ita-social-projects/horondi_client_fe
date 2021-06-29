export const ORDER_TABLE_FIELDS = {
  0: {
    item: 'Назва товару',
    quantity: 'Кількість',
    price: 'Ціна',
    size: 'Розмір',
    bagBottom: 'Дно рюкзака',
    sidePocket: 'Бокова кишеня',
    total: 'Підсумок',
    toPay: 'До сплати',
    photo: 'Фото',
    amountOfOrder: 'Сума замовлення'
  },
  1: {
    item: 'Product name',
    quantity: 'Quantity',
    price: 'Price',
    size: 'Size',
    bagBottom: 'Bag bottom',
    sidePocket: 'Side pocket',
    total: 'Total price',
    toPay: 'Total price to pay',
    photo: 'Photo',
    amountOfOrder: 'Order amount'
  }
};

export const ORDER_HISTORY_TABLE_FIELDS = {
  0: {
    order: 'ЗАМОВЛЕННЯ',
    date: 'ДАТА',
    status: 'СТАТУС',
    dated: 'від'
  },
  1: {
    order: 'ORDER',
    date: 'DATE',
    status: 'STATUS',
    dated: 'dated'
  }
};

export const ORDER_STATUSES = {
  CREATED: ['СТВОРЕНО', 'CREATED'],
  CONFIRMED: ['Підтвердженно', 'CONFIRMED'],
  CANCELLED: ['СКАСОВАНО', 'CANCELLED'],
  REFUNDED: ['ПОВЕРНЕНО КОШТИ', 'REFUNDED'],
  SENT: ['НАДІСЛАНО', 'SENT'],
  DELIVERED: ['ДОСТАВЛЕНО', 'DELIVERED'],
  PRODUCED: ['ВИГОТОВЛЕНО', 'PRODUCED']
};

export const ORDER_HISTORY_TITLES = {
  0: {
    empty: 'Ваша історія замовлень пуста',
    title: 'Історія замовлень'
  },
  1: {
    empty: 'Your order history is empty',
    title: 'Orders history'
  }
};

export const ORDER_BUTTON_TITLES = {
  0: {
    empty: 'Почати замовляти зараз'
  },
  1: {
    empty: 'Shop now'
  }
};
