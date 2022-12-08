import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

import Register from '../register.js';
import { theme } from '../../../components/app/app-theme/app.theme';

jest.mock('react-redux');
jest.mock('../register.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('connected-react-router', () => ({
  push: 0
}));
jest.mock('../../../services/local-storage.service', () => ({
  __esModule: true,
  setToLocalStorage: () => mockToLocalStorage(),
  getFromLocalStorage: () => jest.fn()
}));
window.FB = { init: jest.fn() };

const themeValue = theme('light');
const dispatch = jest.fn();
const mockToLocalStorage = jest.fn();
const mockStore = {
  language: 0,
  loading: false,
  registerError: ''
};
let wrapper;

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => mockStore);

describe('Register component tests', () => {
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <Register />
        </ThemeProvider>
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });
  it('Should be confirm email component', () => {
    mockStore.hasRegistered = true;
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(0);
  });
  it('Should be register component', () => {
    mockStore.hasRegistered = false;
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(1);
    expect(wrapper.find('Field[name="firstName"]')).toHaveLength(0);
  });
});
