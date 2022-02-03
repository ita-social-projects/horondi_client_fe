import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import OrderTable from '../order-table';
import Modal from '../../../../../components/modal/modal';
import { mockGetProductById, props, modalProps, mockCartOperations } from './order-table.variables';

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
    currency: 0
  }));
};

describe('test <OrderTable /> component', () => {
  it('should render <OrderTable />', () => {
    testUseSelector(0);
    const { getByText } = render(
      <MockedProvider mocks={[mockGetProductById]} addTypename={false}>
        <OrderTable {...props} cartOperations={mockCartOperations} />
      </MockedProvider>
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
