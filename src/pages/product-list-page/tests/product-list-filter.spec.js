import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListFilter from '../product-list-filter/product-list-filter';

const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);

useSelector.mockImplementation(() => ({
  language: 0,
  filters: { categoryFilter: {}, patternsFilter: {}, modelsFilter: {} },
  filterData: { categories: {}, models: {}, patterns: {} }
}));

describe('ProductListFilter component tests', () => {
  it('Should render ProductListFilter', () => {
    const component = shallow(<ProductListFilter />);
    expect(component).toBeDefined();
  });
});
