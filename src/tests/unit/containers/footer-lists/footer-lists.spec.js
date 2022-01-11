import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import FooterLists from '../../../../containers/footer-lists/footer-lists.js';
import CategoriesContextProvider from '../../../../context/categories/categories-context';

const useState = jest.fn();
const setState = jest.fn();

jest.mock('../../../../containers/footer-lists/footer-lists.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('react-redux');
jest.mock('@apollo/client');

useState.mockImplementation(() => [[], setState]);

useSelector.mockImplementation(() => ({
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false
}));

describe('tests for footer lists', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CategoriesContextProvider>
          <FooterLists />
        </CategoriesContextProvider>
      </BrowserRouter>
    );
  });

  it('should render footer lists', () => {
    expect(screen.queryByText('footer.catalogs')).toBeInTheDocument();
    expect(screen.queryByText('footer.contacts')).toBeInTheDocument();
    expect(screen.queryByText('footer.moreInformation')).toBeInTheDocument();
    expect(screen.queryByText('footer.footerInformation.title')).toBeInTheDocument();
  });

  it('should render footer information list', () => {
    expect(screen.queryByText('footer.footerInformation.privacyPolicy')).toBeInTheDocument();
    expect(screen.queryByText('footer.footerInformation.paymentAndShipping')).toBeInTheDocument();
    expect(screen.queryByText('footer.footerInformation.materials')).toBeInTheDocument();
    expect(screen.queryByText('footer.footerInformation.aboutUs')).toBeInTheDocument();
  });

  it('should render icons', () => {
    expect(screen.queryByAltText(/phone icon/i)).toBeDefined();
    expect(screen.queryByAltText(/email icon/i)).toBeDefined();
    expect(screen.queryByAltText(/location icon/i)).toBeDefined();
  });
});
