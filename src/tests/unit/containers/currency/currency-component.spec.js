import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { DOLLAR_UNICODE, HRYVNIA_UNICODE } from '../../../../containers/currency/constants';
import CurrencyComponent from '../../../../containers/currency/currency-component';

describe('Currency-component', () => {
  const store = createStore(() => [], {});
  const handleChange = jest.fn();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );
  });

  it('Should render the component', () => {
    expect(screen.getByText(DOLLAR_UNICODE)).toBeTruthy();
    expect(screen.getByText(HRYVNIA_UNICODE)).toBeTruthy();
  });

  it('Should execute function when you click on one of the currency buttons', () => {
    fireEvent.click(screen.getByText(HRYVNIA_UNICODE), {
      handleChange: handleChange()
    });

    fireEvent.click(screen.getByText(DOLLAR_UNICODE), {
      handleChange: handleChange()
    });

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
