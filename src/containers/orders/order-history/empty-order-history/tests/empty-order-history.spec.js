import React from 'react';
import EmptyOrderHistory from '../empty-order-history';

jest.mock('react-redux');

describe('EmptyOrderHistory component tests', () => {
  it('Should render EmptyOrderHistory', () => {
    const component = shallow(<EmptyOrderHistory />);
    expect(component).toBeDefined();
  });
});
