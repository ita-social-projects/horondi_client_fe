import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../login';
import { theme } from '../../../components/app/app-theme/app.theme';
import { Loader } from '../../../components/loader/loader';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();
const mockChange = jest.fn();
const mockSetFieldValue = jest.fn();
const mockBlur = jest.fn();
const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

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
  let wrapper;

  beforeEach(() => {
    const themeValue = theme('light');
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
      loginError: '',
      userLoading: false,
      language: 0,
      snackBarStatus: '',
      snackBarSeverity: '',
      snackBarMessage: ['']
    });

    wrapper = mount(
      <Router>
        <ThemeProvider theme={themeValue}>
          <Login />
        </ThemeProvider>
      </Router>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('Should render Login page', () => {
    expect(wrapper.find('form')).toBeDefined();
  });

  it('Should render Loader', () => {
    mockUseSelector.mockReturnValue({
      language: '0',
      userLoading: true
    });
    wrapper = mount(
      <ThemeProvider theme={theme('dark')}>
        <Login />
      </ThemeProvider>
    );
    expect(wrapper.exists(Loader)).toBe(true);
  });

  it('Should simulate submit event', () => {
    wrapper = mount(
      <Router>
        <ThemeProvider theme={theme('light')}>
          <Login />
        </ThemeProvider>
      </Router>
    );
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');
    wrapper.find('form').simulate('submit', event);
    expect(event.preventDefault).toBeCalled();
    mockUseSelector.mockClear();
  });
});
