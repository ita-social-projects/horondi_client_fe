import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFromLocalStorage } from '../../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../../configs/index';
import Login from '../login';
import { Loader } from '../../../components/loader/loader';

jest.mock('../login.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../services/local-storage.service');

const dispatch = jest.fn();
let storage = {
  loginError: '',
  userLoading: false
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);

let theme = LIGHT_THEME;

getFromLocalStorage.mockImplementation(() => theme);

const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockSetFieldValue = jest.fn();
const mockBlur = jest.fn();

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormik: () => ({
    values: {},
    handleSubmit: mockSubmit,
    handleChange: mockChange,
    touched: { email: true, password: true },
    errors: {},
    setFieldValue: mockSetFieldValue,
    handleBlur: mockBlur
  })
}));

describe('Login page test', () => {
  it('Should render with Light theme', () => {
    const component = shallow(<Login />);
    expect(component.find('form')).toBeDefined();
  });

  it('Should renfder with Dark theme', () => {
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
    storage = {
      loginError: '',
      userLoading: true
    };
    const component = shallow(<Login />);
    expect(component.exists(Loader)).toBe(true);
  });
});
