import React from 'react';
import { screen, render } from '@testing-library/react';
import { mockedCertificates } from './certificate-table.variables';
import CertificateTable from '../../../../../containers/my-certificates/certificate-table/certificate-table';

jest.mock(
  '../../../../../containers/my-certificates/certificate-table/certificate-table.styles.js',
  () => ({
    useActiveStyles: () => ({}),
    useExpiringStyles: () => ({}),
    useNotActiveStyles: () => ({})
  })
);

jest.mock('../../../../../components/table/table.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({
    userData: { certificateExpires: '2022-10-16T05:00:00.000Z' }
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
