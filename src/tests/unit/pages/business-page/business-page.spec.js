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
    const emptyTextWithHorondi = screen.queryByAltText(/Sashko Horondi/i);

    expect(emptyTextWithHorondi).toBeNull();
  });

  it('should render the text after responce will be received', async () => {
    const textWithHorondi = await screen.findByText(/Sashko Horondi/i);

    expect(textWithHorondi).toBeInTheDocument();
  });

  it('should render transmitted images', async () => {
    const arrayOfImages = await screen.findAllByAltText(/img/i);

    expect(arrayOfImages).toHaveLength(2);
  });
});
