import React from 'react';
import OrderHistory from '../order-history';

jest.mock('../../order-history/order-history.styles', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({ loading: false, error: null, data: { getUserOrders: {} } })
}));

describe('OrderHistory component', () => {
  const wrapper = shallow(<OrderHistory />);
  it('should render component', () => {
    expect(wrapper).toBeDefined();
  });
});
