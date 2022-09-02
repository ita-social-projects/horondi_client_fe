import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThanksPage from '../../../../pages/thanks-page/thanks-page';

jest.mock('../../../../pages/thanks-page/thanks-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../../pages/thanks-page/thanks-card/thanks-card.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ orderNumber: '1637789999938' })
}));

describe('ThanksPage component tests', () => {
  it('ThanksPage should contain ThanksCard with order number', () => {
    render(
      <Router>
        <ThanksPage />
      </Router>
    );

    expect(screen.queryByText(/1637789999938/i)).toBeInTheDocument();
  });
});
