import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';

import { theme } from '../../../../components/app/app-theme/app.theme';
import ProductSubmit from '../product-submit';

import { Language, Wishlist, Cart, Products, User, product } from './product-details.variables';

const mockSetSizeIsNotSelectedError = jest.fn();
const mockDispatch = jest.fn();
jest.mock('../product-submit.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../hooks/use-add-product-to-wishlist-handler', () => ({
  __esModule: true,
  default: () => [true, () => null]
}));

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
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('should render wrapper', () => {
    expect(wrapper.exists('button')).toBe(true);
  });

  it('should click to Cart button', () => {
    const button = wrapper.find(Button).at(0);
    button.simulate('click');
    expect(button.props().children).toBe('product.pdpButtons.cartButton');
  });

  it('should click to inCart button', () => {
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
    expect(button.props().children).toBe('product.pdpButtons.inCart');
  });

  it('should click to BuyNow button', () => {
    const button = wrapper.find(Button).at(1);
    expect(button.props().children).toBe('product.pdpButtons.buyButton');
    button.simulate('click');
  });
});
