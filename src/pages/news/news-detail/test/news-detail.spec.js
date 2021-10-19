import React from 'react';
import { shallow } from 'enzyme';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import NewsDetail from '../news-detail';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getNewsById: {} }
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ language: 0 })
}));

jest.mock('@apollo/client');

describe('', () => {
  it('', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<NewsDetail />);
  });

  it('', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsDetail />);
  });
});
