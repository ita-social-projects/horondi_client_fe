import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Modal from '../modal';
import { SnackBarContextProvider } from '../../../context/snackbar-context';

jest.mock('../modal.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe('Modal component', () => {
  it('Should render Modal component', () => {
    const props = {
      language: 1,
      message: 'test',
      isOpen: true,
      onAction: jest.fn()
    };
    render(
      <SnackBarContextProvider>
        <Modal {...props} />
      </SnackBarContextProvider>
    );

    expect(screen.queryByText(props.message)).toBeInTheDocument();
    expect(screen.queryByText('common.buttons.confirm')).toBeInTheDocument();
    expect(screen.queryByText('common.buttons.cancel')).toBeInTheDocument();
    expect(screen.queryByText('common.modalHeader')).toBeInTheDocument();
  });

  it('Should call onAction handler with true', () => {
    const props = {
      language: 1,
      message: 'test',
      isOpen: true,
      onAction: jest.fn()
    };
    render(
      <SnackBarContextProvider>
        <Modal {...props} />
      </SnackBarContextProvider>
    );
    const confirmButton = screen.queryByText('common.buttons.confirm');

    expect(confirmButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(confirmButton);
    });
    expect(props.onAction).toHaveBeenCalledWith(true);
  });

  it('Should call onAction handler with false', () => {
    const props = {
      language: 1,
      message: 'test',
      isOpen: true,
      onAction: jest.fn()
    };
    render(
      <SnackBarContextProvider>
        <Modal {...props} />
      </SnackBarContextProvider>
    );

    const cancelButton = screen.queryByText('common.buttons.cancel');

    expect(cancelButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(cancelButton);
    });
    expect(props.onAction).toHaveBeenCalledWith(false);
  });

  it('Should call onAction handler with false', () => {
    const props = {
      language: 1,
      message: 'test',
      isOpen: true,
      onAction: jest.fn()
    };
    render(
      <SnackBarContextProvider>
        <Modal {...props} />
      </SnackBarContextProvider>
    );

    const closeModalIcon = screen.queryByTestId('closeModalIcon');

    expect(closeModalIcon).toBeInTheDocument();

    act(() => {
      fireEvent.click(closeModalIcon);
    });
    expect(props.onAction).toHaveBeenCalledWith(false);
  });
});
