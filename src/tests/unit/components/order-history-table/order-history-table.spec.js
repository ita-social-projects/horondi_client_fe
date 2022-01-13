import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import OrderHistoryTable from '../../../../containers/orders/order-history/order-history-table/order-history-table.js';

jest.mock('react-redux');
jest.mock(
  '../../../../containers/orders/order-history/order-history-table/order-history-table.style.js',
  () => ({
    useStyles: () => ({})
  })
);
useSelector.mockImplementation(() => ({
  currency: 1
}));
const items = [];

describe('OrderHistoryTable component tests', () => {
  it('Should render OrderHistoryTable', () => {
    const component = shallow(<OrderHistoryTable items={items} />);
    expect(component).toBeDefined();
  });
  it('renders table', () => {
    render(<OrderHistoryTable items={items} />);
    expect(screen.getByRole('table')).toBeTruthy();
  });
  it('renders 5 cells in a row', () => {
    render(<OrderHistoryTable items={items} />);
    const cells = document.querySelectorAll('th');
    expect(cells.length).toBe(6);
  });
});
