import React from 'react';
import { useSelector } from 'react-redux';
import OrderHistoryOrder from '../order-history-order.js';

jest.mock('react-redux');
jest.mock('../order-history-order.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../../utils/date', () => ({
  getFormatDate: () => {}
}));
const order = {
  _id: '61682716c834282f74bf505d',
  dateOfCreation: '1634215702441',
  status: 'CREATED',
  orderNumber: '1634215702438',
  items: [
    {
      quantity: 1,
      fixedPrice: [
        { currency: 'UAH', value: 1950 },
        { currency: 'USD', value: 74 }
      ],
      options: { size: { name: 'S' } },
      product: {
        name: [
          { lang: 'ua', value: 'Роллтоп синій' },
          { lang: 'en', value: 'Rolltop blue' }
        ],
        model: { sizes: [{ name: 'L' }, { name: 'M' }, { name: 'S' }] },
        images: { primary: { thumbnail: 'thumbnail_4051pm10kty4dhv5_37.png' } }
      }
    }
  ],
  totalItemsPrice: [
    { value: 1950, currency: 'UAH' },
    { value: 74, currency: 'USD' }
  ]
};

useSelector.mockImplementation(() => ({
  currency: 1,
  language: 0
}));

describe('OrderHistoryOrder component tests', () => {
  it('Should render OrderHistoryOrder', () => {
    const component = shallow(<OrderHistoryOrder order={order} />);
    expect(component).toBeDefined();
  });
});
