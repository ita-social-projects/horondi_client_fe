import React from 'react';
import ProductsFiltersContainer from '../products-filters-container';

jest.mock('../products-filters-container.styles.js', () => ({
  useStyles: () => ({})
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
