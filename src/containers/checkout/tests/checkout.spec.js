import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../checkout';

jest.mock('react-redux');
jest.mock('../checkout.styles.js', () => ({ useStyles: () => ({}) }));
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
React.useContext = mockUseContext;

const dispatch = jest.fn();
const state = {
  language: 1,
  currency: 0,
  cartItems: [],
  deliveryType: '',
  loading: false,
  isOrderCreated: false,
  order: null
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('Checkout component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Checkout />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Checkout', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
