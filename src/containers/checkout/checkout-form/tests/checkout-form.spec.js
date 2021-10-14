import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import DeliveryType from '../../delivery-type/delivery-type';

jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
const dispatch = jest.fn();
const props = {
  language: 1,
  isLightTheme: true,
  currency: 0,
  cartItems: [{ price: [{ currency: 'ua', value: 100 }] }],
  deliveryType: 'NOVAPOSTCOURIER'
};
const userData = {
  loginError: '',
  userLoading: false,
  language: 0,
  snackBarStatus: '',
  snackBarSeverity: '',
  snackBarMessage: ''
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => userData);

describe('CheckoutForm component tests', () => {
  it('should contain <CheckoutForm /> component <Delivery />', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should submit add payment method', async () => {
    const wrapper = shallow(<CheckoutForm {...props} onSubmit={myOnSubmit} />);
    wrapper.find('form').simulate('submit');
  });
  it('should contain <CheckoutForm /> component <DeliveryType />', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(DeliveryType).length).toEqual(1);
  });
});
