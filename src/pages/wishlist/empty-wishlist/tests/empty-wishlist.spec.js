import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography } from '@material-ui/core';
import EmptyWishlist from '../empty-wishlist';

jest.mock('react-redux');
jest.mock('../../../../services/local-storage.service');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [{}]
}));
jest.mock('../../../../context/theme-context', () => ({}));
jest.mock('../../../../containers/orders/order/empty-order/empty-order.styles', () => ({
  useStyles: () => ({})
}));
useDispatch.mockImplementation(() => jest.fn());
useSelector.mockImplementation(() => jest.fn());

let wrapper;

describe('Wishlist component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<EmptyWishlist />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render empty-wishlist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Empty-wishlist should contain title', () => {
    expect(wrapper.exists(Typography)).toBe(true);
  });

  it('Empty-wishlist should contain button', () => {
    expect(wrapper.exists(Button)).toBe(true);
  });
});
