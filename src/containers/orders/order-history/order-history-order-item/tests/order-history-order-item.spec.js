import React from 'react';
import OrderHistoryOrderItem from '../order-history-order-item';

jest.mock('../order-history-order-item.styles', () => ({
  useStyles: () => ({})
}));
const item = {
  props: {
    item: {
      fixedPrice: [{ currency: 'UAH', value: 1950 }],
      options: { size: { name: 'S' } },
      product: {
        name: [{ value: 'Роллтоп синій' }],
        images: { primary: { thumbnail: '' } }
      }
    }
  }
};

describe('OrderHistoryOrderItem component tests', () => {
  it('Should render OrderHistoryOrderItem', () => {
    const component = shallow(<OrderHistoryOrderItem item={item} currency={0} language={0} />);
    expect(component).toBeDefined();
  });
});
