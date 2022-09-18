import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { mockSelector, certificateMock } from './mocal-gift-certificate.variables';
import ModalGiftCertificate from '../modal-gift-certificate';

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

const setModalVisibility = jest.fn();
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => null,
    {
      loading: true,
      error: null,
      data: {
        giftCertificateToEmail: {
          id: mockSelector.validUser._id,
          email: 'test@test.com',
          oldEmail: mockSelector.validUser.email,
          language: 1
        }
      }
    }
  ]
}));
jest.mock('../modal-gift-certificate.styles.js', () => ({ useStyles: () => ({}) }));

useSelector.mockImplementation(() => ({ userData: mockSelector.validUser }));

describe('ModalGiftCertificate test', () => {
  beforeEach(() => {
    render(<ModalGiftCertificate item={certificateMock} setModalVisibility={setModalVisibility} />);
  });
  it('should render ModalGiftCertificate component', () => {
    expect(screen.getByTestId('dismiss')).toBeInTheDocument();
    expect(screen.getByTestId('confirm')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should call func on dismiss', async () => {
    const dismissButton = screen.getByTestId('dismiss');
    act(() => {
      fireEvent.click(dismissButton);
    });

    expect(setModalVisibility).toHaveBeenCalledWith(false);
  });
  it('should call func on dismiss', async () => {
    const input = screen.getByRole('textbox');

    act(() => {
      fireEvent.change(input, { target: { value: 'test@test.' } });
    });
    act(() => {
      fireEvent.focusOut(input);
    });
    const error = await screen.findByText('error.profile.email');

    expect(error).toBeInTheDocument();

    act(() => {
      fireEvent.focusIn(input);
    });

    expect(screen.queryByText('error.profile.email')).not.toBeInTheDocument();
  });
});
