import React from 'react';
import { useQuery } from '@apollo/client';
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

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [{ _id: [0], text: [''], title: [''], author: { name: '' } }, () => null]
}));

describe('test newsDetail', () => {
  it('should match snapshot', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
  });
});
