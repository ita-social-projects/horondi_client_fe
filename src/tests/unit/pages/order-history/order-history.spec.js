import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import { fullMockedOrders, emptyMockedOrders } from './order-history.variables';
import OrderHistory from '../../../../pages/order-history/order-history';
import { DollarIcon } from '../../../../images/profile-icons';
import ThemeContext from '../../../../context/theme-context';
import { theme } from '../../../../components/app/app-theme/app.theme';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const themeValue = theme('light');
const themeContextProviderMockValues = [true, jest.fn(() => {})];

jest.mock('../../../../pages/order-history/order-history.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../containers/orders/order/empty-order/empty-order.styles', () => ({
  useStyles: () => ({})
}));

jest.mock(
  '../../../../containers/orders/order-history/order-history-item/order-history-item.styles.js',
  () => ({ useStyles: () => ({}) })
);

jest.mock('../../../../utils/date', () => ({
  getFormatDate: () => {}
}));

jest.mock('@apollo/client');

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

jest.mock('react-redux');
useSelector.mockImplementation(() => ({
  currency: 0
}));

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('OrderHistory component', () => {
  it('check the length of orderHistory when array is not empty', () => {
    useQuery.mockImplementation(() => ({
      ...fullMockedOrders
    }));
    const { getAllByText } = render(
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={themeContextProviderMockValues}>
          <Router>
            <OrderHistory />
          </Router>
        </ThemeContext.Provider>
      </ThemeProvider>
    );
    const text1 = getAllByText(/orderHistory/i);
    expect(text1).toHaveLength(4);
  });

  it('check if emptyTitle is defined', () => {
    useQuery.mockImplementation(() => ({
      ...emptyMockedOrders
    }));
    const { getAllByText } = render(
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={themeContextProviderMockValues}>
          <Router>
            <OrderHistory />
          </Router>
        </ThemeContext.Provider>
      </ThemeProvider>
    );
    const text2 = getAllByText(/emptyTitle/i);
    expect(text2).toBeDefined();
  });

  it('check pagination', () => {
    useQuery.mockImplementation(() => ({
      ...fullMockedOrders
    }));
    const { container } = render(
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={themeContextProviderMockValues}>
          <Router>
            <OrderHistory />
          </Router>
        </ThemeContext.Provider>
      </ThemeProvider>
    );
    const nextPageBtn = container.querySelector('button[aria-label="Go to next page"]');
    fireEvent.click(nextPageBtn);
    const x = container.querySelector('.Mui-selected');
    expect(x).toHaveAttribute('aria-current');
  });
});
