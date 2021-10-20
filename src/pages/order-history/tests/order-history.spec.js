import React from 'react';
import { useQuery } from '@apollo/client';
import OrderHistory from '../order-history';

jest.mock('../../order-history/order-history.styles', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({}));

describe('OrderHistory component', () => {
  it('should render', () => {
    shallow(<OrderHistory />);
  });
});
