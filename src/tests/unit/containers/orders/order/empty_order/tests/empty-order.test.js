import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import EmptyOrder from '../../../../../../../containers/orders/order/empty-order/index';
import { theme } from '../../../../../../../components/app/app-theme/app.theme';

const themeValue = theme('light');

describe('Empty order component tests', () => {
  const buttonTitle = 'до каталогу';
  const emptyTitle = 'Ваш кошик порожній';
  let container;

  beforeEach(() => {
    ({ container } = render(
      <ThemeProvider theme={themeValue}>
        <Router>
          <EmptyOrder emptyTitle={emptyTitle} buttonTitle={buttonTitle} />
        </Router>
      </ThemeProvider>
    ));
  });

  it('should render title', () => {
    const findeElement = container.querySelector('h2');

    expect(findeElement.textContent).toBe('Ваш кошик порожній');
  });

  it('render text in button', () => {
    const linkItem = screen.getByText('до каталогу');

    expect(linkItem).toBeInTheDocument();
  });
});
