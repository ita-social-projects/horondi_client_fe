import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import ProductListPage from '../product-list-page';

jest.mock('react-redux');
jest.mock('../product-list-page.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: 10 }),
  useHistory: () => jest.fn()
}));

const filters = {
  modelsFilter: [],
  categoryFilter: [],
  colorsFilter: [],
  patternsFilter: [],
  isHotItemFilter: false
};

useSelector.mockImplementation(() => ({
  filterMenuStatus: true,
  loading: true,
  language: 0,
  products: [],
  pagesCount: 1,
  sortByRate: 0,
  sortByPrice: 0,
  filters,
  filterData: {},
  sortByPopularity: -1,
  countPerPage: 9,
  currentPage: 1,
  currency: 0,
  filterStatus: true
}));

describe('ProductListPage component tests', () => {
  it('Should render ProductListPage', () => {
    useQuery.mockImplementation(() => ({ refetch: () => null, loading: false, error: false }));

    const component = mount(<ProductListPage width='sm' />);

    expect(component).toBeDefined();
  });

  it('Should cover other branches', () => {
    useQuery.mockImplementation(() => ({ refetch: () => null, loading: true, error: false }));

    const component = mount(<ProductListPage width='sm' />);

    expect(component).toBeDefined();
  });
});
