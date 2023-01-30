import React from 'react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { mockSelector, certificateMock, requestMocks } from './mocal-gift-certificate.variables';
import ModalGiftCertificate from '../modal-gift-certificate';
import ModalSuccessfulGift from '../../modal-successful-gift/modal-successful-gift';

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

const setModalVisibility = jest.fn();
const closeSuccesModal = jest.fn();
const handleCertificateGift = jest.fn();

jest.mock('../modal-gift-certificate.styles.js', () => ({ useStyles: () => ({}) }));

useSelector.mockImplementation(() => ({ userData: mockSelector.validUser }));

describe('ModalGiftCertificate test', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={requestMocks}>
        <ModalGiftCertificate
          item={certificateMock}
          setModalVisibility={setModalVisibility}
          handleCertificateGift={handleCertificateGift}
        />
      </MockedProvider>
    );
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

  it('should confirm with valid email', async () => {
    const input = screen.getByRole('textbox');
    const confirmButton = screen.getByTestId('confirm');

    act(() => {
      fireEvent.change(input, { target: { value: 'test@test.com' } });
    });
    act(() => {
      fireEvent.click(confirmButton);
    });

    expect(screen.queryByText('error.profile.email')).not.toBeInTheDocument();
  });
});

describe('ModalSuccessfulGift test', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={requestMocks}>
        <ModalSuccessfulGift closeSuccesModal={closeSuccesModal} />
      </MockedProvider>
    );
  });

  it('should render ModalSuccessfulGift component', () => {
    const title = screen.getByText('modal.giftCertificate.successfulTitle');
    const dismissButton = screen.getByText('modal.giftCertificate.closeButton');

    expect(title).toBeInTheDocument();
    expect(dismissButton).toBeInTheDocument();
  });

  it('should close modal on dismissButton click', () => {
    const dismissButton = screen.getByText('modal.giftCertificate.closeButton');
    act(() => {
      fireEvent.click(dismissButton);
    });

    expect(closeSuccesModal).toHaveBeenCalled();
  });
});
