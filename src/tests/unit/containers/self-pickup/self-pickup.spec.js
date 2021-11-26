import React from 'react';
import { render } from '@testing-library/react';
import SelfPickup from '../../../../containers/checkout/checkout-form/delivery/self-pickup';

describe('SelfPickup component tests', () => {
  it('should render SelfPickup', () => {
    const { getByText } = render(<SelfPickup />);
    expect(getByText(/addressHorondi/i)).toBeInTheDocument();
  });

  it('should render 5 workdays', () => {
    const { getAllByText } = render(<SelfPickup />);
    expect(getAllByText(/workDay/i)).toHaveLength(5);
  });
});
