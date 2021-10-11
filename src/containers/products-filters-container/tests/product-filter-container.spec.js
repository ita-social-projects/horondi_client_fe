import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsFiltersContainer from '../products-filters-container';
import { testData } from './product-filter-container.variables';

jest.mock('../products-filters-container.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
// useLocation;
useSelector.mockImplementation(() => ({
  language: 0
}));
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn().mockImplementation(() => ({
    pathname: '/testroute'
  }))
}));

describe('ProductsFiltersContainer component tests', () => {
  it('Should render ProductsFiltersContainer', () => {
    const component = shallow(
      <ProductsFiltersContainer
        productFilter=''
        list={[]}
        categories=''
        filterHandler=''
        clearFilter=''
        filterName=''
        filterAction=''
        labels={[]}
      />
    );
    expect(component).toBeDefined();
  });
});
