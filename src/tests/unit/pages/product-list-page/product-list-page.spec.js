import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/styles';

import { mockAllFilteredProducts } from './product-list-page.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';
import ProductListPage from '../../../../pages/product-list-page/product-list-page';
import { DollarIcon } from '../../../../images/profile-icons';

const mockIsInWishlist = jest.fn();
const mockAddToWishlist = jest.fn();
const mockRemoveFromWishlist = jest.fn();
const mockWishlist = {};
const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const history = createMemoryHistory();
const themeValue = theme('light');
const isWrongNameFilter = false;
jest.mock('../../../../hooks/use-wishlist', () => ({
  useWishlist: () => ({
    isInWishlist: mockIsInWishlist,
    wishlist: mockWishlist,
    wishlistOperations: {
      addToWishlist: mockAddToWishlist,
      removeFromWishlist: mockRemoveFromWishlist
    }
  })
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({ currency: 0 }),
  useDispatch: () => jest.fn()
}));

jest.mock('../../../../pages/product-list-page/product-list-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../containers/search-bar/search-bar.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  })
}));

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('ProductListPage with correct values', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mockAllFilteredProducts(isWrongNameFilter)} addTypename>
        <ThemeProvider theme={themeValue}>
          <Router history={history}>
            <ProductListPage width='sm' />
          </Router>
        </ThemeProvider>
      </MockedProvider>
    );
  });

  it('should render loader', () => {
    const loader = screen.findByTestId('loader');

    expect(loader).toBeDefined();
  });

  it('should render products', async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    const products = await screen.getAllByTestId('product');

    expect(products).toHaveLength(2);
  });
});
