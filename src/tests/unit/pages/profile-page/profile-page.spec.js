import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Loader } from '../../../../components/loader/loader';
import ProfilePage from '../../../../pages/profile-page/profile-page';
import { mockedUserData } from './profile-page.variables';

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

useDispatch.mockImplementation(() => dispatch);

useFormik.mockImplementation(() => formik);

describe('<Profile-page /> component tests', () => {
  it('should render Loader if user is loading', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: true
    }));
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('should render Loaders if confirmation & recovery is loading', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false,
      confirmationLoading: true,
      recoveryLoading: true
    }));
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper.find(Loader).length).toEqual(2);
  });

  it('should render form', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(<ProfilePage />);
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
    const { getAllByTestId } = render(<ProfilePage />);
    const emailSentContainer = getAllByTestId('emailSent');
    expect(emailSentContainer[0]).toBeInTheDocument();
  });

  it('should handle password change', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(<ProfilePage />);
    const passwordChangeBtn = getByTestId('passwordChangeBtn');
    fireEvent.click(passwordChangeBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should handle email confirmation', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(<ProfilePage />);
    const emailConfirmBtn = getByTestId('emailConfirmBtn');
    fireEvent.click(emailConfirmBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should handle submit', () => {
    useSelector.mockImplementation(() => ({
      userData: mockedUserData,
      userLoading: false
    }));
    const { getByTestId } = render(<ProfilePage />);
    const submitBtn = getByTestId('submitBtn');
    fireEvent.click(submitBtn);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
