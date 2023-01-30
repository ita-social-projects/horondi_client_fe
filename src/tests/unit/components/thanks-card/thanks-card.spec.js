import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThanksCard from '../../../../pages/thanks-page/thanks-card/thanks-card';

jest.mock('../../../../pages/thanks-page/thanks-card/thanks-card.styles', () => ({
  useStyles: () => ({})
}));

describe('Tests for Thanks Card', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThanksCard orderNumber='1637789999938' />
      </BrowserRouter>
    );
  });

  it('should render Thanks Card', () => {
    expect(screen.queryByText(/1637789999938/i)).toBeInTheDocument();
  });
});
