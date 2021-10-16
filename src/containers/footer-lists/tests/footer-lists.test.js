import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import FooterLists from '../footer-lists';

jest.mock('react-redux');
jest.mock('@apollo/client');

useSelector.mockImplementation(() => ({
  language: 0,
  contacts: [],
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false,
  data: {}
}));

const wrapper = shallow(<FooterLists />);

describe('tests for footer lists', () => {
  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });
});
