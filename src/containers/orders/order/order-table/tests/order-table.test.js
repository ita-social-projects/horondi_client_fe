import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import OrderTable from '../order-table';
import Modal from '../../../../../components/modal/modal';

jest.mock('../order-table.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../../components/modal/modal.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../cart/cart-item/cart-item.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);

const testUseSelector = (lang) => {
  useSelector.mockImplementation(() => ({
    language: lang,
    currency: 0
  }));
};

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

const props = {
  cartLoading: true,
  cartQuantityLoading: false,
  items: [
    {
      sizeAndPrice: {
        size: {
          _id: 'test',
          name: 'S'
        },
        price: [
          {
            value: 1000,
            currency: 'UAH'
          }
        ]
      }
    }
  ],
  user: {}
};

const modalProps = {
  language: 1,
  message: 'test',
  isOpen: true,
  onAction: jest.fn()
};

const mockGetCartItem = jest.fn().mockReturnValue({
  sizeAndPrice: {
    size: {
      _id: 'test',
      name: 'S'
    },
    price: [
      {
        value: 1000,
        currency: 'UAH'
      }
    ]
  }
});

const mockGetTotalPrice = jest.fn();
const mockChangeQuantity = jest.fn();
const mockChangeSize = jest.fn();

const mockCartOperations = {
  getTotalPrice: mockGetTotalPrice,
  changeQuantity: mockChangeQuantity,
  getCartItem: mockGetCartItem,
  changeSize: mockChangeSize,
  removeFromCart: jest.fn()
};

describe('test <OrderTable /> component', () => {
  it('should render <OrderTable />', () => {
    testUseSelector(0);
    const { getByText } = render(
      <BrowserRouter>
        <MockedProvider>
          <OrderTable {...props} cartOperations={mockCartOperations} />
        </MockedProvider>
      </BrowserRouter>
    );
    const productCell = getByText(/product/i);
    expect(productCell).toBeInTheDocument();
  });
});

describe('test <Modal/> component', () => {
  beforeEach(() => {
    render(<Modal {...modalProps} />);
  });

  it('should render <Modal /> component', () => {
    expect(screen.queryByText(modalProps.message)).toBeInTheDocument();
    expect(screen.queryByText('common.buttons.confirm')).toBeInTheDocument();
    expect(screen.queryByText('common.buttons.cancel')).toBeInTheDocument();
    expect(screen.queryByText('common.modalHeader')).toBeInTheDocument();
  });

  it('call onAction with true', () => {
    const confirmButton = screen.queryByText('common.buttons.confirm');
    act(() => {
      fireEvent.click(confirmButton);
    });

    expect(modalProps.onAction).toHaveBeenCalledWith(true);
  });

  it('call onAction with false', () => {
    const cancelButton = screen.queryByText('common.buttons.cancel');
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
