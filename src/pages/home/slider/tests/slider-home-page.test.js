import React from 'react';
import { useQuery } from '@apollo/client';

import SliderHomePage from '../slider-home-page';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getAllSlides: { items: [{}] } }
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ language: 0 })
}));
jest.mock('@apollo/client');

describe('slider home page tests', () => {
  it('should match snapshot', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<SliderHomePage />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<SliderHomePage />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));

    wrapper = shallow(<SliderHomePage />);
  });
});
