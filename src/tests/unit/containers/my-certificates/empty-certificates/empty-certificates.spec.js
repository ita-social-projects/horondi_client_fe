import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import EmptyCertificates from '../../../../../containers/my-certificates/empty-certificates';

jest.mock(
  '../../../../../containers/my-certificates/empty-certificates/empty-certificates.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('EmptyCertificates component test', () => {
  beforeEach(() => {
    render(
      <Router>
        <EmptyCertificates />
      </Router>
    );
  });

  it('should render an svg of empty certificate for light palette', () => {
    const element = screen.getByTestId('custom-svg-light');

    expect(element).toBeInTheDocument();
  });

  it('check if the button is enabled,', () => {
    const buyButton = screen.getByText(/certificate.buy/i);

    expect(buyButton.closest('button')).not.toBeDisabled();
  });

  it('should buy button on page', () => {
    const buyButton = screen.getByText(/certificate.buy/i);

    expect(buyButton).toBeInTheDocument();
  });
});
