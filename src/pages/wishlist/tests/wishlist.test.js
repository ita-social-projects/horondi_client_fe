import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../components/app/app-theme/app.theme';
import Wishlist from '../wishlist';
import mockStore from './mockStore';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
jest.mock('react-redux');

const dispatch = jest.fn();
const state = mockStore;

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('Wishlist component tests', () => {
  beforeEach(() => {
    wrapper = shallow(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <Wishlist />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Wishlist', () => {
    expect(wrapper).toBeDefined();
  });
});
