import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductListItem from '../product-list-item/product-list-item';

const dispatch = jest.fn();
jest.mock('react-redux');
useDispatch.mockImplementation(() => dispatch);

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useSelector.mockImplementation(() => ({
  language: 0,
  currency: 0,
  isLightTheme: true
}));

describe('ProductListItem component tests', () => {
  it('Should render ProductListItem', () => {
    const component = shallow(<ProductListItem />);
    expect(component).toBeDefined();
  });
});
