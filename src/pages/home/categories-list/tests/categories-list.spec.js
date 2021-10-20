import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import CategoriesList from '../categories-list';
import CategoriesContextProvider from '../../../../context/categories-context';

jest.mock('../categories-list.style', () => ({ useStyles: () => ({}) }));
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

describe('tests for categories list', () => {
  const wrapper = shallow(
    <CategoriesContextProvider>
      <CategoriesList />
    </CategoriesContextProvider>
  );
  it('category list should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
