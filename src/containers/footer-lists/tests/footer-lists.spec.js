import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import FooterLists from '../footer-lists';
import CategoriesContextProvider from '../../../context/categories-context';

jest.mock('react-redux');
jest.mock('@apollo/client');

useSelector.mockImplementation(() => ({
  language: 0,
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false
}));

describe('tests for footer lists', () => {
  const wrapper = shallow(
    <CategoriesContextProvider>
      <FooterLists />
    </CategoriesContextProvider>
  );

  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });
});
