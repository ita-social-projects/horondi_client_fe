import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockAllHomeImageLooks } from './our-looks.variables';
import OurLooks from '../our-looks';

describe('our look images tests', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mockAllHomeImageLooks} addTypename={false}>
        <OurLooks />
      </MockedProvider>
    );
  });

  it('shows images', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const images = screen.getAllByTestId('ourLooksImage');
    expect(images).toHaveLength(2);
  });

  it('shows loader', () => {
    const loader = screen.getByTestId('loader');
    expect(loader).toBeDefined();
  });
});
