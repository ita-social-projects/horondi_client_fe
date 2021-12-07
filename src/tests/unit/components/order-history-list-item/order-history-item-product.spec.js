import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderHistoryItemProduct from '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product';
import { item, translationsKey } from './order-history-item-product.variables';

jest.mock(
  '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product.styles',
  () => ({
    useStyles: () => ({})
  })
);

describe('OrderHistoryOrderItem component tests', () => {
  it('Should render OrderHistoryOrderItem', () => {
    const component = shallow(<OrderHistoryItemProduct item={item} currency={0} />);
    expect(component).toBeDefined();
  });
  it('renders 6 cells in a row', () => {
    render(<OrderHistoryItemProduct item={item} currency={0} />);
    const cells = document.querySelectorAll('td');
    expect(cells.length).toBe(6);
  });
  it('renders <img/>', () => {
    render(<OrderHistoryItemProduct item={item} currency={0} />);
    const img = document.querySelector('img');
    expect(img).toBeTruthy();
  });
  it('product name is displayed in component', () => {
    render(<OrderHistoryItemProduct item={item} currency={1} />);
    expect(screen.getByText(new RegExp(translationsKey, 'i'))).toBeInTheDocument();
  });
});
