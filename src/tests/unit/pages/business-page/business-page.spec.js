import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  mockData,
  mockRequest,
  mockTranslationsKey,
  mockTranslated
} from './business-page.variables';
import BusinessPage from '../../../../pages/business-page/business-page';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key) => {
      if (key === `${mockTranslationsKey}.title`) {
        return mockTranslated.title;
      }
      if (key === `${mockTranslationsKey}.text`) {
        return mockTranslated.text;
      }
    }
  })
}));

beforeEach(() => {
  render(
    <MockedProvider mocks={mockRequest} addTypename={false}>
      <BusinessPage match={mockData} />
    </MockedProvider>
  );
});

describe('Business page tests', () => {
  it('should render the text after responce will be received', async () => {
    const textWithTitle = await screen.findByText(mockTranslated.title);

    expect(textWithTitle).toBeInTheDocument();
  });
});
