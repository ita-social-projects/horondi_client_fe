import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import { getFromSessionStorage } from '../../../../services/session-storage.service';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('react-redux');

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

// getFromSessionStorage.mockImplementation(() => userData)
describe('<CheckoutForm />', () => {
  it('should contain <CheckoutForm /> components', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });
  it('should ', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });
});
