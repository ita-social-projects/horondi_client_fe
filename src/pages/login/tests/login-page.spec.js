import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import { getFromLocalStorage } from '../../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../../configs/index';
import Login from '../login';
import { Loader } from '../../../components/loader/loader';

jest.mock('../login.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('formik');
jest.mock('../../../services/local-storage.service');

const dispatch = jest.fn();
const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockSetFieldValue = jest.fn();
const mockBlur = jest.fn();
const formik = {
  values: {},
  handleSubmit: mockSubmit,
  handleChange: mockChange,
  touched: { email: true, password: true },
  errors: {},
  setFieldValue: mockSetFieldValue,
  handleBlur: mockBlur
};
const storage = {
  loginError: '',
  userLoading: false,
  snackBarStatus: false,
  snackBarSeverity: '',
  snackBarMessage: '',
  language: 0
};

let theme = LIGHT_THEME;
let component;

getFromLocalStorage.mockImplementation(() => theme);

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);
useFormik.mockImplementation(() => formik);

describe('Login page test', () => {
  beforeEach(() => {
    component = shallow(<Login />);
  });
  it('Should render with Light theme', () => {
    expect(component.find('form')).toBeDefined();
  });
  it('Should render with Dark theme', () => {
    theme = DARK_THEME;
    expect(component.find('form')).toBeDefined();
  });

  it('Should simulate submit event', async () => {
    const input = component.find('[data-cy="staySignedIn"]');
    input.simulate('change', { target: { value: 'Hello' } });
  });

  it('Should render Loader', () => {
    storage.userLoading = true;
    const component = shallow(<Login />);
    expect(component.exists(Loader)).toBe(true);
    storage.userLoading = false;
  });

  it('email should call useFormik method onChange', async () => {
    const inputEmail = component.find('#email');
    const value = { target: { value: 'Hello' } };
    inputEmail.simulate('change', value);
    expect(mockChange).toHaveBeenCalledWith(value);
  });

  it('form should call useFormik method onClick', () => {
    const submitButton = component.find(Button);
    submitButton.simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('email should call useFormik method onBlur', () => {
    const submitButton = component.find(Button);
    const inputEmail = component.find('#email');
    submitButton.simulate('click');
    inputEmail.simulate('blur', { target: { value: 'text' } });
    expect(mockBlur).toHaveBeenCalled();
  });
});
