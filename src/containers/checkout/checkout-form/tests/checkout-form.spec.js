import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { render, screen, act, fireEvent } from '@testing-library/react';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import DeliveryType from '../delivery-type/delivery-type';
import '@testing-library/jest-dom/extend-expect';

const mockClearCart = jest.fn();
const mockCartOperations = { clearCart: mockClearCart };
const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
const dispatch = jest.fn();
const mockBlur = jest.fn();
const mockReset = jest.fn();
const mockSubmit = jest.fn();
const mockChange = jest.fn();

jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../services/session-storage.service.js', () => ({
  getFromSessionStorage: () => ({ checkoutForm: 'lightMode' }),
  setToSessionStorage: () => ({ checkoutForm: 'lightMode' })
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: jest.fn() }
  })
}));
jest.mock('formik');
jest.mock('../../../../utils/checkout', () => ({
  userContactInputLabels: () => [{ name: 'firstName', label: "Ім'я" }],
  userNameInputLabels: () => [{ name: 'firstName', label: "Ім'я" }],
  setDeliveryTypeToStorage: () => ({ rrrrrr: 'fffff' }),
  handleError: () => ({ errorMessage: 'test fail' }),
  getThemeColor: 'black',
  checkoutFormBtnValue: () => 'checkout.confirmOrder',
  updateInitialValues: () => ({})
}));

const initialValues = {
  firstName: '',
  lastName: ''
};
const props = {
  language: 1,
  isLightTheme: true,
  currency: 0,
  cartItems: [{ price: [{ currency: 'ua', value: 100 }] }],
  cartOperations: mockCartOperations,
  initialValues
};
const userData = {
  loginError: '',
  userLoading: false,
  language: 0,
  snackBarStatus: '',
  snackBarSeverity: '',
  snackBarMessage: ''
};
const formik = {
  values: {},
  touched: {},
  errors: {},
  handleBlur: mockBlur,
  resetForm: mockReset,
  handleSubmit: mockSubmit,
  handleChange: mockChange
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => userData);
useFormik.mockImplementation(() => formik);

describe('CheckoutForm component tests', () => {
  it(' <CheckoutForm /> should contain component <Delivery />', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });
  it('should submit add payment method', async () => {
    const wrapper = shallow(<CheckoutForm {...props} onSubmit={myOnSubmit} />);
    wrapper.find('form').simulate('submit');
  });
  it('<CheckoutForm /> should contain component <DeliveryType />', () => {
    const wrapper = shallow(<CheckoutForm {...props} language={0} />);
    expect(wrapper.find(DeliveryType).length).toEqual(1);
  });
});

describe('CheckoutForm component tests', () => {
  it('test', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CheckoutForm {...props} />
      </BrowserRouter>
    );
    const street1Node = getByTestId('firstAndLastName').querySelector('input');
    const submitBtn = screen.getByTestId('submit-btn');
    screen.debug();
    act(() => {
      fireEvent.change(street1Node, { target: { value: 'Andrii' } });
      fireEvent.click(submitBtn);
    });
    expect(mockSubmit).toHaveBeenCalled();
  });
});
