import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../checkout';
import CheckoutForm from '../checkout-form';
import Loader from '../../../components/loader';

jest.mock('react-redux');
jest.mock('../checkout.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));

const mockStore = {
  isLightTheme: 'light',
  currency: '',
  cartItems: [],
  deliveryType: 'SELFPICKUP',
  loading: false,
  isOrderCreated: true,
  order: []
};
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

describe('<Checkout />', () => {
  it('should render one <CheckoutForm />', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(CheckoutForm)).toHaveLength(1);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
  it('should render one <Loader />', () => {
    mockStore.loading = true;
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
