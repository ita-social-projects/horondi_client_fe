import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Avatar from '../../../../../pages/profile-page/avatar/avatar';

jest.mock('../../../../../pages/profile-page/avatar/avatar.styles', () => ({
  useStyles: () => ({})
}));

const mockT = jest.fn((arg) => arg);

describe('Profile=Page test image restrictions', () => {
  let uploader;
  beforeAll(() => {
    global.Image = class {
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 100);
      }
    };
  });

  beforeEach(() => {
    render(<Avatar t={mockT} />);

    uploader = screen.getByTestId('imageInput');
  });

  it('should give error for wrong file size', () => {
    const file = new File(['test file'], 'fake-large-image.png', { type: 'image/png' });
    Object.defineProperty(file, 'size', { value: 1024 * 6000 });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(screen.getByText('profilePage.imageError.size')).toBeInTheDocument();
  });

  it('should give error for wrong extension', () => {
    const file = new File(['test file'], 'notimage.js', { type: 'image/png' });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(screen.getByText('profilePage.imageError.extension')).toBeInTheDocument();
  });

  it('should give error for wrong dimension of fake file', async () => {
    const file = new File(['test file'], 'fake-small-image.png', { type: 'image/png' });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(await screen.findByText('profilePage.imageError.dimension')).toBeInTheDocument();
  });

  it('should give error for wrong dimension of real image file with size 102x1px', async () => {
    const file = new File(
      [
        'iVBORw0KGgoAAAANSUhEUgAAAGYAAAABCAYAAAAsLtuAAAAAEklEQVR42mNkYPhfzzAKBh0AAGClAYCUny1uAAAAAElFTkSuQmCC'
      ],
      'image102x1.png',
      { type: 'image/png' }
    );

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(await screen.findByText('profilePage.imageError.dimension')).toBeInTheDocument();
  });
});
