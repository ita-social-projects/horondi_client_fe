import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import CategoriesList from '../categories-list';
import CategoriesContextProvider from '../../../../context/categories-context';

const useState = jest.fn();
const setState = jest.fn();

jest.mock('../categories-list.style', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('@apollo/client');

useState.mockImplementation(() => [[], setState]);

useSelector.mockImplementation(() => ({
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false
}));

describe('tests for categories list', () => {
  const wrapper = mount(
    <CategoriesContextProvider>
      <CategoriesList />
    </CategoriesContextProvider>
  );

  it('category list should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
