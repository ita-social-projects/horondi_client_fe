import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../../components/app/app-theme/app.theme';
import FilledWishlist from '../filled-wishlist';
import WishlistItem from '../../wishlist-item/wishlist-item';
import items from './mockedItems';

Enzyme.configure({ adapter: new Adapter() });

const state = {
  language: 1,
  currency: 1
};

const themeValue = theme('light');
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('Wishlist component tests', () => {
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <FilledWishlist items={items} />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render filled-wishlist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should contain item', () => {
    expect(wrapper.exists(WishlistItem)).toBe(true);
  });
});
