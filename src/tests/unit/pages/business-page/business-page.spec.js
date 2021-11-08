import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockData, mockRequest } from './business-page.variables';
import BusinessPage from '../../../../pages/business-page/business-page';

beforeEach(() => {
  render(
    <MockedProvider mocks={mockRequest} addTypename={false}>
      <BusinessPage match={mockData} />
    </MockedProvider>
  );
});

describe('Business page tests', () => {
  it('should not render the text before responce will be received', () => {
    const emptyTextWithHorondi = screen.queryByText(/Sashko Horondi/i);

    expect(emptyTextWithHorondi).toBeNull();
  });

  it('should render the text after responce will be received', async () => {
    const textWithHorondi = await screen.findAllByText(/61801f62d63e5d40d8f09f07/i);

    expect(textWithHorondi).toHaveLength(1);
  });
});
