import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NovaPost from '../nova-post';

jest.mock('../nova-post.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
const dispatch = jest.fn();
const setFieldValue = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  deliveryLoading: false,
  cities: [],
  warehouses: []
}));

let wrapper;

const isLightTheme = true;
const touched = {};
const errors = {};
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
  wrapper = shallow(
    <NovaPost
      errors={errors}
      setFieldValue={setFieldValue}
      isLightTheme={isLightTheme}
      values={values}
      touched={touched}
    />
  );

  it('Should render NovaPost', () => {
    expect(wrapper).toBeDefined();
  });
});
