import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import CategoriesList, { getCategoryURL } from '../categories-list';
import { mockCategory, mockCategoryUndefined } from './categories-list.variables';
import CategoriesContextProvider from '../../../../context/categories/categories-context';

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

describe('tests for categories list component', () => {
  beforeEach(() => {
    render(
      <CategoriesContextProvider>
        <CategoriesList />
      </CategoriesContextProvider>
    );
  });

  it('should exist with carousel wrapper', () => {
    const title = screen.getByRole('heading');
    const list = screen.getByRole('list');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('getCategoryURL function should return correct string', () => {
    const res = getCategoryURL(mockCategory);
    const etalonString = 'catalog/test';

    expect(res).toBe(etalonString);
  });

  it('getCategoryURL function should return undefined', () => {
    const res = getCategoryURL(mockCategoryUndefined);

    expect(res).toBeUndefined();
  });
});
