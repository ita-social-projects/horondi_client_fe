import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import CategoriesList from '../categories-list';

jest.mock('react-redux');
jest.mock('@apollo/client');

useSelector.mockImplementation(() => ({
  language: 0,
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false,
  data: {}
}));

const wrapper = shallow(<CategoriesList />);

describe('tests for categories list', () => {
  it('category list should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
