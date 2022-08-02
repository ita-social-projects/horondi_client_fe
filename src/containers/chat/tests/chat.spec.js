import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { theme } from '../../../components/app/app-theme/app.theme.js';
import { Chat } from '../chat.js';
import '../../../index.css';
import { getContactsForChat } from '../operations/chat-contacts.query.js';
import configureStore from '../../../store/store.js';

const store = configureStore();
jest.mock('@material-ui/icons/Forum', () => {
  const icons = {
    __esModule: true
  };
  const handler = {
    get(_, prop) {
      // eslint-disable-next-line react/display-name
      return () => <div prop={prop} />;
    }
  };

  return new Proxy(icons, handler);
});

const mocks = [
  {
    request: {
      query: getContactsForChat
    },
    result: {
      data: {
        getContacts: {
          items: [
            {
              _id: '61800553cc84b200255f6bcd',
              phoneNumber: '0961737361',
              email: 'horondi.adm@gmail.com'
            }
          ]
        }
      }
    }
  }
];

describe('chat tests', () => {
  const themeValue = theme('light');
  render(
    <div id='fb-root'>
      <ThemeProvider theme={themeValue}>
        <Provider store={store}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Chat />
          </MockedProvider>
        </Provider>
      </ThemeProvider>
    </div>
  );

  it('Click on messanger btn mail icon shows', async () => {
    const buttonChat = await screen.findByTestId('chatBtn');
    fireEvent.click(buttonChat);
    const button = screen.getByTestId('messengerBtn');
    fireEvent.click(button);
    expect(screen.getByTestId('mailIconBtn')).toBeInTheDocument();
    fireEvent.click(buttonChat);
  });
});
