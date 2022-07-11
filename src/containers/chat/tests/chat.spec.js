import React from 'react';
import { useQuery } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { Chat } from '../chat';

let wrapper;

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
jest.mock('../../../context/theme-context', () => ({}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true, () => null]
}));
jest.mock('react-messenger-customer-chat');
describe('chat tests', () => {
  useQuery.mockImplementation(() => ({
    ...useQueryData
  }));
  beforeEach(() => {
    wrapper = render(<Chat />);
  });

  it('Should render chat', () => {
    expect(wrapper).toBeDefined();
    screen.debug();
  });

  it('Click on messanger btn after it is active', async () => {
    const button = await screen.getByTestId('chatBtn');
    expect(button).toBeDisabled();
  });
});
