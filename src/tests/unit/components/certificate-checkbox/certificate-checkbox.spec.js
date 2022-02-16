import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CertificateCheckbox from '../../../../pages/gift-certificate/certificate-checkbox/certificate-checkbox';

describe('CertificateCheckbox component tests', () => {
  it('checkbox property checked should be true ', () => {
    const { getByTestId } = render(<CertificateCheckbox />);

    fireEvent.change(getByTestId('checkbox'), {
      target: { checked: true }
    });

    const checkbox = getByTestId('checkbox');

    expect(checkbox.checked).toEqual(true);
  });

  it('if checkbox is checked number-input should be visible', () => {
    const { getByTestId, rerender, queryByTestId } = render(<CertificateCheckbox />);

    expect(queryByTestId('number-input')).not.toBeInTheDocument();

    rerender(<CertificateCheckbox checked />);

    const numberInput = getByTestId('number-input');

    expect(numberInput).toBeInTheDocument();
  });
});
