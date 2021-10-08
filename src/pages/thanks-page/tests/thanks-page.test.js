import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../components/app/app-theme/app.theme';
import ThanksPage from '../thanks-page';
import mockStore from './mockStore';

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
    wrapper = shallow(
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

  it('Cart table should renders', () => {
    expect(wrapper.find('.MuiTableHead-root')).toHaveLength(1);
  });
});
