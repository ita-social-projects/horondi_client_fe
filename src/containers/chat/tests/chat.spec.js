import React from 'react';
import { useQuery } from '@apollo/client';
import { fireEvent, render, screen } from '@testing-library/react';
import { Chat } from '../chat.js';
import '../../../index.css';

const useQueryData = {
  loading: false,
  error: false,
  data: { getContacts: [{}] }
};

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

jest.mock('react-redux');
jest.mock('@apollo/client');

jest.mock('../chat.style.js', () => ({ useStyles: () => ({}) }));
// jest.mock('../../../index.css', () => ({ useStyles: () => ({}) }));
describe('chat tests', () => {
  useQuery.mockImplementation(() => ({
    ...useQueryData
  }));
  render(
    <div id='fb-root'>
      <Chat />
    </div>
  );

  it('Click on messanger btn mail icon shows', () => {
    const buttonChat = screen.getByTestId('chatBtn');
    fireEvent.click(buttonChat);
    const button = screen.getByTestId('messengerBtn');
    fireEvent.click(button);
    expect(screen.getByTestId('mailIconBtn')).toBeInTheDocument();
    screen.debug();
    fireEvent.click(buttonChat);
  });
});
