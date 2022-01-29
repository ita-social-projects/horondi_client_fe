import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CheckoutForm from '../checkout-form';
import Delivery from '../delivery/delivery';
import DeliveryType from '../delivery-type/delivery-type';
import { getUkrPoshtaRegions } from '../delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';
import { clearSessionStorage } from '../../../../services/session-storage.service.js';

const mockClearCart = jest.fn();
const mockCartOperations = { clearCart: mockClearCart };
const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
const dispatch = jest.fn();
const clearStorage = jest.fn();

jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const ukrPostMock = [
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
          },
          {
            REGION_UA: 'Волинська',
            REGION_ID: '2'
          }
        ]
      }
    }
  }
];
jest.mock('../../../../services/session-storage.service.js', () => ({
  setToSessionStorage: jest.fn(),
  getFromSessionStorage: jest.fn(() => 'UKRPOSTCOURIER'),
  clearSessionStorage: jest.fn()
}));

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

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => userData);
clearSessionStorage.mockImplementation(() => clearStorage);

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

describe('CheckoutForm tests for: ', () => {
  beforeEach(() => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <MockedProvider mocks={ukrPostMock}>
          <CheckoutForm {...props} onSubmit={handleSubmit} />
        </MockedProvider>
      </BrowserRouter>
    );
  });
  it('first name field', async () => {
    const firstNameField = screen.getByTestId('firstName').querySelector('input');
    fireEvent.change(firstNameField, { target: { value: 'Andrii' } });
    expect(firstNameField.value).toEqual('Andrii');
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

  // it('click on button action', async () => {
  //   const handleSubmit = jest.fn();

  //   const button = screen.getByTestId('rety');
  //   const paymentFiels = screen.getByTestId('paymentMetod').querySelector('input');
  //   fireEvent.change(paymentFiels, { target: { value: 'CASH' } });
  //   fireEvent.click(button);
  //   await act(() =>{
  //     expect(handleSubmit).toHaveBeenCalled()
  //   })

  //   // expect(paymentFiels.value).toEqual('CASH');

  //   // fireEvent.click(button);
  //   // // await expect(handleSubmit).toHaveBeenCalled()
  //   logRoles(button);
  // });
});

// fireEvent.change(radiogrup, { target: { value: 'UKRPOSTCOURIER' } });

// const radio =  getByTestId('del');
// const firstAndLastNameTextField = getByTestId('firstAndLastName');
// // const userhouseAndFlat = getByTestId('houseAndFlat').querySelector('input');
// const submitBtn = getByTestId('submit-btn');
// // fireEvent.change(radiogrup, { target: { value: 'COURIER' } });
// fireEvent.change(firstAndLastNameTextField, { target: { value: 'sometext' } });
// // fireEvent.change(userhouseAndFlat, { target: { value: 'anytext' } });
// fireEvent.click(submitBtn);
// await act(() => expect(radiogrup.value).toBe('COURIER')
//   // expect(handleSubmit).toHaveBeenCalledWith({
//   //   radiogrup: 'COURIER'
//   // })
// );
// console.log(radiogrup)
// screen.debug(radiogrup);
// logRoles(radiogrup)

// it('test 3', async () => {
//   const handleSubmit = jest.fn();
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <MockedProvider mocks={ukrPostMock}>
//         <CheckoutForm {...props} onSubmit={handleSubmit} />
//       </MockedProvider>
//     </BrowserRouter>
//   );
//   const radiogrup = getByTestId('delivery-type');
//   const radio = getByTestId('region');
//   const building = getByTestId('house').querySelector('input');
//   const hata = getByTestId('flat').querySelector('input');
//   fireEvent.change(building, { target: { value: '34' } });
//   fireEvent.change(hata, { target: { value: '36' } });

//   logRoles(building);
//   logRoles(hata);
// });
