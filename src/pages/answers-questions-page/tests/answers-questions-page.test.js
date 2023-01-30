import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';
import AnswersQuestionsPage from '../answers-questions-page';
import { mockAllQuestionsAnswers } from './answers-questions.variables';
import { theme } from '../../../components/app/app-theme/app.theme';

const themeValue = theme('light');

jest.mock('i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'ua' }, t: () => 'test' })
}));

beforeEach(async () => {
  render(
    <ThemeProvider theme={themeValue}>
      <MockedProvider mocks={mockAllQuestionsAnswers} addTypename={false}>
        <AnswersQuestionsPage />
      </MockedProvider>
    </ThemeProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
});

describe('component tests', () => {
  it('renders h1', () => {
    expect(screen.getByText(/common.titleQuestionsAnswers/i)).toBeInTheDocument();
  });
});
