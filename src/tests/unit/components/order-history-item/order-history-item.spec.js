import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import OrderHistoryItem from '../../../../containers/orders/order-history/order-history-item/order-history-item.js';

jest.mock('react-redux');
jest.mock(
  '../../../../containers/orders/order-history/order-history-item/order-history-item.styles.js',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('../../../../utils/date', () => ({
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
        bottomMaterial: {
          material: {
            name: [
              {
                lang: 'ua',
                value: 'Шкірзамінник'
              },
              {
                lang: 'en',
                value: 'Leatherette'
              }
            ]
          }
        },
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
  currency: 1
}));

describe('OrderHistoryOrder component tests', () => {
  it('Should render OrderHistoryOrder', () => {
    const component = shallow(<OrderHistoryItem order={order} />);
    expect(component).toBeDefined();
  });
  it('renders delivery status, order number and common price', () => {
    render(<OrderHistoryItem order={order} />);
    screen.debug();
    expect(screen.getByText(/created/i)).toBeInTheDocument();
    expect(screen.getByText(/1634215702438/)).toBeInTheDocument();
    expect(screen.getAllByText(/total/i).length).toBe(2);
  });
});
