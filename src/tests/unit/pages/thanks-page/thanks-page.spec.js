import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThanksPage from '../../../../pages/thanks-page/thanks-page';
import { state } from './thanks-page.variables';

jest.mock('../../../../pages/thanks-page/thanks-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../services/local-storage.service');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

describe('ThanksPage component tests', () => {
  beforeEach(() => {
    render(
      <Router>
        <ThanksPage />
      </Router>
    );
  });

  it('ThanksPage should contain ThanksCard with post office address', () => {
    expect(screen.queryByText('Test office')).toBeInTheDocument();
  });
});
