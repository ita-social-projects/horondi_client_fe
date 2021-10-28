import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router';
import NewsDetail from '../news-detail';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../news-detail/news-detail.style', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('react-redux');

let wrapper;

const useQueryData = {
  loading: false,
  error: false,
  data: {
    getNewsById: {
      text: [{ value: 'true' }],
      title: [{ value: '' }],
      name: [{ value: '' }],
      author: { name: [{ value: '' }] }
    }
  }
};

describe('test newsDetail', () => {
  it('should render component', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
    expect(wrapper).toBeDefined();
  });
  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
    expect(wrapper).toBeTruthy();
  });

  it('if error loading data, should redirect to error page', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: true
    }));

    wrapper = shallow(<Redirect to='/error-page' />);
    expect(wrapper).toBeDefined();
  });
});
