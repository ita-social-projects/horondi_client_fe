import React from 'react';
import { useQuery } from '@apollo/client';
import ProductListPage from '../product-list-page';

jest.mock('react-redux');
jest.mock('../product-list-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../product-list-filter/product-list-filter.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../count-per-page/count-per-page.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: 10 }),
  useHistory: () => jest.fn()
}));

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({ currency: 0 })
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
