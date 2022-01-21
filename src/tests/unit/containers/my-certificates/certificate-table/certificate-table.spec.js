import React from 'react';
import { screen, render } from '@testing-library/react';
import { mockedCertificates } from './certificate-table.variables';
import CertificateTable from '../../../../../containers/my-certificates/certificate-table/certificate-table';

jest.mock(
  '../../../../../containers/my-certificates/certificate-table/certificate-table.styles.js',
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

describe('CertificateTable component', () => {
  beforeEach(() => {
    render(<CertificateTable {...mockedCertificates} />);
  });

  it('should render a table title', () => {
    const title = screen.getByText(/certificate.title/i);

    expect(title).toBeInTheDocument();
  });
});
