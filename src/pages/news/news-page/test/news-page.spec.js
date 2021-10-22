import React from 'react';
import { shallow } from 'enzyme';
import { useQuery } from '@apollo/client';
import NewsPage from '../news-page';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ language: 0 })
}));

jest.mock('@apollo/client');

describe('Test newsPage', () => {
  it('should cover branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    wrapper = shallow(<NewsPage />);
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));
    wrapper = shallow(<NewsPage />);
  });
});
