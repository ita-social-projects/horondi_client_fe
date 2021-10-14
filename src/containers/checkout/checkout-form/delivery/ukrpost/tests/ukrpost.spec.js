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

const props = {
  isLightTheme: true,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: {},
  errors: {},
  setFieldValue: jest.fn()
};

describe('ConstructorSubmit component tests', () => {
  wrapper = shallow(<UkrPost {...props} />);

  it('Should render UkrPost', () => {
    expect(wrapper).toBeDefined();
  });
});
