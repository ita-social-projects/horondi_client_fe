import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CertificateThanksCard from '../../../../pages/certificate-thanks-page/certificate-thanks-card/certificate-thanks-card';
import {
  certificate,
  count
} from '../../pages/certificate-thanks-page/certificate-thanks-page.variables';

describe('Tests for Certificate Thanks Card', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CertificateThanksCard
          count={count}
          name={certificate.name}
          value={certificate.value}
          email={certificate.email}
          paymentStatus={certificate.paymentStatus}
          dateStart={certificate.dateStart}
          dateEnd={certificate.dateEnd}
        />
      </BrowserRouter>
    );
  });

  it('should render Certificate Thanks Card', () => {
    screen.queryByText(/HOR12345678/);
    screen.debug();
    expect(screen.queryByText(/HOR12345678/)).toBeInTheDocument();
    expect(screen.queryByText(/500/)).toBeInTheDocument();
    expect(screen.queryByText('sashko@gmail.com')).toBeInTheDocument();
    expect(screen.queryByText('PAID')).toBeInTheDocument();
    expect(screen.queryByText('2022-02-03T12:14:01.671Z')).toBeInTheDocument();
  });
});
