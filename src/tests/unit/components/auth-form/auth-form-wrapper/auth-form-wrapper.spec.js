import React from 'react';
import { render, screen } from '@testing-library/react';

import { AuthWrapper } from '../../../../../components/auth-form';

jest.mock('../../../../../components/auth-form/auth-form-wrapper/auth-form-wrapper.styles', () => ({
  useStyles: () => ({})
}));

describe('Wrapper  component render  tests', () => {
  it('Wrapper should contain 4 wrapper div blocks', () => {
    const { container } = render(<AuthWrapper>someText</AuthWrapper>);
    expect(container.querySelectorAll('div').length).toBe(4);
  });
  it('Wrapper should throw over content', () => {
    render(<AuthWrapper>someText</AuthWrapper>);
    screen.findByText('/sometext/i');
  });
});
