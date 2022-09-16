import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Modal from '../modal';
import { SnackBarContextProvider } from '../../../context/snackbar-context';
import ModalGiftCertificate from '../../../containers/modal-gift-certificate';

jest.mock('../modal.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('../../../containers/modal-gift-certificate', () => ({
  __esModule: true,
  default () {
    return <div>child component</div>;
  }
}));

describe('Modal component', () => {
  const props = {
    isOpen: true,
    setModalVisibility: jest.fn()
  };
  beforeEach(() => {
    render(
      <SnackBarContextProvider>
        <Modal {...props}>
          <ModalGiftCertificate />
        </Modal>
      </SnackBarContextProvider>
    );
  });

  it('Should render Modal component', () => {
    expect(screen.queryByTestId('closeModalIcon')).toBeInTheDocument();
    expect(screen.queryByText('child component')).toBeInTheDocument();
  });
  it('Should call setModalVisibility handler with false', () => {
    const closeModalIcon = screen.queryByTestId('closeModalIcon');

    expect(closeModalIcon).toBeInTheDocument();
    act(() => {
      fireEvent.click(closeModalIcon);
    });
    expect(props.setModalVisibility).toHaveBeenCalledWith(false);
  });
});
