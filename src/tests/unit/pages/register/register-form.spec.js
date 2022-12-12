import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { FormControlLabel } from '@material-ui/core';
import RegisterForm from '../../../../pages/register/register-from/register-form';
import AppTextField from '../../../../components/app-text-field';

jest.mock('../../../../pages/register/register-from/register-form.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../components/google-log-in-btn/google-button.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('formik');

const dispatch = jest.fn();
const props = {
  formOperations: {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    handleBlur: jest.fn()
  },
  loading: false,
  touched: {},
  values: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  errors: {},
  showPassword: true,
  setShowPassword: jest.fn(),
  registerError: null
};
const formik = {
  initialValues: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  onSubmit: jest.fn(),
  validationSchema: {},
  validateOnBlur: jest.fn(),
  validateOnChange: jest.fn()
};

useFormikContext.mockImplementation(() => formik);
useDispatch.mockImplementation(() => dispatch);

describe('RegisterForm tests', () => {
  it('should render all fields of Register Form', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find(AppTextField).length).toEqual(4);
  });

  it('should set checkbox checked', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    const checkbox = wrapper.find(FormControlLabel);
    checkbox.props().onChange({ target: { checked: true } });
    expect(wrapper.find(FormControlLabel).props().checked).toBeTruthy();
  });
});
