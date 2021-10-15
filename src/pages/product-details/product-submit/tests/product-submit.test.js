import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import Button from '@material-ui/core/Button';

import { theme } from '../../../../components/app/app-theme/app.theme';
import ProductSubmit from '../product-submit';
import { PDP_BUTTONS } from '../../../../translations/product-details.translations';

import { Language, Wishlist, Cart, Products, User, product } from './product-details.variables';

configure({ adapter: new Adapter() });

const mockSetSizeIsNotSelectedError = jest.fn();
const mockDispatch = jest.fn();

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

describe('Product submit tests', () => {
  let wrapper;
  const themeValue = theme('light');

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockImplementation((fn) => fn({ Language, Products, User, Wishlist, Cart }));

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductSubmit
          setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError}
          product={product}
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('should render wrapper', () => {
    expect(wrapper.exists('button')).toBe(true);
  });

  it('should click to Cart button', () => {
    const child = PDP_BUTTONS[Language.language].cartButton;
    const button = wrapper.find(Button).at(0);
    button.simulate('click');
    expect(button.props().children).toBe(child);
  });

  it('should click to inCart button', () => {
    const child = PDP_BUTTONS[Language.language].inCart;
    const Cart = {
      list: [
        {
          ...Products.productToSend,
          options: {
            size: {
              _id: '12443'
            }
          }
        }
      ]
    };
    mockUseSelector.mockImplementation((fn) => fn({ Language, Products, User, Wishlist, Cart }));

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductSubmit
          setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError}
          product={product}
        />
      </ThemeProvider>
    );
    const button = wrapper.find(Button).at(0);
    button.simulate('click');
    expect(button.props().children).toBe(child);
  });

  it('should click to BuyNow button', () => {
    const child = PDP_BUTTONS[Language.language].buyButton;
    const button = wrapper.find(Button).at(1);
    expect(button.props().children).toBe(child);
    button.simulate('click');
  });
});
