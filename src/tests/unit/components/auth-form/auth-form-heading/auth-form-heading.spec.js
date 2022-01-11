import React from 'react';
import { render, screen } from '@testing-library/react';

import { AuthHeading } from '../../../../../components/auth-form';

jest.mock('../../../../../components/auth-form/auth-form-heading/auth-form-heading.styles', () => ({
  useStyles: () => ({})
}));

describe('Heading component render tests', () => {
  it('Should render h4 with text', () => {
    render(<AuthHeading>TextHeading</AuthHeading>);
    screen.getByRole('heading', { level: 4 });
    screen.findByText('/textheading/i');
  });
});
