import React from 'react';
import { useQuery } from '@apollo/client';

import ProductDetails from '../index';

const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
React.useContext = mockUseContext;

const useQueryData = {
  loading: false,
  error: false
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: (selector) => ({ currency: 0, isLightTheme: true, productToSend: {} }),
  useDispatch: () => () => null
}));
jest.mock('@apollo/client');
jest.mock('../product-details.styles', () => ({
  useStyles: () => ({ container: '' })
}));

describe('Product details test', () => {
  let wrapper;

  it('Should render product details component', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<ProductDetails match={{ params: { id: 1 } }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<ProductDetails match={{ params: { id: 1 } }} />);
  });
});
