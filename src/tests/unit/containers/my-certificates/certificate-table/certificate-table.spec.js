import React from 'react';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { mockedCertificates } from './certificate-table.variables';
import CertificateTable from '../../../../../containers/my-certificates/certificate-table/certificate-table';
import { theme } from '../../../../../components/app/app-theme/app.theme';

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

const themeValue = theme('light');

describe('CertificateTable component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeValue}>
        <CertificateTable {...mockedCertificates} />
      </ThemeProvider>
    );
  });

  it('should render a table title', () => {
    const title = screen.getByText(/certificate.title/i);

    expect(title).toBeInTheDocument();
  });
});
