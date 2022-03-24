import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EmptyOrder from '../../../../../../../containers/orders/order/empty-order/index';

jest.mock('../../../../../../../containers/orders/order/empty-order/empty-order.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('Empty order component tests', () => {
  const buttonTitle = 'до каталогу';
  const emptyTitle = 'Ваш кошик порожній';

  it('should render title', () => {
    const { container } = render(
      <Router>
        <EmptyOrder emptyTitle={emptyTitle} />
      </Router>
    );
    const findeElement = container.querySelector('h2');

    expect(findeElement.textContent).toBe('Ваш кошик порожній');
  });

  it('render text in button', () => {
    render(
      <Router>
        <EmptyOrder buttonTitle={buttonTitle} />
      </Router>
    );
    const linkItem = screen.getByText('до каталогу');

    expect(linkItem).toBeInTheDocument();
  });
});
