import React from 'react';
import { useQuery } from '@apollo/client';
import OrderHistory from '../order-history';

jest.mock('../../order-history/order-history.styles', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({}));

describe('OrderHistory component', () => {
  const wrapper = shallow(<OrderHistory />);
  it('should render', () => {
    expect(wrapper).toBeDefined();
  });
});
