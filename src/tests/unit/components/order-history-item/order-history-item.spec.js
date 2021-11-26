import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import OrderHistoryItem from '../../../../containers/orders/order-history/order-history-item/order-history-item.js';
import { order } from './order-history-item.variables';

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

describe('OrderHistoryOrder component tests', () => {
  it('Should render OrderHistoryOrder', () => {
    const component = shallow(<OrderHistoryItem order={order} />);
    expect(component).toBeDefined();
  });
  it('renders delivery status, order number and common price', () => {
    render(<OrderHistoryItem order={order} />);
    expect(screen.getByText(/created/i)).toBeInTheDocument();
    expect(screen.getByText(/1634215702438/)).toBeInTheDocument();
    expect(screen.getAllByText(/total/i).length).toBe(2);
  });
});
