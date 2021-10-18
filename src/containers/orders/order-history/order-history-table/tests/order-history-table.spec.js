import React from 'react';
import { useSelector } from 'react-redux';
import OrderHistoryTable from '../order-history-table.js';

jest.mock('react-redux');
jest.mock('../order-history-table.style.js', () => ({
  useStyles: () => ({})
}));
useSelector.mockImplementation(() => ({
  language: 0,
  currency: 1
}));
const items = [{}, {}];

describe('OrderHistoryTable component tests', () => {
  it('Should render OrderHistoryTable', () => {
    const component = shallow(<OrderHistoryTable items={items} />);
    expect(component).toBeDefined();
  });
});
