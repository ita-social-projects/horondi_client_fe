import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';

import { ActiveMessenger } from '../active-messenger';
import { sendEmailMutation } from '../../operations/chat.mutations';

const visible = true;
const themeMode = [true, () => ({})];
const mockStore = {
  userData: {},
  language: 0
};
const mockHandleMailFormVisible = true;
jest.mock('react-redux');
jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
useSelector.mockImplementation(() => mockStore);

const email = 'a@gmail.com';
const firstName = 'Denys';
const inputMessage = 'Message';
const outputMessage = 'essageM';
const language = 1;

const mocks = [
  {
    request: {
      query: sendEmailMutation,
      variables: {
        email,
        senderName: firstName,
        text: outputMessage,
        language
      }
    },
    result: {
      data: {
        addEmailQuestion: { _id: '6239a310ed27613a04a17bb8' }
      }
    }
  }
];

describe('ActiveMessenger component', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ActiveMessenger
          iconsVisible={visible}
          mailFormVisible={mockHandleMailFormVisible}
          themeMode={themeMode}
        />
      </MockedProvider>
    );
  });

  it('ActiveMessenger renders', () => {
    expect(screen.getByText(/chat.sendMail/i)).toBeInTheDocument();
  });

  it('Input fields works', () => {
    const [nameInput, emailInput, msgInput] = screen.getAllByRole('textbox');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(msgInput).toBeInTheDocument();

    userEvent.type(nameInput, firstName);
    userEvent.type(emailInput, email);
    userEvent.type(msgInput, inputMessage);

    expect(nameInput).toHaveValue(firstName);
    expect(emailInput).toHaveValue(email);
    expect(msgInput).toHaveValue(outputMessage);
  });

  it('Placeholders works', () => {
    expect(screen.getByText('common.name')).toBeInTheDocument();
    expect(screen.getByText('common.email')).toBeInTheDocument();
    expect(screen.getByText('chat.msgText')).toBeInTheDocument();
  });

  it('Alert should appear', async () => {
    const [nameInput, emailInput, msgInput] = screen.getAllByRole('textbox');
    userEvent.type(nameInput, firstName);
    userEvent.type(emailInput, email);
    userEvent.type(msgInput, inputMessage);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    expect(await screen.findByText('chat.thanksMsg')).toBeInTheDocument();
  });
});
