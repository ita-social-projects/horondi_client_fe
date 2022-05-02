import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import CategoriesList, {
  getCategoryURL
} from '../../../../../pages/home/categories-list/categories-list';
import { mockCategory, etalonString } from './categories-list.variables';
import CategoriesContextProvider from '../../../../../context/categories/categories-context';

const useState = jest.fn();
const setState = jest.fn();

jest.mock('../../../../../pages/home/categories-list/categories-list.style', () => ({
  useStyles: () => ({})
}));
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
    const title = screen.getByRole('heading', { level: 2 });
    const list = screen.getByRole('list');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('getCategoryURL function should return correct string', () => {
    const res = getCategoryURL(mockCategory);

    expect(res).toBe(etalonString);
  });
});
