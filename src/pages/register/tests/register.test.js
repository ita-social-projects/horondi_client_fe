import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { theme } from '../../../components/app/app-theme/app.theme';
import Register from '../register';
import mockStore from './mockStore';
import RegisterForm from '../register-from';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
let spyOnUseSelector;
let spyOnUseDispatch;
let mockDispatch;
let wrapper;

const mockToLocalStorage = jest.fn();
const mockPush = jest.fn();
// const mockSetShouldValidate = jest.fn();

jest.mock('../../../services/local-storage.service', () => ({
  __esModule: true,
  setToLocalStorage: () => mockToLocalStorage()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockPush
  })
}));

describe('Register component tests', () => {
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

    mockDispatch = jest.fn();

    spyOnUseSelector.mockImplementation(() => mockStore);
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <Register />
        </ThemeProvider>
      </BrowserRouter>
    );
    // console.log(wrapper.debug());
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyOnUseSelector.mockClear();
    wrapper = null;
  });

  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should be confirm email component', () => {
    mockStore.hasRegistered = true;
    expect(wrapper.find('Field[name="firstName"]')).toHaveLength(1);
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(0);
  });
  it('Should be register component', () => {
    mockStore.hasRegistered = false;
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(1);
    expect(wrapper.find('Field[name="firstName"]')).toHaveLength(0);
  });

  it('Should call setToLocalStorage', () => {
    mockStore.hasRegistered = true;
    act(() => {
      wrapper.find(Formik).props().onSubmit();
    });
    expect(mockToLocalStorage).toHaveBeenCalled();
  });

  it('Should return back on cancel register', () => {
    mockStore.hasRegistered = true;
    act(() => {
      wrapper.find('button').props().onClick();
    });
    expect(mockPush).toHaveBeenCalled();
  });

  it('Should validate on register form', () => {
    spyOnUseSelector.mockImplementation(() => ({ ...mockStore, hasRegistered: false }));
    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <Register />
        </ThemeProvider>
      </BrowserRouter>
    );

    console.log(wrapper.find(RegisterForm).props());
    act(() => {
      wrapper.find(RegisterForm).props().setShouldValidate();
    });
    console.log(wrapper.find(Formik).props().validateOnBlur);
    expect(wrapper.find(Formik).props().validateOnBlur).toBe(true);
  });
});
