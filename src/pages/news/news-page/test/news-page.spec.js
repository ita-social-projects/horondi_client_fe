import React from 'react';
import { useQuery } from '@apollo/client';
import NewsPage from '../news-page';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../news-page/news-page.style', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('react-redux');
const mockSetState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState]
}));

let wrapper;

useQuery.mockImplementation((query, options) => {
  options.onCompleted({
    getAllNews: {
      items: []
    }
  });
  return { error: null, loading: false };
});

describe('Test newsPage', () => {
  it('should render component when Loading true', () => {
    wrapper = shallow(<NewsPage />);
    expect(wrapper).toBeTruthy();
  });
});
