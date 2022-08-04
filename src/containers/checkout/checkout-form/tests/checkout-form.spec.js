import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import {
  ukrPostMockRegions,
  ukrPostMockDistricts,
  ukrPostMockCities,
  ukrPostMockStreets,
  mockProduct,
  mockedCartItemsData
} from './checkout-form.variables';
import { DollarIcon } from '../../../../images/profile-icons';

const mockClearCart = jest.fn();
const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const mockGetProductPriceWithPromoCode = jest.fn(() => 50);
const dispatch = jest.fn();
const mockCartOperations = {
  clearCart: mockClearCart
};
window.FB = { init: jest.fn() };
jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../hooks/use-cart', () => ({
  useCart: () => ({
    cart: mockedCartItemsData,
    cartOperations: { getProductPriceWithPromoCode: mockGetProductPriceWithPromoCode }
  })
}));

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

jest.mock('../../../../services/session-storage.service.js', () => ({
  setToSessionStorage: jest.fn(),
  getFromSessionStorage: jest.fn(() => 'UKRPOSTCOURIER'),
  clearSessionStorage: jest.fn()
}));

const props = {
  cartItems: [{ price: 20 }],
  cartOperations: mockCartOperations,
  promoCode: {
    getPromoCodeByCode: {
      code: 'test',
      discount: 10,
      categories: ['bags']
    }
  }
};

const userData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: ''
};

const handleSubmit = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => userData);

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
});
describe('CheckoutForm component tests', () => {
  it(' <CheckoutForm /> should contain component <Delivery />', () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });
  it('should submit add payment method', async () => {
    const wrapper = shallow(<CheckoutForm {...props} />);
    wrapper.find('form').simulate('submit');
  });
});

describe('CheckoutForm tests for: ', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MockedProvider
          mocks={
            (ukrPostMockRegions,
            ukrPostMockDistricts,
            ukrPostMockCities,
            ukrPostMockStreets,
            mockProduct)
          }
        >
          <CheckoutForm {...props} onSubmit={handleSubmit} />
        </MockedProvider>
      </BrowserRouter>
    );
  });
  it('first name field', async () => {
    const firstNameField = await screen.findByTestId('firstName');
    const input = firstNameField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Roman' } });
    expect(input.value).toEqual('Roman');
  });

  it('last name field', async () => {
    const lastNameField = await screen.findByTestId('lastName');
    const input = lastNameField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Denes' } });
    expect(input.value).toEqual('Denes');
  });

  it('email field', async () => {
    const emailField = await screen.findByTestId('email');
    const input = emailField.querySelector('input');
    fireEvent.change(input, { target: { value: 'netro@gmail.com' } });
    expect(input.value).toEqual('netro@gmail.com');
  });

  it('phoneNumber field', async () => {
    const phoneNumberField = await screen.findByTestId('phoneNumber');
    const input = phoneNumberField.querySelector('input');
    fireEvent.change(input, { target: { value: '686717536' } });
    expect(input.value).toEqual('686717536');
  });

  it('region field', async () => {
    const regionField = await screen.findByTestId('region');
    const input = regionField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Вінницька' } });
    expect(input.value).toEqual('Вінницька');
  });

  it('districts field', async () => {
    const districtsField = await screen.findByTestId('district');
    const input = districtsField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Гайсинський' } });
    expect(input.value).toEqual('Гайсинський');
  });

  it('cities field', async () => {
    const citiesField = await screen.findByTestId('cities');
    const input = citiesField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Адамівка' } });
    expect(input.value).toEqual('Адамівка');
  });

  it('streets field', async () => {
    const streetsField = await screen.findByTestId('streets');
    const input = streetsField.querySelector('input');
    fireEvent.change(input, { target: { value: 'Південна' } });
    expect(input.value).toEqual('Південна');
  });

  it('building field', async () => {
    const buildingField = await screen.findByTestId('house');
    const input = buildingField.querySelector('input');
    fireEvent.change(input, { target: { value: '34' } });
    expect(input.value).toEqual('34');
  });

  it('flat field', async () => {
    const flatField = await screen.findByTestId('flat');
    const input = flatField.querySelector('input');
    fireEvent.change(input, { target: { value: '36' } });
    expect(input.value).toEqual('36');
  });

  it('paymentMetod field', async () => {
    const paymentMetodField = await screen.findByTestId('paymentMetod');
    const input = paymentMetodField.querySelector('input');
    fireEvent.change(input, { target: { value: 'CASH' } });
    expect(input.value).toEqual('CASH');
  });

  it('click on button action', async () => {
    const firstNameField = screen.getByTestId('firstName').querySelector('input');
    const lastNameField = screen.getByTestId('lastName').querySelector('input');
    const emailField = screen.getByTestId('email').querySelector('input');
    const phoneNumberField = screen.getByTestId('phoneNumber').querySelector('input');
    const regionField = screen.getByTestId('region').querySelector('input');
    const districtsField = screen.getByTestId('district').querySelector('input');
    const citiesField = screen.getByTestId('cities').querySelector('input');
    const streetsField = screen.getByTestId('streets').querySelector('input');
    const buildingField = screen.getByTestId('house').querySelector('input');
    const flatField = screen.getByTestId('flat').querySelector('input');
    const paymentMetodField = screen.getByTestId('paymentMetod').querySelector('input');
    const button = screen.getByTestId('confirmButton');

    fireEvent.change(firstNameField, { target: { value: 'Roman' } });
    fireEvent.change(lastNameField, { target: { value: 'Denes' } });
    fireEvent.change(emailField, { target: { value: 'netro@gmail.com' } });
    fireEvent.change(phoneNumberField, { target: { value: '686717536' } });
    fireEvent.change(regionField, { target: { value: 'Вінницька' } });
    fireEvent.change(districtsField, { target: { value: 'Гайсинський' } });
    fireEvent.change(citiesField, { target: { value: 'Адамівка' } });
    fireEvent.change(streetsField, { target: { value: 'Південна' } });
    fireEvent.change(buildingField, { target: { value: '34' } });
    fireEvent.change(flatField, { target: { value: '36' } });
    fireEvent.change(paymentMetodField, { target: { value: 'CARD' } });

    fireEvent.click(button);
    await new Promise((resolve) => setTimeout(resolve, 0));
    await expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
