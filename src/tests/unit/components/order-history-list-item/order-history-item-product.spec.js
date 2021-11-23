import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderHistoryItemProduct from '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product';

jest.mock(
  '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product.styles',
  () => ({
    useStyles: () => ({})
  })
);
const item = {
  quantity: 1,
  fixedPrice: [
    {
      currency: 'UAH',
      value: 2050
    }
  ],
  options: {
    size: {
      name: 'S'
    }
  },
  product: {
    _id: '1',
    name: [
      {
        lang: 'ua',
        value: 'Роллтоп жовтий'
      },
      {
        lang: 'en',
        value: 'Rolltop yellow'
      }
    ],
    images: {
      primary: {
        thumbnail: 'thumbnail_4051pm10kty4jeer_19.png'
      }
    },
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
    }
  }
};

describe('OrderHistoryOrderItem component tests', () => {
  it('Should render OrderHistoryOrderItem', () => {
    const component = shallow(<OrderHistoryItemProduct item={item} currency={0} language={0} />);
    expect(component).toBeDefined();
  });
  it('renders 6 cells in a row', () => {
    render(<OrderHistoryItemProduct item={item} currency={0} language={0} />);
    const cells = document.querySelectorAll('td');
    expect(cells.length).toBe(6);
  });
  it('renders <img/>', () => {
    render(<OrderHistoryItemProduct item={item} currency={0} language={0} />);
    const img = document.querySelector('img');
    expect(img).toBeTruthy();
  });
  it('product name is displayed in component', () => {
    render(<OrderHistoryItemProduct item={item} currency={0} language={0} />);
    expect(screen.getByText(/роллтоп жовтий/i)).toBeInTheDocument();
  });
});
