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

const storage = {
  loginError: '',
  userLoading: false,
  snackBarStatus: false,
  snackBarSeverity: '',
  snackBarMessage: '',
  language: 0
};

let theme = LIGHT_THEME;

getFromLocalStorage.mockImplementation(() => theme);

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
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);
useFormik.mockImplementation(() => formik);

describe('Login page test', () => {
  it('Should render with Light theme', () => {
    const component = shallow(<Login />);
    expect(component.find('form')).toBeDefined();
  });

  it('Should render with Dark theme', () => {
    theme = DARK_THEME;
    const component = shallow(<Login />);
    expect(component.find('form')).toBeDefined();
  });

  it('Should simulate submit event', async () => {
    const component = shallow(<Login />);
    const input = component.find('[data-cy="staySignedIn"]');
    input.simulate('change', { target: { value: 'Hello' } });
  });

  it('Should render Loader', () => {
    storage.userLoading = true;
    const component = shallow(<Login />);
    expect(component.exists(Loader)).toBe(true);
    storage.userLoading = false;
  });

  it('should simulate change', async () => {
    const component = shallow(<Login />);
    const inputEmail = component.find('#email');
    const value = { target: { value: 'Hello' } };
    inputEmail.simulate('change', value);
    expect(mockChange).toHaveBeenCalledWith(value);
  });

  it('should simulate click', () => {
    const component = shallow(<Login />);
    const submitButton = component.find(Button);
    submitButton.simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('should simulate blur', () => {
    const component = shallow(<Login />);
    const submitButton = component.find(Button);
    const inputEmail = component.find('#email');
    submitButton.simulate('click');
    inputEmail.simulate('blur', { target: { value: 'text' } });
    expect(mockBlur).toHaveBeenCalled();
  });
});
