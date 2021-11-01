import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockRequest, mockedEmail } from './contacts.variables';
import Contacts from '../../../../pages/contacts/contacts';

beforeEach(() => {
  render(
    <MockedProvider mocks={mockRequest} addTypename={false}>
      <Contacts fromCheckout={{}} />
    </MockedProvider>
  );
});

describe('Contacts page tests', () => {
  it('should not render span with email while loading is true and data is not received', () => {
    const emptySpan = screen.queryByAltText(mockedEmail);

    expect(emptySpan).toBeNull();
  });

  it('should render span with email while loading is false and data is received', async () => {
    const textWithHorondi = await screen.findByText(mockedEmail);

    expect(textWithHorondi).toBeInTheDocument();
  });
});
