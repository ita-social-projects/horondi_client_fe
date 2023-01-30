import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/core';
import GiftCertificate from '../../../../pages/gift-certificate/gift-certificate';
import { mocks, mockStore } from './gift-certificate.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';

const themeValue = theme('light');

jest.mock('react-redux');

useSelector.mockImplementation(() => mockStore);

describe('GiftCertificate page tests', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeValue}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <GiftCertificate />
        </MockedProvider>
      </ThemeProvider>
    );
  });

  it('if user is logged in email should have value', () => {
    const { getByTestId } = screen;
    const emailInput = getByTestId('email').querySelector('input');
    expect(emailInput).toHaveValue('sashkohorondi@gmail.com');
  });

  it('when user clicked purchase button mutation should be called', async () => {
    const { getByTestId } = screen;

    const purchaseBtn = getByTestId('button');
    fireEvent.click(purchaseBtn);
    const btnMutationMock = mocks[1].result;

    await wait(() => {
      expect(btnMutationMock).toHaveBeenCalled();
    });
  });

  it('should render rules', () => {
    const { getByText } = screen;
    const rule = getByText(/certificate.certificateRules.0/);
    expect(rule).toBeDefined();
  });
});
