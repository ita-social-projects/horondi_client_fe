import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Delivery from '../../../../containers/checkout/checkout-form/delivery';
import { mockRequestData, props } from './delivery.variables';

jest.mock(
  '../../../../containers/checkout/checkout-form/delivery-type/delivery-type.styles',
  () => ({ useStyles: () => ({ Theme: 'lightMode' }) })
);

jest.mock('../../../../services/session-storage.service', () => ({
  setToSessionStorage: () => {}
}));

jest.mock('../../../../utils/checkout', () => ({
  setDeliveryTypeToStorage: () => {}
}));

describe('Delivery component tests', () => {
  it('worldwide tab should be active', async () => {
    render(
      <MockedProvider mocks={mockRequestData} addTypename={false}>
        <Delivery {...props} deliveryType='WORLDWIDE' countryOption='WORLDWIDE' />
      </MockedProvider>
    );

    const worldWideTab = screen.getByRole('tabpanel', {
      hidden: false,
      name: 'WORLDWIDE tab panel'
    });

    expect(worldWideTab).toBeInTheDocument();
  });

  it('within Ukraine tab should be active', async () => {
    render(
      <MockedProvider mocks={mockRequestData} addTypename={false}>
        <Delivery {...props} deliveryType='NOVAPOST' countryOption='WITHIN_UKRAINE' />
      </MockedProvider>
    );

    const withinUkraineTab = screen.getByRole('tabpanel', {
      hidden: false,
      name: 'WITHIN_UKRAINE tab panel'
    });

    expect(withinUkraineTab).toBeInTheDocument();
  });
});
