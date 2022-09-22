import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CertificateThanksCard from '../../../../pages/certificate-thanks-page/certificate-thanks-card/certificate-thanks-card';
import { certificate } from '../../pages/certificate-thanks-page/certificate-thanks-page.variables';

describe('Tests for Certificate Thanks Card', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CertificateThanksCard
          name={certificate.name}
          value={certificate.value}
          email={certificate.email}
        />
      </BrowserRouter>
    );
  });

  it('should render Certificate Thanks Card', () => {
    expect(screen.queryByText('thanksPage.thanksCard.thanksForBuy')).toBeInTheDocument();
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
});
