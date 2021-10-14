import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NovaPost from '../nova-post';

jest.mock('../nova-post.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  deliveryLoading: false,
  cities: [],
  warehouses: []
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
  wrapper = shallow(<NovaPost {...props} />);

  it('Should render NovaPost', () => {
    expect(wrapper).toBeDefined();
  });
});
