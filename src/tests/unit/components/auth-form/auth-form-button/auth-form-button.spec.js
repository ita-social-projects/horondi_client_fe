import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { AuthButton } from '../../../../../components/auth-form';

jest.mock('../../../../../components/auth-form/auth-form-button/auth-form-button.styles', () => ({
  useStyles: () => ({})
}));

const mockHandleClick = jest.fn();
describe('Button  component should initiat some action', () => {
  beforeEach(() => {
    render(<AuthButton onclick={mockHandleClick}>enter</AuthButton>);
  });

  it('Should render button with transfered props text', () => {
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe('enter');
  });

  it('Should call handleClick on click', () => {
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
