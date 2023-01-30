import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import OrderTable from '../order-table';
import ConfirmDialog from '../../../../../components/confirm-dialog';
import { mockGetProductById, props, modalProps, mockCartOperations } from './order-table.variables';
import { DollarIcon } from '../../../../../images/profile-icons';
import { theme } from '../../../../../components/app/app-theme/app.theme';
import ThemeContext from '../../../../../context/theme-context';

const themeValue = theme('light');

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const themeContextProviderMockValues = [true, jest.fn(() => {})];

jest.mock('../order-table.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../../components/modal/modal.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../cart/cart-item/cart-item.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);

const testUseSelector = (lang) => {
  useSelector.mockImplementation(() => ({
    currency: 0
  }));
};

describe('test <OrderTable /> component', () => {
  it('should render <OrderTable />', () => {
    testUseSelector(0);
    render(
      <MockedProvider mocks={[mockGetProductById]} addTypename={false}>
        <ThemeProvider theme={themeValue}>
          <ThemeContext.Provider value={themeContextProviderMockValues}>
            <BrowserRouter>
              <OrderTable {...props} cartOperations={mockCartOperations} />
            </BrowserRouter>
          </ThemeContext.Provider>
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.queryByText(/cart.titleFilled/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.product/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.size/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.price/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.quantity/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.toPay/i)).toBeInTheDocument();
    expect(screen.queryByText(/cart.actions/i)).toBeInTheDocument();
  });
});

describe('test <Modal/> component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeValue}>
        <ThemeProvider theme={themeValue}>
          <ThemeContext.Provider value={themeContextProviderMockValues}>
            <BrowserRouter>
              <ConfirmDialog {...modalProps} />
            </BrowserRouter>
          </ThemeContext.Provider>
        </ThemeProvider>
      </ThemeProvider>
    );
  });

  it('should render <ConfirmDialog /> component', () => {
    expect(screen.queryByText(modalProps.message)).toBeInTheDocument();
    expect(screen.queryByText(modalProps.confirmButtonText)).toBeInTheDocument();
    expect(screen.queryByText(modalProps.dismisButtonText)).toBeInTheDocument();
    expect(screen.queryByText(modalProps.title)).toBeInTheDocument();
  });

  it('call onAction with true', () => {
    const confirmButton = screen.queryByText(modalProps.confirmButtonText);
    act(() => {
      fireEvent.click(confirmButton);
    });

    expect(modalProps.onAction).toHaveBeenCalledWith(true);
  });

  it('call onAction with false', () => {
    const cancelButton = screen.queryByText(modalProps.dismisButtonText);
    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(modalProps.onAction).toHaveBeenCalledWith(false);
  });

  it('call onAction with false', () => {
    const closeModalIcon = screen.queryByTestId('closeModalIcon');
    act(() => {
      fireEvent.click(closeModalIcon);
    });

    expect(modalProps.onAction).toHaveBeenCalledWith(false);
  });
});
