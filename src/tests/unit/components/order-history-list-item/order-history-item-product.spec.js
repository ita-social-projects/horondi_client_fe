import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderHistoryItemProduct from '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product';
import { item, nullProduct, translationsKey } from './order-history-item-product.variables';

jest.mock(
  '../../../../containers/orders/order-history/order-history-item-product/order-history-item-product.styles',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe.skip('OrderHistoryOrderItem component tests', () => {
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

  it('Renders plug for product', () => {
    render(<OrderHistoryItemProduct item={nullProduct} currency={1} />);
    expect(screen.getByText('product.notAvailable')).toBeInTheDocument();
  });
});
