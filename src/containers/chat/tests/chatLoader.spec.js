import React from 'react';
import { useQuery } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { Chat } from '../chat.js';

const useQueryData = {
  loading: true,
  error: false,
  data: { getContacts: [{}] }
};

jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../chat.style.js', () => ({ useStyles: () => ({}) }));

describe('Loader test', () => {
  useQuery.mockImplementation(() => ({
    ...useQueryData
  }));
  render(<Chat />);

  it('Click on messanger btn after it is active', () => {
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
