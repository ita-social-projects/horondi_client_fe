import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { mockedCertificateItems } from './filled-certificates.variables';
import FilledCertificates from '../../../../../containers/my-certificates/filled-certificates/filled-certificates';
import Modal from '../../../../../components/modal/modal';
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
const props = { ...mockedCertificateItems };
const themeValue = theme('light');

describe('FilledCertificates component test', () => {
  it('should render FilledCertificate component', () => {
    const wrapper = render(
      <ThemeProvider theme={themeValue}>
        <Router>
          <FilledCertificates {...props} />
          <Modal />
        </Router>
      </ThemeProvider>
    );

    expect(wrapper).toBeDefined();
  });

  it('should render a buy button', () => {
    render(
      <ThemeProvider theme={themeValue}>
        <Router>
          <FilledCertificates {...props} />
          <Modal />
        </Router>
      </ThemeProvider>
    );

    const buyButton = screen.getByText(/certificate.buy/i);

    expect(buyButton).toBeInTheDocument();
  });
});
