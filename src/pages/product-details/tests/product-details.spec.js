import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../product-details';
import { Loader } from '../../../components/loader/loader';

jest.mock('connected-react-router', () => {
  jest.fn();
});
jest.mock('../product-details.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
React.useContext = mockUseContext;

const dispatch = jest.fn();
let storage = {
  currency: 0,
  categoryFilter: [],
  isLoading: false,
  product: null,
  productToSend: {}
};

const match = {
  params: {
    id: 0
  }
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);

describe('ProductDetails page test', () => {
  it('Should render ProductDetails', () => {
    const component = shallow(<ProductDetails match={match} />);
    expect(component).toBeDefined();
  });

  it('Should render Loader', () => {
    storage = {
      currency: 0,
      categoryFilter: [],
      isLoading: true,
      product: null,
      productToSend: {}
    };
    const component = shallow(<ProductDetails match={match} />);
    expect(component.exists(Loader)).toBe(true);
  });
});
