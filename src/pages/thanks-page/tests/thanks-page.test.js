import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../components/app/app-theme/app.theme';
import ThanksPage from '../thanks-page';
import mockStore from './mockStore';
import OrderData from '../order-data/order-data';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
jest.mock('react-redux');

const dispatch = jest.fn();
const state = mockStore;

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('ThanksPage component tests', () => {
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <ThanksPage />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render ThanksPage', () => {
    expect(wrapper).toBeDefined();
  });

  it('ThanksPage should contain OrderData', () => {
    expect(wrapper.exists(OrderData)).toBe(true);
  });

  it('Cart table should renders', () => {
    expect(wrapper.find('.MuiTableHead-root')).toHaveLength(1);
  });

  it('Cart should contain title', () => {
    expect(wrapper.exists('h2')).toBe(true);
  });
});
