import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UkrPost from '../ukrpost';

jest.mock('../ukrpost.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  deliveryLoading: false,
  ukrPoshtaCities: {},
  ukrPoshtaRegions: {},
  ukrPoshtaDistricts: {},
  ukrPoshtaPostOffices: {}
}));

let wrapper;

const touched = {};
const values = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: null,
  paymentMethod: '',
  userComment: '',
  courierOffice: '',
  city: '',
  street: '',
  house: '',
  flat: '',
  region: '',
  district: '',
  regionId: '',
  districtId: '',
  cityId: ''
};

describe('ConstructorSubmit component tests', () => {
  wrapper = shallow(<UkrPost values={values} touched={touched} />);

  it('Should render UkrPost', () => {
    expect(wrapper).toBeDefined();
  });
});
