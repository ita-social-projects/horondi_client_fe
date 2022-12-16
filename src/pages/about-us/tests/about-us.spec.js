import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/core';
import AboutUs from '../about-us';
import { mocks, uaTitle, mockTranslationsKey, mockTranslated } from './variables';
import { theme } from '../../../components/app/app-theme/app.theme';

const themeValue = theme('light');

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
    <ThemeProvider theme={themeValue}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <AboutUs />
      </MockedProvider>
    </ThemeProvider>
  );

  it('should render', async () => {
    const title = await screen.findByText(uaTitle);
    expect(title).toBeInTheDocument();
  });
});
