import React from 'react';
import { useQuery } from '@apollo/client';

import OurLooks from '../our-looks';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getHomePageLooksImages: [{}] }
};

jest.mock('@apollo/client');

describe('slider home page tests', () => {
  it('should match snapshot', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<OurLooks />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<OurLooks />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));

    wrapper = shallow(<OurLooks />);
  });
});
