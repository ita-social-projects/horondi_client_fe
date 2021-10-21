import React from 'react';
import { useQuery } from '@apollo/client';
import NewsDetail from '../news-detail';

const useState = jest.fn();
const setState = jest.fn();

jest.mock('../../news-detail/news-detail.style', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('react-redux');

useState.mockImplementation(() => [[], setState]);

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

describe('test newsDetail', () => {
  it('', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
  });

  it('should cover', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
  });
});
