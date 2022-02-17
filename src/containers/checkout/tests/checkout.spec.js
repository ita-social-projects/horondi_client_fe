import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../checkout';
import CheckoutForm from '../checkout-form';
import Loader from '../../../components/loader';

jest.mock('react-redux');
jest.mock('../checkout.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
jest.mock('react-router', () => ({
  useLocation: () => ({ state: { promoCode: 'HORONDI20' } })
}));
React.useContext = mockUseContext;

const state = {
  currency: 0,
  loading: false,
  isOrderCreated: false,
  order: null,
  user: null
};
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => state);
useDispatch.mockReturnValue(mockDispatch);

describe('<Checkout />', () => {
  it('should render one <CheckoutForm />', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(CheckoutForm)).toHaveLength(1);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
  it('should render one <Loader />', () => {
    state.loading = true;
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
