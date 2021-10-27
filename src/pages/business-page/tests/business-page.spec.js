import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import BusinessPage from '../business-page';
import { mockData, mockRequest } from './business-page.variables';

describe('Business page tests', () => {
  it('should not render the text before responce will be received', () => {
    const { queryByAltText } = render(
      <MockedProvider mocks={mockRequest} addTypename={false}>
        <BusinessPage match={mockData} />
      </MockedProvider>
    );
    const emptyTextWithHorondi = queryByAltText(/Sashko Horondi/i);

    expect(emptyTextWithHorondi).toBeNull();
  });

  it('should render the text after responce will be received', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mockRequest} addTypename={false}>
        <BusinessPage match={mockData} />
      </MockedProvider>
    );

    const textWithHorondi = await findByText(/Sashko Horondi/i);

    expect(textWithHorondi).toBeInTheDocument();
  });

  it('should render transmitted images', async () => {
    const { findAllByAltText } = render(
      <MockedProvider mocks={mockRequest} addTypename={false}>
        <BusinessPage match={mockData} />
      </MockedProvider>
    );

    const arrayOfImages = await findAllByAltText(/img/i);

    expect(arrayOfImages).toHaveLength(2);
  });
});
