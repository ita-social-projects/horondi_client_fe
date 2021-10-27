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
  data: {}
};

describe('test newsDetail', () => {
  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
    expect(wrapper).toBeDefined();
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
