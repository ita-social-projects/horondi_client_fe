import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';

import CurrencyComponent from '../../../../containers/currency/currency-component';

jest.mock('../../../../containers/currency/currency.styles', () => ({
  useStyles: () => ({})
}));

const hryvniaUnicode = '\u20b4';
const dollarUnicode = '\u0024';

describe('Currency-component', () => {
  const store = createStore(() => [], {});
  const currencyHandler = jest.fn();

  let dollarButton;
  let hryvniaButton;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );

    dollarButton = screen.getByText(dollarUnicode);
    hryvniaButton = screen.getByText(hryvniaUnicode);
  });

  it('Should render the component', () => {
    expect(dollarButton).toBeTruthy();

    expect(hryvniaButton).toBeTruthy();
  });

  it('Should execute function when you click on one of the currency buttons', () => {
    fireEvent.click(hryvniaButton, {
      currencyHandler: currencyHandler()
    });

    fireEvent.click(dollarButton, {
      currencyHandler: currencyHandler()
    });

    expect(currencyHandler).toHaveBeenCalledTimes(2);
  });
});
