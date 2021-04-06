export const orderExample = {
  _id: 1,
  orderNumber: 234,
  status: 'CREATED',
  user: {},
  dateOfCreation: '12.05.2021',
  lastUpdatedDate: '05.07.2021',
  userComment: 'please send in the box',
  cancellationReason: 'not my size',
  delivery: {},
  items: [{}],
  totalItemsPrice: [{}],
  totalPriceToPay: [{}],
  isPaid: true,
  paymentMethod: 'CARD',
  paymentStatus: 'CREATED'
};

export const paidOrder = {
  ...orderExample,
  paymentStatus: 'PAID'
};

export const payload = {
  currency: 'UAH',
  amount: 34,
  order: {
    user: {
      firstName: 'ANDRIY',
      lastName: 'LYMYCH',
      email: 'fff@gmail.com',
      phoneNumber: '380734458934'
    },
    delivery: {
      sentBy: 'self-pickup',
      invoiceNumber: '',
      courierOffice: '',
      region: 'lvivska',
      district: 'shevchenkivskyi',
      regionId: 1,
      districtId: 1,
      cityId: 2,
      city: 'lviv',
      street: 'kozatska',
      house: 45,
      flat: 8,
      byCourier: false
    },
    items: [
      {
        product: '',
        quantity: 2,
        isFromConstructor: '',
        options: {
          size: ''
        }
      }
    ],
    paymentMethod: 'CARD',
    userComment: 'send without box'
  }
};
