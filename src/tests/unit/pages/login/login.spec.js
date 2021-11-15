import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { useFormik } from 'formik';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackBarContextProvider } from '../../../../context/snackbar-context';
import { getFromLocalStorage } from '../../../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../../../configs/index';
import Login from '../../../../pages/login/login';

jest.mock('../../../../pages/login/login.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../../components/google-log-in-btn/google-button.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('formik');
jest.mock('../../../../services/local-storage.service');

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
  userLoading: false
};

let theme = LIGHT_THEME;

getFromLocalStorage.mockImplementation(() => theme);
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);
useFormik.mockImplementation(() => formik);

describe('Login page test', () => {
  it('should render with Light theme', () => {
    const { getByText } = render(
      <SnackBarContextProvider>
        <Router>
          <Login />
        </Router>
      </SnackBarContextProvider>
    );

    const googleText = getByText(/google/i);
    expect(googleText).toBeInTheDocument();
  });

  it('should render with Dark theme', () => {
    theme = DARK_THEME;
    const { getByText } = render(
      <SnackBarContextProvider>
        <Router>
          <Login />
        </Router>
      </SnackBarContextProvider>
    );

    const googleText = getByText(/google/i);
    expect(googleText).toBeInTheDocument();
  });

  it('"Remember Me" checkbox should correctly react on click', () => {
    const { getByTestId } = render(
      <SnackBarContextProvider>
        <Router>
          <Login />
        </Router>
      </SnackBarContextProvider>
    );

    const rememberMeCheckbox = getByTestId(/staySignedIn/i);
    fireEvent.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeEnabled();
  });

  it('form should disappear when loader is called', () => {
    storage.userLoading = true;
    const { queryByText } = render(
      <SnackBarContextProvider>
        <Router>
          <Login />
        </Router>
      </SnackBarContextProvider>
    );

    const form = queryByText(/google/i);
    expect(form).toBeNull();
    storage.userLoading = false;
  });

  it('should render error message if error occurred', () => {
    storage.loginError = 'ERROR';
    const { getByText } = render(
      <SnackBarContextProvider>
        <Router>
          <Login />
        </Router>
      </SnackBarContextProvider>
    );

    const form = getByText(/wrongCredentials/i);
    expect(form).toBeInTheDocument();
    storage.loginError = '';
  });
});
