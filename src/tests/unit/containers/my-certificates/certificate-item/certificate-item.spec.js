import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../components/app/app-theme/app.theme';
import { mockedCertificateItem } from './certificate-item.variable';
import CertificateItem from '../../../../../containers/my-certificates/cetrificate-item';

jest.mock(
  '../../../../../containers/my-certificates/cetrificate-item/certificate-item.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

const mockHandleClick = jest.fn();
const themeValue = theme('light');

describe('CertificateItem component test', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeValue}>
        <CertificateItem onClick={mockHandleClick} {...mockedCertificateItem} />
      </ThemeProvider>
    );

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
