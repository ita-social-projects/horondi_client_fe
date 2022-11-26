import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { ThemeProvider } from '@material-ui/core';
import ProfilePage from '../../../../pages/profile-page/profile-page';
import { mockedUserData } from './profile-page.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';
import { SnackBarContextProvider } from '../../../../context/snackbar-context';

jest.mock('../../../../pages/profile-page/profile-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../pages/profile-page/avatar/avatar', () => () => 'AvatarComponent');

jest.mock('react-redux');
jest.mock('formik');

const dispatch = jest.fn();

const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockBlur = jest.fn();
const mockReset = jest.fn();

const formik = {
  values: {},
  touched: {},
  errors: {},
  handleBlur: mockBlur,
  resetForm: mockReset,
  handleSubmit: mockSubmit,
  handleChange: mockChange
};

const themeValue = theme('light');

useDispatch.mockImplementation(() => dispatch);

useFormik.mockImplementation(() => formik);

describe('<Profile-page /> component tests', () => {
  it('should render form', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(
      <SnackBarContextProvider>
        <ThemeProvider theme={themeValue}>
          <ProfilePage />
        </ThemeProvider>
      </SnackBarContextProvider>
    );
    const form = getByTestId('userForm');
    expect(form).toBeInTheDocument();
  });

  it('should render email sent container', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false,
      confirmationEmailSent: true,
      userRecovered: true
    }));
    const { getAllByTestId } = render(
      <SnackBarContextProvider>
        <ThemeProvider theme={themeValue}>
          <ProfilePage />
        </ThemeProvider>
      </SnackBarContextProvider>
    );
    const emailSentContainer = getAllByTestId('emailSent');
    expect(emailSentContainer[0]).toBeInTheDocument();
  });

  it('should handle password change', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(
      <SnackBarContextProvider>
        <ThemeProvider theme={themeValue}>
          <ProfilePage />
        </ThemeProvider>
      </SnackBarContextProvider>
    );
    const passwordChangeBtn = getByTestId('passwordChangeBtn');
    fireEvent.click(passwordChangeBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should handle email confirmation', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(
      <SnackBarContextProvider>
        <ThemeProvider theme={themeValue}>
          <ProfilePage />
        </ThemeProvider>
      </SnackBarContextProvider>
    );
    const emailConfirmBtn = getByTestId('emailConfirmBtn');
    fireEvent.click(emailConfirmBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should handle submit', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(
      <SnackBarContextProvider>
        <ThemeProvider theme={themeValue}>
          <ProfilePage />
        </ThemeProvider>
      </SnackBarContextProvider>
    );
    const submitBtn = getByTestId('submitBtn');
    fireEvent.click(submitBtn);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
