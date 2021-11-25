import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThanksPage from '../../../../pages/thanks-page/thanks-page';
import { state } from './thanks-page.variables';
import { deliveryTypes } from '../../../../configs';

jest.mock('../../../../pages/thanks-page/thanks-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../services/local-storage.service');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

describe('ThanksPage component tests', () => {
  it('ThanksPage should contain ThanksCard with post office address if NOVAPOST delivery chosen', () => {
    const { queryByText } = render(
      <Router>
        <ThanksPage />
      </Router>
    );
    expect(queryByText('Test office')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with post office address if UKRPOST delivery chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.UKRPOST;

    const { queryByText } = render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(queryByText('Test office')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with self delivery address if Selfpick chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.SELFPICKUP;

    const { queryByText } = render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(queryByText('thanksPage.thanksCard.selfDelivery')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with receiver address if Courier delivery chosen', () => {
    state.order.delivery.sentBy = deliveryTypes.UKRPOSTCOURIER;

    const { queryByText } = render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(queryByText('Test city, Test street, 1')).toBeInTheDocument();
  });

  it('ThanksPage should contain Loader until loading finished', () => {
    state.loading = true;

    const { getByTestId } = render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('ThanksPage should not contain ThanksCard until loading finished', () => {
    state.loading = true;

    const { queryByTestId } = render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(queryByTestId('thanks-card')).toBeNull();
  });
});
