import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import OrderHistoryItemProduct from '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product';
import {
  item,
  mockConstructor,
  nullProduct,
  translationsKey
} from './order-history-item-product.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';
import { DollarIcon } from '../../../../images/profile-icons';
import ThemeContext from '../../../../context/theme-context';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

jest.mock(
  '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product.styles',
  () => ({
    useStyles: () => ({})
  })
);

const themeValue = theme('light');
const themeContextProviderMockValues = [true, jest.fn(() => {})];
let wrapper;

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('OrderHistoryOrderItem component tests', () => {
  beforeEach(() => {
    wrapper = render(
      <MockedProvider mocks={mockConstructor}>
        <BrowserRouter>
          <ThemeProvider theme={themeValue}>
            <ThemeContext.Provider value={themeContextProviderMockValues}>
              <OrderHistoryItemProduct item={item} />
            </ThemeContext.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </MockedProvider>
    );
  });
  it('Should render OrderHistoryOrderItem', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders 7 cells in a row', () => {
    const cells = document.querySelectorAll('td');
    expect(cells.length).toBe(7);
  });
  it('renders <img/>', () => {
    const img = document.querySelector('img');
    expect(img).toBeTruthy();
  });
  it('product name is displayed in component', () => {
    expect(screen.getByText(new RegExp(translationsKey, 'i'))).toBeInTheDocument();
  });
});
describe('OrderHistoryOrderItem component tests,renders plug for product', () => {
  it('Renders plug for product', () => {
    render(
      <MockedProvider mocks={mockConstructor}>
        <BrowserRouter>
          <ThemeProvider theme={themeValue}>
            <ThemeContext.Provider value={themeContextProviderMockValues}>
              <OrderHistoryItemProduct item={nullProduct} />
            </ThemeContext.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </MockedProvider>
    );
    expect(screen.getByText('product.notAvailable')).toBeInTheDocument();
  });
});
