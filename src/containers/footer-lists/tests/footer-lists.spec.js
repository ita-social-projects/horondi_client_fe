import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FooterLists from '../footer-lists';
import CategoriesContextProvider from '../../../context/categories-context';

const useState = jest.fn();
const setState = jest.fn();

jest.mock('../footer-lists.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('@apollo/client');

useState.mockImplementation(() => [[], setState]);

useSelector.mockImplementation(() => ({
  language: 0,
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false
}));

describe('tests for footer lists', () => {
  const wrapper = mount(
    <BrowserRouter>
      <CategoriesContextProvider>
        <FooterLists />
      </CategoriesContextProvider>
    </BrowserRouter>
  );

  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });
});
