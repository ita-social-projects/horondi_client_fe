import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import ProductListFilter from '../product-list-filter/product-list-filter';

jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
jest.mock('../../../hooks/use-product-filters', () => ({
  __esModule: true,
  default: () => ({})
}));

useSelector.mockImplementation(() => ({
  language: 0,
  filters: { categoryFilter: {}, patternsFilter: {}, modelsFilter: {} },
  filterData: { categories: {}, models: {}, patterns: {} }
}));

describe('ProductListFilter component tests', () => {
  it('Should render ProductListFilter', () => {
    useQuery.mockImplementation(() => ({ loading: false, error: false }));

    const component = shallow(<ProductListFilter />);

    expect(component).toBeDefined();
  });

  it('Should cover other branches', () => {
    useQuery.mockImplementation(() => ({ loading: true, error: false }));

    const component = shallow(<ProductListFilter />);

    expect(component).toBeDefined();
  });
});
