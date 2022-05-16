import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { order, mock } from './order-history-item.variables';
import OrderHistoryItem from '../../../../containers/orders/order-history/order-history-item/order-history-item.js';
import { theme } from '../../../../components/app/app-theme/app.theme';
import { order } from './order-history-item.variables';
import { DollarIcon } from '../../../../images/profile-icons.js';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

jest.mock('react-redux');
jest.mock(
  '../../../../containers/orders/order-history/order-history-item/order-history-item.styles.js',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('../../../../utils/date', () => ({
  getFormatDate: () => {}
}));

useSelector.mockImplementation(() => ({
  currency: 1
}));

const themeValue = theme('light');
let wrapper;
jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

jest.mock('../../../../hooks/use-currency.js', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('OrderHistoryOrder component tests', () => {
  beforeEach(() => {
    wrapper = render(
      <MockedProvider mocks={mock}>
        <BrowserRouter>
          <ThemeProvider theme={themeValue}>
            <OrderHistoryItem order={order} />
          </ThemeProvider>
        </BrowserRouter>
      </MockedProvider>
    );
  });

  it('Should render OrderHistoryOrder', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders 6 cells in a row', () => {
    const cells = document.querySelectorAll('td');
    expect(cells.length).toBe(6);
  });
  it('renders delivery status, order number and common price', () => {
    expect(screen.getByText(/created/i)).toBeInTheDocument();
    expect(screen.getByText(/1634215702438/)).toBeInTheDocument();
    expect(screen.getAllByText(/total/i).length).toBe(2);
  });
});
