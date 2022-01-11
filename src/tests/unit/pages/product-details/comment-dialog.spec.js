import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CommentDialog from '../../../../pages/product-details/comments/comments-item/comment-dialog';
import { commentItem } from './comments.variables';
import { SnackBarContextProvider } from '../../../../context/snackbar-context';
import { mockRequest } from '../business-page/business-page.variables';

const mockHandleClose = jest.fn();
const mockRefetchComments = jest.fn();
const mockIsModalShown = true;

jest.mock(
  '../../../../pages/product-details/comments/comments-item/comment-dialog/comment-dialog.styles',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe('<CommentDialog /> tests', () => {
  beforeEach(() => {
    render(
      <SnackBarContextProvider>
        <MockedProvider mocks={mockRequest} addTypename={false}>
          <CommentDialog
            isModalShown={mockIsModalShown}
            handleClose={mockHandleClose}
            commentId={commentItem._id}
            isDeleteComment={0}
            refetchComments={mockRefetchComments}
          />
        </MockedProvider>
      </SnackBarContextProvider>
    );
  });

  it('Closes delete comment modal', () => {
    const cancelButton = screen.getByText('product.pdpButtons.cancelButton');

    fireEvent.click(cancelButton);

    expect(mockHandleClose).toHaveBeenCalled();
  });
  it('Refetches comments', () => {
    const submitButton = screen.getByText('product.pdpButtons.submitButton');

    fireEvent.click(submitButton);

    const deleteCommentLoader = screen.getByTestId('deleteCommentLoader');

    expect(deleteCommentLoader).toBeInTheDocument();
  });
});
