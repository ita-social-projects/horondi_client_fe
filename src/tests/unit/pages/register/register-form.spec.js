import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import { FormControlLabel } from '@material-ui/core';
import RegisterForm from '../../../../pages/register/register-from/register-form';
import { Loader } from '../../../../components/loader/loader';

window.FB = { init: jest.fn() };
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
  loading: false,
  values: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  errors: {},
  showPassword: true,
  setShowPassword: jest.fn(),
  registerError: null,
  setShouldValidate: jest.fn()
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
    expect(wrapper.find(Field).length).toEqual(4);
  });
  it('should not render Loader if not loading', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
  it('should render Loader if loading', () => {
    const wrapper = shallow(<RegisterForm {...props} loading />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it('should set checkbox checked', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    const checkbox = wrapper.find(FormControlLabel);
    checkbox.props().onChange({ target: { checked: true } });
    expect(wrapper.find(FormControlLabel).props().checked).toBeTruthy();
  });
});
