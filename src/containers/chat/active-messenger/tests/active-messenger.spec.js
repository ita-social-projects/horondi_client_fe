import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { useMutation } from '@apollo/client';
import { ActiveMessenger } from '../active-messenger';

const visible = true;
const themeMode = [true, () => ({})];
const mockStore = {
  userData: {},
  language: 0
};
const mockHandleMailFormVisible = true;
const loading = false;
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light',
      cart: {
        borderColor: '#000000'
      }
    }
  })
}));

useSelector.mockImplementation(() => mockStore);
useMutation.mockImplementation(() => [
  jest.fn(),
  {
    loading,
    error: null,
    data: { sendEmailMutation: [{ addEmailQuestion: { question: { senderName: 'name' } } }] }
  }
]);

describe('ActiveMessenger component', () => {
  it('ActiveMessenger renders', async () => {
    render(
      <ActiveMessenger
        iconsVisible={visible}
        mailFormVisible={mockHandleMailFormVisible}
        themeMode={themeMode}
      />
    );

    expect(screen.getByText(/chat.sendMail/i)).toBeInTheDocument();
  });

  it('Input fields works', () => {
    render(
      <ActiveMessenger
        iconsVisible={visible}
        mailFormVisible={mockHandleMailFormVisible}
        themeMode={themeMode}
      />
    );

    const [nameInput, emailInput, msgInput] = screen.getAllByRole('textbox');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(msgInput).toBeInTheDocument();

    userEvent.type(nameInput, 'Denys');
    userEvent.type(emailInput, 'zaharkevich.denis@gmail.com');
    userEvent.type(msgInput, 'abc');

    expect(nameInput).toHaveValue('Denys');
    expect(emailInput).toHaveValue('zaharkevich.denis@gmail.com');
    expect(msgInput).toHaveValue('bca');
  });

  it('Placeholders works', () => {
    render(
      <ActiveMessenger
        iconsVisible={visible}
        mailFormVisible={mockHandleMailFormVisible}
        themeMode={themeMode}
      />
    );

    expect(screen.getByText('common.name')).toBeInTheDocument();
    expect(screen.getByText('common.email')).toBeInTheDocument();
    expect(screen.getByText('chat.msgText')).toBeInTheDocument();
  });
});
