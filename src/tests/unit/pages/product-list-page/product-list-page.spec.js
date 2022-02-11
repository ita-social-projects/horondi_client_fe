import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/styles';

import { mockAllFilteredProducts } from './product-list-page.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';
import ProductListPage from '../../../../pages/product-list-page/product-list-page';

const mockHistoryPush = jest.fn();
const history = createMemoryHistory();
const themeValue = theme('light');
let mockNameFilter = '';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({ search: `?sort=popularity&nameFilter=${mockNameFilter}` }),
  useHistory: () => ({ push: mockHistoryPush })
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({ currency: 0 })
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

describe('ProductListPage with correct values', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mockAllFilteredProducts} addTypename>
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

describe('ProductListPage with uncorrect values', () => {
  beforeAll(() => {
    mockNameFilter = 'wrong_text';
    render(
      <MockedProvider mocks={mockAllFilteredProducts} addTypename>
        <ThemeProvider theme={themeValue}>
          <Router history={history}>
            <ProductListPage width='sm' />
          </Router>
        </ThemeProvider>
      </MockedProvider>
    );
  });

  it('should render not-found-product image', async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getByTestId('backpack-icon')).toBeDefined();
  });
});
