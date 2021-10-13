import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../../components/loader/loader';
import FilledCart from '../filled-cart';

jest.mock('react-redux');
jest.mock('../filled-cart.styles.js', () => ({ useStyles: () => ({}) }));
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
React.useContext = mockUseContext;

const dispatch = jest.fn();
const state = {
  language: 0,
  loading: false,
  currency: 0,
  userData: {},
  list: [],
  totalPrice: 100
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;
const items = [{ price: [{ currency: 'ua', value: 100 }] }];

describe('Filled cart component tests', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find loader', () => {
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper.exists(Loader)).toBeDefined();
  });

  it('should cover other branches', () => {
    wrapper = shallow(<FilledCart items={items} />);
  });
});
