import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CertificateThanksPage from '../../../../pages/certificate-thanks-page/certificate-thanks-page';
import { mocks } from './certificate-thanks-page.variables';

jest.mock('../../../../pages/certificate-thanks-page/certificate-thanks-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../services/local-storage.service');

jest.mock('react-router', () => ({
  useLocation: () => ({
    search: jest.fn(),
    pathname: 'localhost:3000/certificatethanks/e140379134c17f7d69c2e47d4f08a8b99137cdf1',
    state: { certificatesOrderId: 'e140379134c17f7d69c2e47d4f08a8b99137cdf1' }
  })
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

jest.mock(
  '../../../../pages/certificate-thanks-page/certificate-thanks-card/certificate-thanks-card',
  () =>
    function CertificateCard() {
      return <div>CertificateCard</div>;
    }
);

const setLoading = jest.fn();

useState.mockImplementation(jest.requireActual('react').useState);

describe('CertificateThanksPage component tests', () => {
  it('CertificateThanksPage should contain Loader until loading finished', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CertificateThanksPage />
      </MockedProvider>
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('ThanksPage should contain ThanksCard with post office address', () => {
    useState.mockImplementation(() => [false, setLoading]);

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CertificateThanksPage />
      </MockedProvider>
    );

    expect(getByText(/CertificateCard/)).toBeInTheDocument();
  });
});
