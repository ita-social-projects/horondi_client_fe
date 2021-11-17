import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import Comments from '../../../../pages/product-details/comments';
import { mockRequest, mockSelector, productId } from './comments.variables';
import { SnackBarContextProvider } from '../../../../context/snackbar-context';

const mockChangeValue = jest.fn();
const mockSubmit = jest.fn();
const mockSetShouldValidate = jest.fn();
const mockShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();

jest.mock('../../../../hooks/use-comment-validation', () => ({
  __esModule: true,
  default: () => ({
    handleSubmit: mockSubmit,
    handleChange: mockChangeValue,
    handleBlur: jest.fn(),
    setFieldValue: mockSetFieldValue,
    resetForm: jest.fn(),
    values: { text: '' },
    errors: {},
    shouldValidate: mockShouldValidate,
    setShouldValidate: mockSetShouldValidate
  })
}));

jest.mock('../../../../pages/product-details/comments/comments.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

useSelector.mockImplementation(() => ({ userData: mockSelector.guestUser }));

describe('Comments page tests', () => {
  beforeEach(() => {
    render(
      <SnackBarContextProvider>
        <MockedProvider mocks={mockRequest} addTypename={false}>
          <Comments productId={productId} />
        </MockedProvider>
      </SnackBarContextProvider>
    );
  });

  it('Add comment is locked when no user', () => {
    const noUserMessage = screen.queryByTitle('product.tooltips.unregisteredComment');
    const activeUserMessage = screen.queryByTitle('product.tooltips.successfulTip');

    expect(noUserMessage).toBeTruthy();
    expect(activeUserMessage).toBeFalsy();

    useSelector.mockImplementation(() => ({ userData: mockSelector.validUser }));
  });

  it('Add comment is locked when user is logged in', () => {
    const noUserMessage = screen.queryByTitle('product.tooltips.unregisteredComment');
    const activeUserMessage = screen.queryByTitle('product.comments.successfulTip');

    expect(noUserMessage).toBeFalsy();
    expect(activeUserMessage).toBeTruthy();
  });

  it('Call setting event on textarea change', async () => {
    const testText = 'Good product';
    const field = await screen.findByRole('textbox');

    fireEvent.change(field, { target: { value: testText } });

    expect(mockSetFieldValue.mock.calls).toHaveLength(1);
    expect(mockSetFieldValue).toHaveBeenCalledWith('text', testText);
  });

  it('Call submitting event on submit', () => {
    const form = screen.getByRole('button');

    fireEvent.submit(form);

    expect(mockSubmit.mock.calls).toHaveLength(1);
  });

  it('Call validation on button click', () => {
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockShouldValidate).toBeTruthy();
  });

  it('Show loader on page startup', () => {
    const getCommentsLoader = screen.queryByTestId('getCommentsLoader');
    const addCommentLoader = screen.queryByTestId('addCommentLoader');

    expect(addCommentLoader).toBe(null);
    expect(getCommentsLoader).toBeTruthy();
  });
});
