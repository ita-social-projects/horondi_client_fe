import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import AboutUs from '../about-us';
import { mocks, uaTitle, mockTranslationsKey, mockTranslated } from './variables';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key) => {
      if (key === `${mockTranslationsKey}.title`) {
        return mockTranslated.title;
      }
      if (key === `${mockTranslationsKey}.sections`) {
        return mockTranslated.sections;
      }
    }
  })
}));

describe('AboutUs component tests', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AboutUs />
    </MockedProvider>
  );

  it('should render', async () => {
    const title = await screen.findByText(uaTitle);
    expect(title).toBeInTheDocument();
  });
});
