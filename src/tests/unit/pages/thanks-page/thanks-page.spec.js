import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import ThanksPage from '../../../../pages/thanks-page/thanks-page';
import { mocks, state } from './thanks-page.variables';
import { deliveryTypes } from '../../../../configs';
import { getFromLocalStorage } from '../../../../services/local-storage.service';

jest.mock('../../../../pages/thanks-page/thanks-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../../pages/thanks-page/thanks-card/thanks-card.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('../../../../services/local-storage.service');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);
getFromLocalStorage.mockImplementation(() => true);

describe('ThanksPage component tests', () => {
  it('ThanksPage should contain ThanksCard with post office address if NOVAPOST delivery chosen', () => {
    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );
    expect(queryByText('Test office')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with post office address if UKRPOST delivery chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.UKRPOST;

    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );

    expect(queryByText('Test office')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with self delivery address if Selfpick chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.SELFPICKUP;

    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );

    expect(queryByText('thanksPage.thanksCard.selfDelivery')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with receiver address if Courier delivery chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.UKRPOSTCOURIER;

    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );

    expect(queryByText('Test city, Test street, 1')).toBeInTheDocument();
  });

  it('ThanksPage should contain Loader until loading finished', () => {
    state.loading = true;

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('ThanksPage should not contain ThanksCard until loading finished', () => {
    state.loading = true;

    const { queryByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <ThanksPage />
        </Router>
      </MockedProvider>
    );

    expect(queryByTestId('thanks-card')).toBeNull();
  });
});
