import { sendOrderToEmail } from '../../../../redux/order/order.operations';

export const order = {
  _id: '619eb12f3c53565320f384c6',
  orderNumber: '1637789999938',
  recipient: {
    firstName: 'John',
    lastName: 'Dou',
    phoneNumber: '380934850648'
  },
  delivery: {
    byCourier: false,
    sentBy: 'NOVAPOST',
    courierOffice: 'Test office',
    city: 'Test city',
    street: 'Test street',
    house: '1'
  }
};

export const mocks = [
  {
    request: {
      query: sendOrderToEmail,
      variables: {
        data: {
          paidOrderNumber: '1648386022767',
          language: 1
        }
      }
    },
    result: {
      data: {
        sendOrderToEmail: {
          recipient: {
            firstName: 'Sashko',
            lastName: 'Horondi',
            email: 'sashkohorondi@gmail.com',
            phoneNumber: '987898789'
          },
          status: 'CREATED',
          paymentMethod: 'CARD',
          isPaid: false,
          paymentStatus: 'PAID',
          _id: '62405fe6f3d8f938a06f4138',
          delivery: {
            sentBy: 'SELFPICKUP',
            byCourier: false
          },
          items: [
            {
              isFromConstructor: false,
              product: '60588c204b419a0ec128e4bc',
              quantity: 1
            }
          ],
          user_id: '618a3d5553c0ee0025ca918e',
          totalItemsPrice: 77,
          totalPriceToPay: 77,
          orderNumber: '1648386022767',
          dateOfCreation: '2022-03-27T13:00:22.774Z',
          lastUpdatedDate: '2022-03-27T13:00:22.774Z'
        }
      }
    }
  }
];

export const state = {
  isLightTheme: true,
  language: 1,
  loading: false,
  shouldClearCart: false,
  currency: 0,
  order,
  user: {}
};
