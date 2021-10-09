import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceFilter from '../product-list-filter/price-filter/price-filter';

const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);

useSelector.mockImplementation(() => ({
  filters: [],
  language: 0,
  currency: 0,
  maxPrice: 0,
  minPrice: 0
}));

describe('PriceFilter component tests', () => {
  it('Should render PriceFilter', () => {
    const component = shallow(<PriceFilter />);
    expect(component).toBeDefined();
  });
});
