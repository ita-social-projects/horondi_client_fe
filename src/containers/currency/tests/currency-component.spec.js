import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as reactRedux from 'react-redux';
import CurrencyComponent from '../currency-component';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const store = createStore(() => [], {});

describe('Currency component', () => {
  it('Should render', () => {
    useSelectorMock.mockReturnValue({ currency: 0 });
    render(
      <Provider store={store}>
        <CurrencyComponent />
      </Provider>
    );
    screen.debug();

    // useSelectorMock.mockReturnValue({currency: 1})
    // fireEvent.click(screen.getByRole('button'))
    // expect(handleChange).toHaveBeenCalledTimes(1)
  });
});
