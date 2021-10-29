import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import SimilarProducts from '../index';

import { mockedDataForLightTheme, mockedDataForDarkTheme } from './similar-products.variables';

const useQueryData = {
  loading: false,
  error: false
};

jest.mock('react-redux');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [{}]
}));
jest.mock('../../../../context/theme-context', () => ({}));
jest.mock('../similar-products.styles', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('../../../../utils/productDetails', () => ({ similarProductForCart: [{}] }));

describe('Similar products test', () => {
  let wrapper;

  it('Should render similar products component', () => {
    useSelector.mockImplementation((selector) => selector(mockedDataForLightTheme));
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<SimilarProducts product={{}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useSelector.mockImplementation((selector) => selector(mockedDataForDarkTheme));
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<SimilarProducts />);
  });
});
