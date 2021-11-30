import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Delivery from '../../../../containers/checkout/checkout-form/delivery';
import { mockRequestData, props } from './delivery.variables';

describe('Delivery component tests', () => {
  it('should render NovaPost component', () => {
    const { container } = render(
      <MockedProvider mocks={mockRequestData} addTypename={false}>
        <Delivery {...props} deliveryType='NOVAPOST' />
      </MockedProvider>
    );
    expect(container.firstChild).toHaveClass('makeStyles-novaPostContainer-1');
  });
  it('should render UkrpostAndCourier component', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mockRequestData} addTypename={false}>
        <Delivery {...props} deliveryType='UKRPOST' />
      </MockedProvider>
    );
    const ukrPostText = await findByText(/region cannot be empty/i);
    expect(ukrPostText).toBeInTheDocument();
  });
});
