import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { mockData, mockRequest } from './business-page,variables';
import BusinessPage from '../business-page';

beforeEach(() => {
  render(
    <MockedProvider mocks={mockRequest} addTypename={false}>
      <BusinessPage match={mockData} />
    </MockedProvider>
  );
});

it('should render the transmitted text', async () => {
  expect(screen.queryByText('Sashko Horondi')).toBeNull();
  expect(await screen.findByText('Sashko Horondi')).toBeInTheDocument();
});

it('should render transmitted images', async () => {
  expect(await screen.findAllByAltText(/img/i)).toHaveLength(2);
});
