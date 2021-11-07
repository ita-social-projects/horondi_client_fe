import React from 'react';
import { useQuery } from '@apollo/client';
import NewsPage from '../news-page';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../news-page/news-page.style', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('react-redux');

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

describe('Test newsPage', () => {
  it('should find children tag', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    wrapper = shallow(<NewsPage />);
    expect(wrapper.find('h1').props().children).toEqual('Новини');
  });

  it('should render component when Loading true', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsPage />);
    expect(wrapper).toBeTruthy();
  });
});
