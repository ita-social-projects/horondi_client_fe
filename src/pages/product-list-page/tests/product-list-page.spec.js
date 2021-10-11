import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from '../product-list-page';

const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('../product-list-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
const filters = {
  modelsFilter: [],
  categoryFilter: [],
  colorsFilter: [],
  patternsFilter: [],
  isHotItemFilter: false
};
useDispatch.mockImplementation(() => dispatch);
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
    const component = mount(<ProductListPage width='sm' />);
    expect(component).toBeDefined();
  });
});
