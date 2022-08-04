import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Avatar from '../../../../../pages/profile-page/avatar/avatar';
import FileReaderMock from '../../../../../../../horondi_admin/__mocks__/fileReaderMock';

jest.mock('../../../../../pages/profile-page/avatar/avatar.styles', () => ({
  useStyles: () => ({})
}));

const mockT = jest.fn((arg) => arg);
const fileReader = new FileReaderMock();
jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);

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

    expect(screen.getByText('error.profile.size')).toBeInTheDocument();
  });

  it('should give error for wrong extension', () => {
    const file = new File(['test file'], 'notimage.js', { type: 'image/png' });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(screen.getByText('error.profile.extension')).toBeInTheDocument();
  });

  it('should upload image', async () => {
    const file = new File(['test file'], 'image.jpeg', { type: 'image/png' });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(uploader.type).toBe('file');

    expect(uploader.files.length).toBe(1);
  });

  it('should render file input field', () => {
    const file = new File(['test file'], 'image.jpeg', { type: 'image/png' });

    fireEvent.change(uploader, { target: { files: [file] } });

    expect(screen.getByTestId('imageInput')).toBeInTheDocument();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fileReader = new FileReaderMock();
  jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);

  it('Should test FileReader ', () => {
    const file = new File(['test file'], 'image.jpeg', { type: 'image/png' });
    fireEvent.change(uploader, { target: { files: [file] } });
    fileReader.result = 'file content';
    fileReader.onload({ target: { result: 'foo' } });
    expect(fileReader.readAsDataURL).toHaveBeenCalled();
    expect(fileReader.readAsDataURL).toHaveBeenCalledWith(file);
  });
});
