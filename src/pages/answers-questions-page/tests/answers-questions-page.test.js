import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import AnswersQuestionsPage from '../answers-questions-page';
import { mockAllQuestionsAnswers } from './answers-questions.variables';

jest.mock('../answers-questions-page.style', () => ({
  useStyles: () => ({})
}));

jest.mock('i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'ua' }, t: () => 'test' })
}));

beforeEach(async () => {
  render(
    <MockedProvider mocks={mockAllQuestionsAnswers} addTypename={false}>
      <AnswersQuestionsPage />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
});

describe('component tests', () => {
  it('renders h1', () => {
    screen.debug();
    expect(screen.getByText(/answersQuestions.title/i)).toBeInTheDocument();
  });
});
