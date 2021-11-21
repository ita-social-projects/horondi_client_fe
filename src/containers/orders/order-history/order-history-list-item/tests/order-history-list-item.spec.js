import React from 'react';
import OrderHistoryItemProduct from '../order-history-item-product';

jest.mock('../order-history-order-item.styles', () => ({
  useStyles: () => ({})
}));
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
});
