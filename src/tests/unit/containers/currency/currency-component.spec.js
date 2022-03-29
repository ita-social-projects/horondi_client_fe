import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { DOLLAR_UNICODE, HRYVNIA_UNICODE } from '../../../../containers/currency/constants';
import CurrencyComponent from '../../../../containers/currency/currency-component';

jest.mock('../../../../containers/currency/currency.styles', () => ({
  useStyles: () => ({})
}));

describe('Currency-component', () => {
  const store = createStore(() => [], {});
  const handleChange = jest.fn();

  let dollarButton;
  let hryvniaButton;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );

    dollarButton = screen.getByText(DOLLAR_UNICODE);
    hryvniaButton = screen.getByText(HRYVNIA_UNICODE);
  });

  it('Should render the component', () => {
    expect(dollarButton).toBeTruthy();

    expect(hryvniaButton).toBeTruthy();
  });

  it('Should execute function when you click on one of the currency buttons', () => {
    fireEvent.click(hryvniaButton, {
      handleChange: handleChange()
    });

    fireEvent.click(dollarButton, {
      handleChange: handleChange()
    });

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
