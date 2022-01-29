// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
// import CheckoutForm from '../checkout-form';
// import Delivery from '../delivery/delivery';
// import DeliveryType from '../delivery-type/delivery-type';
// import { MockedProvider } from '@apollo/client/testing';
// import { getUkrPoshtaRegions } from '../../checkout-form/delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';
// // import {logRoles} from '@testing-library/dom'

// const mockClearCart = jest.fn();
// const mockCartOperations = { clearCart: mockClearCart };
// const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
// const dispatch = jest.fn();

// jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
// jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
// jest.mock('react-redux');

// // jest.mock('react-i18next', () => ({
// //   useTranslation: () => ({
// //     t: (key) => key,
// //     i18n: { language: jest.fn() }
// //   })
// // }));

// const ukrPostMock = [
//   {
//     request: {
//       query: getUkrPoshtaRegions
//     },
//     result: {
//       data: {
//         getUkrPoshtaRegions: [
//           {
//             REGION_UA: 'Вінницька',
//             REGION_ID: '1'
//           },
//           {
//             REGION_UA: 'Волинська',
//             REGION_ID: '2'
//           }
//         ]
//       }
//     }
//   }
// ];
// jest.mock('../../../../services/session-storage.service.js', () => ({
//   setToSessionStorage: jest.fn(),
//   getFromSessionStorage: jest.fn(() => 'COURIER'),
//   clearFromSessionStorage: jest.fn()
// }));

// const props = {
//   currency: 0,
//   cartItems: [{ price: [{ currency: 'ua', value: 100 }] }],
//   cartOperations: mockCartOperations
// };

// const userData = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phoneNumber: '',
//   address: ''
// };

// useDispatch.mockImplementation(() => dispatch);
// useSelector.mockImplementation(() => userData);

// describe('CheckoutForm component tests', () => {
//   it(' <CheckoutForm /> should contain component <Delivery />', () => {
//     const wrapper = shallow(<CheckoutForm {...props} />);
//     expect(wrapper.find(Delivery).length).toEqual(1);
//   });
//   it('should submit add payment method', async () => {
//     const wrapper = shallow(<CheckoutForm {...props} onSubmit={myOnSubmit} />);
//     wrapper.find('form').simulate('submit');
//   });
//   it('<CheckoutForm /> should contain component <DeliveryType />', () => {
//     const wrapper = shallow(<CheckoutForm {...props} language={0} />);
//     expect(wrapper.find(DeliveryType).length).toEqual(1);
//   });
// });

// // describe('CheckoutForm tests', () => {
// //   it('test', async () => {
// //     const handleSubmit = jest.fn();
// //     const { getByTestId } = render(
// //       <BrowserRouter>
// //         <MockedProvider mocks={ukrPostMock}>
// //           <CheckoutForm {...props} onSubmit={handleSubmit} />
// //         </MockedProvider>
// //       </BrowserRouter>
// //     );
// //     const radiogrup = getByTestId('del');
// //     // const firstAndLastNameTextField = getByTestId('firstAndLastName').querySelector('input');
// //     // // const userhouseAndFlat = getByTestId('houseAndFlat').querySelector('input');
// //     // const submitBtn = getByTestId('submit-btn');
// //     // // fireEvent.change(radiogrup, { target: { value: 'COURIER' } });
// //     // fireEvent.change(firstAndLastNameTextField, { target: { value: 'sometext' } });
// //     // // fireEvent.change(userhouseAndFlat, { target: { value: 'anytext' } });
// //     // fireEvent.click(submitBtn);
// //     // await act(() => expect(radiogrup.value).toBe('COURIER')
// //     //   // expect(handleSubmit).toHaveBeenCalledWith({
// //     //   //   radiogrup: 'COURIER'
// //     //   // })
// //     // );
// //     // console.log(radiogrup)
// //     // screen.debug();
// //     logRoles(radiogrup)
// //   });
// // });

// // import React from 'react';
// // import { BrowserRouter } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // // import { useFormik } from 'formik';
// // import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
// // // import userEvent from '@testing-library/user-event';
// // import CheckoutForm from '../checkout-form';
// // import Delivery from '../delivery/delivery';
// // import DeliveryType from '../delivery-type/delivery-type';
// // // import '@testing-library/jest-dom/extend-expect';

// // const mockClearCart = jest.fn();
// // const mockCartOperations = { clearCart: mockClearCart };
// // const myOnSubmit = jest.fn().mockResolvedValueOnce({ data: { paymentMethod: 'card' } });
// // const dispatch = jest.fn();
// // const mockBlur = jest.fn();
// // const mockReset = jest.fn();
// // const mockSubmit = jest.fn();
// // const mockChange = jest.fn();

// // jest.mock('../checkout-form.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
// // jest.mock('../delivery-type/delivery-type.styles', () => ({ useStyles: () => ({}) }));
// // jest.mock('react-redux');
// // // jest.mock('../../../../services/session-storage.service.js', () => ({
// // //   getFromSessionStorage: () => ({ checkoutForm: 'lightMode' }),
// // //   setToSessionStorage: () => ({ checkoutForm: 'lightMode' })
// // // }));
// // jest.mock('react-i18next', () => ({
// //   useTranslation: () => ({
// //     t: (key) => key,
// //     i18n: { language: jest.fn() }
// //   })
// // }));
// // // jest.mock('../../../../utils/checkout.js', () => ({
// // //   updateInitialValues: () => ({ deliveryType: 'UKRPOST' })
// // // }));

// // // jest.mock('formik');

// // // jest.mock('../../../../utils/checkout', () => ({
// // //   userContactInputLabels: () => [{ name: 'firstName', label: "Ім'я" }],
// // //   userNameInputLabels: () => [{ name: 'firstName', label: "Ім'я" }],
// // //   setDeliveryTypeToStorage: () => ({ firstName: 'gdfgd', }),
// // //   handleError: () => ({ errorMessage: 'test fail' }),
// // //   getThemeColor: 'black',
// // //   checkoutFormBtnValue: () => 'checkout.confirmOrder',
// // //   updateInitialValues: () => ({})
// // // }));

// // const initialValues = {
// //   firstName: '',
// //   lastName: ''
// // };
// // const props = {
// //   language: 1,
// //   isLightTheme: true,
// //   currency: 0,
// //   cartItems: [{ price: [{ currency: 'ua', value: 100 }] }],
// //   cartOperations: mockCartOperations,
// //   initialValues,
// //   deliveryType: 'NOVAPOSTCOURIER',
// //   cartOperations: mockCartOperations,
// // };
// // const userData = {
// //   loginError: '',
// //   userLoading: false,
// //   language: 0,
// //   snackBarStatus: '',
// //   snackBarSeverity: '',
// //   snackBarMessage: ''
// // };
// // // const formik = {
// // //   values: {},
// // //   touched: {},
// // //   // errors: {firstName: 'error.profile.firstName', paymentMethod: 'error.requiredField', street: 'error.requiredField', house: 'error.houseFormatNumber', flat: 'error.houseFormatNumber'},
// // //   errors: {},
// // //   handleBlur: mockBlur,
// // //   resetForm: mockReset,
// // //   handleSubmit: mockSubmit,
// // //   handleChange: mockChange
// // // };

// // useDispatch.mockImplementation(() => dispatch);
// // useSelector.mockImplementation(() => userData);
// // // useFormik.mockImplementation(() => formik);

// // describe('CheckoutForm component tests', () => {
// //   it(' <CheckoutForm /> should contain component <Delivery />', () => {
// //     const wrapper = shallow(<CheckoutForm {...props} />);
// //     expect(wrapper.find(Delivery).length).toEqual(1);
// //   });
// //   it('should submit add payment method', async () => {
// //     const wrapper = shallow(<CheckoutForm {...props} onSubmit={myOnSubmit} />);
// //     wrapper.find('form').simulate('submit');
// //   });
// //   it('<CheckoutForm /> should contain component <DeliveryType />', () => {
// //     const wrapper = shallow(<CheckoutForm {...props} language={0} />);
// //     expect(wrapper.find(DeliveryType).length).toEqual(1);
// //   });

// //   // it('test', async () => {
// //   //   const wrapper = mount(
// //   //     <BrowserRouter>
// //   //       <CheckoutForm {...props} />
// //   //     </BrowserRouter>
// //   //   );
// //   //   const radioGroup = wrapper.find(`[id='some-shitty-id']`);
// //   //   // const radioGroup = wrapper.find('#some-shitty-id');
// //   //   // const radioGroup = wrapper.find('some-shitty-id');
// //   //   // console.log(wrapper.debug());
// //   //   radioGroup.at(3).simulate('click');
// //   //   // const select = wrapper.find(`[name='courierOrganization']`);
// //   //   const select = wrapper.find('.courierSelect');

// //   //   // select.props().onChange({ target: { value: 'NOVAPOSTCOURIER' } });
// //   //   select.simulate('change', { target: { value: 'NOVAPOSTCOURIER' } });
// //   //   const house = wrapper.find(`[name='house']`);
// //   //   await expect(house).toHaveLength(1);
// //   // });
// // });

// // describe('CheckoutForm tests', async () => {
// //   it('test', async () => {
// //     const handleSubmit = jest.fn();
// //     const { getByTestId } = render(
// //       <BrowserRouter>
// //         <CheckoutForm {...props} onSubmit={handleSubmit} />
// //       </BrowserRouter>
// //     );
// //     const radiogrup = getByTestId('delivery-type').querySelector('input');
// //     const firstAndLastNameTextField = getByTestId('firstAndLastName').querySelector('input');
// //     // const userhouseAndFlat = getByTestId('houseAndFlat').querySelector('input');
// //     const submitBtn = getByTestId('submit-btn');
// //     fireEvent.change(radiogrup, { target: { value: 'COURIER' } });
// //     fireEvent.change(firstAndLastNameTextField, { target: { value: 'sometext' } });
// //     // fireEvent.change(userhouseAndFlat, { target: { value: 'anytext' } });
// //     fireEvent.click(submitBtn);
// //     await act(() =>
// //       expect(radiogrup.value).toBe('COURIER')
// //       // expect(handleSubmit).toHaveBeenCalledWith({
// //       //   radiogrup: 'COURIER'
// //       // })
// //     );
// //     screen.debug();
// //   });
// // });
