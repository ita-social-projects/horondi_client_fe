import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import GiftCertificate from '../../../../pages/gift-certificate/gift-certificate';
import { mocks, mockStore } from './gift-certificate.variables';

jest.mock('../../../../pages/gift-certificate/gift-certificate.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

useSelector.mockImplementation(() => mockStore);

describe('GiftCertificate page tests', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GiftCertificate />
      </MockedProvider>
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
