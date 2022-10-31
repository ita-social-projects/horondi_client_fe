import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../../components/app/app-theme/app.theme';
import ThemeContext from '../../../../context/theme-context';
import { DollarIcon } from '../../../../images/profile-icons';
import WishlistItem from '../wishlist-item';
import { mockGetProductById } from './wishlist-item.variables';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

jest.mock('../wishlist-item.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../hooks/use-wishlist-loader', () => ({
  __esModule: true,
  default: () => ({ loading: false, error: null, wishlist: {} })
}));

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}));

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

const mockIsInCart = jest.fn();
const mockAddToCart = jest.fn();
const mockCartOperations = { addToCart: mockAddToCart };
const themeContextProviderMockValues = [true, jest.fn(() => {})];

const dispatch = jest.fn();
const state = {
  currency: 0,
  userData: null
};
const themeValue = theme('light');

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

const props = {
  item: {
    sizes: [{ size: { available: true }, price: [{ value: 10 }, { value: 20 }] }],
    images: { primary: { thumbnail: '' } },
    name: [{ value: '' }, { value: '' }],
    category: { name: ['', { value: 'bags' }] }
  },
  setModalItem: () => null,
  currency: 0,
  setModalVisibility: () => null,
  cartOperations: mockCartOperations,
  isInCart: mockIsInCart
};
describe('WishlistItem component tests', () => {
  it('Should render WishlistItem', () => {
    render(
      <MockedProvider mocks={[mockGetProductById]} addTypename={false}>
        <ThemeProvider theme={themeValue}>
          <ThemeContext.Provider value={themeContextProviderMockValues}>
            <BrowserRouter>
              <WishlistItem {...props} />
            </BrowserRouter>
          </ThemeContext.Provider>
        </ThemeProvider>
      </MockedProvider>
    );
    const cartButton = screen.getByText('product.pdpButtons.cartButton');
    expect(cartButton).toBeInTheDocument();
  });
});
