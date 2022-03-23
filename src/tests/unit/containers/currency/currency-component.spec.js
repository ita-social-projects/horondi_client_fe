import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { DOLLAR_UNICODE, HRYVNIA_UNICODE } from '../../../../containers/currency/constants';
import CurrencyComponent from '../../../../containers/currency/currency-component';

describe('Currency-component', () => {
  const store = createStore(() => [], {});
  const handleChange = jest.fn();

  it('Should render the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );
    expect(getByText(DOLLAR_UNICODE)).toBeTruthy();
    expect(getByText(HRYVNIA_UNICODE)).toBeTruthy();
  });

  it('Should execute function when you click on one of the currency buttons', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );

    fireEvent.click(getByText(HRYVNIA_UNICODE), {
      handleChange: handleChange()
    });

    fireEvent.click(getByText(DOLLAR_UNICODE), {
      handleChange: handleChange()
    });

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
