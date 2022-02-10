import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { mockedCertificateItems } from './filled-certificates.variables';
import FilledCertificates from '../../../../../containers/my-certificates/filled-certificates/filled-certificates';
import Modal from '../../../../../components/modal/modal';

jest.mock(
  '../../../../../containers/my-certificates/filled-certificates/filled-certificates.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock(
  '../../../../../containers/my-certificates/certificate-table/certificate-table.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock('../../../../../components/modal/modal.styles.js', () => ({
  useStyles: () => ({})
}));

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

const props = { ...mockedCertificateItems };

describe('FilledCertificates component test', () => {
  it('should render FilledCertificate component', () => {
    const wrapper = render(
      <Router>
        <FilledCertificates {...props} />
        <Modal />
      </Router>
    );

    expect(wrapper).toBeDefined();
  });

  it('should render a buy button', () => {
    render(
      <Router>
        <FilledCertificates {...props} />
        <Modal />
      </Router>
    );

    const buyButton = screen.getByText(/certificate.buy/i);

    expect(buyButton).toBeInTheDocument();
  });
});
