import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { mockedCertificateItem } from './certificate-item.variable';
import CertificateItem from '../../../../../containers/my-certificates/cetrificate-item';

jest.mock(
  '../../../../../containers/my-certificates/cetrificate-item/certificate-item.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));

const mockHandleClick = jest.fn();

describe('CertificateItem component test', () => {
  beforeEach(() => {
    render(<CertificateItem onClick={mockHandleClick} {...mockedCertificateItem} />);

    const mockClipboard = {
      writeText: jest.fn()
    };
    global.navigator.clipboard = mockClipboard;
  });

  it('should render certificate code', () => {
    const code = screen.getByText(/HOR22075/i);

    expect(code).toBeInTheDocument();
  });

  it('should have an expired status', () => {
    const status = screen.getByText(/expired/i);

    expect(status).toBeInTheDocument();
  });

  it('should call navigator clipboard to write a text', () => {
    const copyButton = screen.getByTitle('certificate.copy');

    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
  });
});
