import React from 'react';
import { render, screen, wait } from '@testing-library/react';
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

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => mockRequest[0].result.data.getBusinessTextByCode.text[1].value
  })
}));

describe('Business page tests', () => {
  it('should not render the text before responce will be received', () => {
    const emptyTextWithHorondi = screen.queryByText(/Sashko Horondi/i);

    expect(emptyTextWithHorondi).toBeNull();
  });

  it('should render the text after responce will be received', async () => {
    await wait();
    const textWithHorondi = await screen.findAllByText(/Sashko Horondi/i);
    expect(textWithHorondi).toHaveLength(1);
  });
});
