import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from '../AboutUsPage';

jest.mock('../AboutUsPage.style', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../components/app/app.styles', () => ({
  useAppStyles: () => ({})
}));

jest.mock('i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'ua' }, t: () => 'test' })
}));

describe('AboutUsPage test', () => {
  beforeEach(() => {
    render(<AboutUsPage />);
  });

  it('Check header text render', () => {
    const header = screen.getByText('aboutUs.title');
    expect(header).toBeDefined();
  });
});
