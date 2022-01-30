import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import DeliveryType from '../delivery-type/delivery-type';
import {
  getUkrPoshtaRegions,
  getUkrPoshtaDistricts,
  getUkrPoshtaCities,
  getUkrPoshtaStreets
} from '../delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';
// import { clearSessionStorage } from '../../../../services/session-storage.service.js';

const mockClearCart = jest.fn();
const mockCartOperations = { clearCart: mockClearCart };
// const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
const dispatch = jest.fn();
// const clearStorage = jest.fn();

jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

jest.mock('../../../../services/session-storage.service.js', () => ({
  setToSessionStorage: jest.fn(),
  getFromSessionStorage: jest.fn(() => 'UKRPOSTCOURIER'),
  clearSessionStorage: jest.fn()
}));

const ukrPostMockRegions = [
  {
    request: {
      query: getUkrPoshtaRegions
    },
    result: {
      data: {
        getUkrPoshtaRegions: [
          {
            REGION_UA: 'Вінницька',
            REGION_ID: '1'
          }
        ]
      }
    }
  }
];
const ukrPostMockDistricts = [
  {
    request: {
      query: getUkrPoshtaDistricts
    },
    result: {
      data: {
        getUkrPoshtaDistricts: [
          {
            DISTRICT_UA: 'Гайсинський',
            DISTRICT_ID: '916'
          }
        ]
      }
    }
  }
];

const ukrPostMockCities = [
  {
    request: {
      query: getUkrPoshtaCities
    },
    result: {
      data: {
        getUkrPoshtaCities: [
          {
            CITY_UA: 'Адамівка',
            CITY_ID: '27942'
          }
        ]
      }
    }
  }
];

const ukrPostMockStreets = [
  {
    request: {
      query: getUkrPoshtaStreets
    },
    result: {
      data: {
        getUkrPoshtaStreets: [
          {
            STREET_UA: 'Південна'
          }
        ]
      }
    }
  }
];

const props = {
  currency: 0,
  cartItems: [{ price: [{ currency: 'ua', value: 100 }] }],
  cartOperations: mockCartOperations
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
// clearSessionStorage.mockImplementation(() => clearStorage);

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
  it('<CheckoutForm /> should contain component <DeliveryType />', () => {
    const wrapper = shallow(<CheckoutForm {...props} language={0} />);
    expect(wrapper.find(DeliveryType).length).toEqual(1);
  });
});

describe('CheckoutForm tests for: ', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MockedProvider
          mocks={(ukrPostMockRegions, ukrPostMockDistricts, ukrPostMockCities, ukrPostMockStreets)}
        >
          <CheckoutForm {...props} onSubmit={handleSubmit} />
        </MockedProvider>
      </BrowserRouter>
    );
  });
  it('first name field', async () => {
    const firstNameField = screen.getByTestId('firstName').querySelector('input');
    fireEvent.change(firstNameField, { target: { value: 'Roman' } });
    expect(firstNameField.value).toEqual('Roman');
  });

  it('last name field', async () => {
    const lastNameField = screen.getByTestId('lastName').querySelector('input');
    fireEvent.change(lastNameField, { target: { value: 'Denes' } });
    expect(lastNameField.value).toEqual('Denes');
  });

  it('email field', async () => {
    const emailField = screen.getByTestId('email').querySelector('input');
    fireEvent.change(emailField, { target: { value: 'netro@gmail.com' } });
    expect(emailField.value).toEqual('netro@gmail.com');
  });

  it('phoneNumber field', async () => {
    const phoneNumberField = screen.getByTestId('phoneNumber').querySelector('input');
    fireEvent.change(phoneNumberField, { target: { value: '380686717536' } });
    expect(phoneNumberField.value).toEqual('380686717536');
  });

  it('region field', async () => {
    // const radiogrup = screen.getByTestId('delivery-type').querySelector('input');
    // fireEvent.change(radiogrup, { target: { value: 'UKRPOSTCOURIER' } });

    const regionField = screen.getByTestId('region').querySelector('input');
    fireEvent.change(regionField, { target: { value: 'Вінницька' } });
    expect(regionField.value).toEqual('Вінницька');
  });

  it('districts field', async () => {
    const districtsField = screen.getByTestId('district').querySelector('input');
    fireEvent.change(districtsField, { target: { value: 'Гайсинський' } });
    expect(districtsField.value).toEqual('Гайсинський');
  });

  it('cities field', async () => {
    const citiesField = screen.getByTestId('cities').querySelector('input');
    fireEvent.change(citiesField, { target: { value: 'Адамівка' } });
    expect(citiesField.value).toEqual('Адамівка');
  });

  it('streets field', async () => {
    const streetsField = screen.getByTestId('streets').querySelector('input');
    fireEvent.change(streetsField, { target: { value: 'Південна' } });
    expect(streetsField.value).toEqual('Південна');
  });

  it('building field', async () => {
    const buildingField = screen.getByTestId('house').querySelector('input');
    fireEvent.change(buildingField, { target: { value: '34' } });
    expect(buildingField.value).toEqual('34');
  });

  it('flat field', async () => {
    const flatField = screen.getByTestId('flat').querySelector('input');
    fireEvent.change(flatField, { target: { value: '36' } });
    expect(flatField.value).toEqual('36');
  });

  it('paymentMetod field', async () => {
    const paymentMetodField = screen.getByTestId('paymentMetod').querySelector('input');
    fireEvent.change(paymentMetodField, { target: { value: 'CASH' } });
    expect(paymentMetodField.value).toEqual('CASH');
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
    fireEvent.change(phoneNumberField, { target: { value: '380686717536' } });
    fireEvent.change(regionField, { target: { value: 'Вінницька' } });
    fireEvent.change(districtsField, { target: { value: 'Гайсинський' } });
    fireEvent.change(citiesField, { target: { value: 'Адамівка' } });
    fireEvent.change(streetsField, { target: { value: 'Південна' } });
    fireEvent.change(buildingField, { target: { value: '34' } });
    fireEvent.change(flatField, { target: { value: '36' } });
    fireEvent.change(paymentMetodField, { target: { value: 'CASH' } });

    fireEvent.click(button);
    // await waitForElement(() => expect(dispatch).toHaveBeenCalled());
    await expect(dispatch).toHaveBeenCalledTimes(1);

    // act(() => {
    //   expect(handleSubmit).toHaveBeenCalled();
    // });
    // screen.debug()
  });

  // it('click on button action', async () => {
  //   const firstNameField = screen.getByTestId('firstName').querySelector('input');
  //   const lastNameField = screen.getByTestId('lastName').querySelector('input');
  //   const emailField = screen.getByTestId('email').querySelector('input');
  //   const phoneNumberField = screen.getByTestId('phoneNumber').querySelector('input');
  //   const regionField = screen.getByTestId('region').querySelector('input');
  //   const districtsField = screen.getByTestId('district').querySelector('input');
  //   const citiesField = screen.getByTestId('cities').querySelector('input');
  //   const streetsField = screen.getByTestId('streets').querySelector('input');
  //   const buildingField = screen.getByTestId('house').querySelector('input');
  //   const flatField = screen.getByTestId('flat').querySelector('input');
  //   const paymentMetodField = screen.getByTestId('paymentMetod').querySelector('input');
  //   const button = screen.getByTestId('confirmButton');

  //   fireEvent.change(firstNameField, { target: { value: 'Roman' } });
  //   fireEvent.change(lastNameField, { target: { value: 'Denes' } });
  //   fireEvent.change(emailField, { target: { value: 'netro@gmail.com' } });
  //   fireEvent.change(phoneNumberField, { target: { value: '380686717536' } });
  //   fireEvent.change(regionField, { target: { value: 'Вінницька' } });
  //   fireEvent.change(districtsField, { target: { value: 'Гайсинський' } });
  //   fireEvent.change(citiesField, { target: { value: 'Адамівка' } });
  //   fireEvent.change(streetsField, { target: { value: 'Південна' } });
  //   fireEvent.change(buildingField, { target: { value: '34' } });
  //   fireEvent.change(flatField, { target: { value: '36' } });
  //   fireEvent.change(paymentMetodField, { target: { value: 'CASH' } });

  //   fireEvent.click(button);
  //   // await waitForElement(() => expect(dispatch).toHaveBeenCalled());
  //   await expect(mockClearCart).toHaveBeenCalled()

  //   // act(() => {
  //   //   expect(handleSubmit).toHaveBeenCalled();
  //   // });
  //   logRoles(button);
  //   // screen.debug()
  // });
});

// it('click on button action', async () => {
//   const handleSubmit = jest.fn();
//   const firstNameField = screen.getByTestId('firstName').querySelector('input');
//   fireEvent.change(firstNameField, { target: { value: 'Roman' } });

//   const lastNameField = screen.getByTestId('lastName').querySelector('input');
//   fireEvent.change(lastNameField, { target: { value: 'Denes' } });

//   const emailField = screen.getByTestId('email').querySelector('input');
//   fireEvent.change(emailField, { target: { value: 'netro@gmail.com' } });

//   const phoneNumberField = screen.getByTestId('phoneNumber').querySelector('input');
//   fireEvent.change(phoneNumberField, { target: { value: '380686717536' } });

//   const regionField = screen.getByTestId('region').querySelector('input');
//   fireEvent.change(regionField, { target: { value: 'Вінницька' } });

//   const districtsField = screen.getByTestId('district').querySelector('input');
//   fireEvent.change(districtsField, { target: { value: 'Гайсинський' } });

//   const citiesField = screen.getByTestId('cities').querySelector('input');
//   fireEvent.change(citiesField, { target: { value: 'Адамівка' } });

//   const streetsField = screen.getByTestId('streets').querySelector('input');
//   fireEvent.change(streetsField, { target: { value: 'Південна' } });

//   const buildingField = screen.getByTestId('house').querySelector('input');
//   fireEvent.change(buildingField, { target: { value: '34' } });

//   const flatField = screen.getByTestId('flat').querySelector('input');
//   fireEvent.change(flatField, { target: { value: '36' } });

//   const paymentMetodField = screen.getByTestId('paymentMetod').querySelector('input');
//   fireEvent.change(paymentMetodField, { target: { value: 'CASH' } });

//   const button = screen.getByTestId('rety');
//   fireEvent.click(button);
//   expect(handleSubmit).toHaveBeenCalled();
//   // act(() => {
//   //   expect(handleSubmit).toHaveBeenCalled();
//   // });
//   // logRoles(button);
// });

/// /// /// ///
