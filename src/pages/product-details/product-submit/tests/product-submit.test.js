import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { theme } from '../../../../components/app/app-theme/app.theme';
import ProductSubmit from '../product-submit';
import { PDP_BUTTONS, TOOLTIPS } from '../../../../translations/product-details.translations';

import { Language, Wishlist, Cart, Products, User } from './product-details.variables';

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
        <ProductSubmit setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError} />
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
        <ProductSubmit setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError} />
      </ThemeProvider>
    );
    const button = wrapper.find(Button).at(0);
    button.simulate('click');
    expect(button.props().children).toBe(child);
  });

  it('should click to wishList button', () => {
    const child = TOOLTIPS[Language.language].addWishful;
    const heard = wrapper.find(FavouriteBorderIcon).at(0);
    heard.props().onClick();
    expect(wrapper.find(Tooltip).at(0).props().title).toBe(child);
  });

  it('should click to inCart button', () => {
    const child = TOOLTIPS[Language.language].removeWishful;
    const Wishlist = {
      list: [{ ...Products.product }]
    };
    mockUseSelector.mockImplementation((fn) => fn({ Language, Products, User, Wishlist, Cart }));

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductSubmit setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError} />
      </ThemeProvider>
    );
    expect(wrapper.find(Tooltip).at(0).props().title).toBe(child);
    const button = wrapper.find(FavoriteIcon);
    button.simulate('click');
  });

  it('should click to BuyNow button', () => {
    const child = PDP_BUTTONS[Language.language].buyButton;
    const button = wrapper.find(Button).at(1);
    expect(button.props().children).toBe(child);
    button.simulate('click');
  });

  it('should call error in component', () => {
    const Products = {
      product: null
    };
    mockUseSelector.mockImplementation((fn) => fn({ Language, Products, User, Wishlist, Cart }));
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductSubmit setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError} />
      </ThemeProvider>
    );
    const button1 = wrapper.find(Button).at(0);
    const button2 = wrapper.find(Button).at(1);
    button1.simulate('click');
    button2.simulate('click');
    expect(mockSetSizeIsNotSelectedError).toHaveBeenCalledTimes(2);
  });

  it('should render component without User', () => {
    const User = {
      userData: null
    };
    mockUseSelector.mockImplementation((fn) => fn({ Language, Products, User, Wishlist, Cart }));
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductSubmit setSizeIsNotSelectedError={mockSetSizeIsNotSelectedError} />
      </ThemeProvider>
    );
    const button1 = wrapper.find(Button).at(0);
    button1.simulate('click');
    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });
});
