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
useDispatch.mockImplementation(() => dispatch);
const mockUseSelector = (loading = false) => {
  useSelector.mockImplementation(() => ({
    language: 0,
    cartLoading: loading,
    currency: 0,
    userData: {},
    cartList: [],
    cartQuantityLoading: false,
    cartUserTotalPrice: 100,
    user: {
      userData: null
    }
  }));
};

let wrapper;
const items = [{ price: [{ currency: 'ua', value: 100 }] }];

describe('Filled cart component tests', () => {
  beforeEach(() => {
    mockUseSelector();
  });

  it('Should match snapshot', () => {
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find loader', () => {
    mockUseSelector(true);
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper.exists(Loader)).toBe(true);
  });

  it('should cover other branches', () => {
    wrapper = shallow(<FilledCart items={items} />);
  });
});
