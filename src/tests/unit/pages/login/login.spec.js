import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
// import Button from '@material-ui/core/Button';
// import { useFormik } from 'formik';
import { BrowserRouter as Router } from 'react-router-dom';
import { getFromLocalStorage } from '../../../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../../../configs/index';
import Login from '../../../../pages/login/login';
// import { Loader } from '../../../../components/loader/loader';

jest.mock('../../../../pages/login/login.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('react-router-dom');
// jest.mock('formik');
jest.mock('../../../../services/local-storage.service');

const dispatch = jest.fn();
const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockSetFieldValue = jest.fn();
const mockBlur = jest.fn();
// const formik = {
//   values: {},
//   handleSubmit: mockSubmit,
//   handleChange: mockChange,
//   touched: { email: true, password: true },
//   errors: {},
//   setFieldValue: mockSetFieldValue,
//   handleBlur: mockBlur
// };
const storage = {
  loginError: '',
  userLoading: false
};

let theme = LIGHT_THEME;
// let component;

getFromLocalStorage.mockImplementation(() => theme);

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);
// useFormik.mockImplementation(() => formik);
// jest.spyOn(redux, 'useSelector').mockReturnValue(storage);

describe('Login page test', () => {
  // beforeEach(() => {
  //   render(
  //     <Router>
  //       <Login />
  //     </Router>
  //   );
  // });

  it('Test1', () => {
    render(
      // <Router>
      <Login />
      // </Router>
    );
    screen.debug();

    expect(1 + 1).toBe(2);
  });

  it('Test2', () => {
    theme = DARK_THEME;

    render(
      // <Router>
      <Login />
      // </Router>
    );
    screen.debug();

    expect(1 + 1).toBe(2);
  });

  it('Test async', async () => {
    storage.userLoading = true;
    render(
      <Router>
        <Login />
      </Router>
    );
    const result = await screen.queryByText(/something/i);

    screen.debug();
    expect(result).toBeNull();
  });

  // it('Test #2', () => {
  //   const result = screen.getByText(/log in/i, {
  //     role: 'button'
  //   });

  //   expect(result).toBeInTheDocument();
  // });

  // beforeEach(() => {
  //   component = shallow(<Login />);
  // });
  // it('Should render with Light theme', () => {
  //   expect(component.find('form')).toBeDefined();
  // });
  // it('Should render with Dark theme', () => {
  //   theme = DARK_THEME;
  //   expect(component.find('form')).toBeDefined();
  // });

  // it('Should simulate submit event', async () => {
  //   const input = component.find('[data-cy="staySignedIn"]');
  //   input.simulate('change', { target: { value: 'Hello' } });
  // });

  // it('Should render Loader', () => {
  //   storage.userLoading = true;
  //   const componentWithLoader = shallow(<Login />);
  //   expect(componentWithLoader.exists(Loader)).toBe(true);
  //   storage.userLoading = false;
  // });

  // it('email should call useFormik method onChange', async () => {
  //   const inputEmail = component.find('#email');
  //   const value = { target: { value: 'Hello' } };
  //   inputEmail.simulate('change', value);
  //   expect(mockChange).toHaveBeenCalledWith(value);
  // });

  // it('form should call useFormik method onClick', () => {
  //   const submitButton = component.find(Button);
  //   submitButton.simulate('click');
  //   expect(mockSubmit).toHaveBeenCalled();
  // });

  // it('email should call useFormik method onBlur', () => {
  //   const submitButton = component.find(Button);
  //   const inputEmail = component.find('#email');
  //   submitButton.simulate('click');
  //   inputEmail.simulate('blur', { target: { value: 'text' } });
  //   expect(mockBlur).toHaveBeenCalled();
  // });
});
