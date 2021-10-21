import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useQuery } from '@apollo/client';
import NewsPage from '../news-page';

configure({ adapter: new Adapter() });

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getAllNews: [] }
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

    wrapper = shallow(<NewsPage />);

    expect(wrapper).toMatchSnapshot();
  });

  it('', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<NewsPage />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));

    wrapper = shallow(<NewsPage />);
  });
});
