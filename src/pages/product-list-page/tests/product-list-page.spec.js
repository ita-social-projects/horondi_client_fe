import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from '../product-list-page';

const dispatch = jest.fn();
const state = {
  filterData: {},
  sortByPrice: 0,
  sortByRate: 0,
  pagesCount: 1,
  filterMenuStatus: false,
  loading: false,
  language: 0,
  products: [
    {
      _id: '1'
    }
  ],
  sortByPopularity: -1,
  countPerPage: 9,
  currentPage: 1,
  filterStatus: false
};
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
jest.mock('react-redux');

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  state
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<ProductListPage />);
    expect(component).toBeDefined();
  });
});
