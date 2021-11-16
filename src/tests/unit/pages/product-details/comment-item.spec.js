import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { commentItem, mockRequest, mockSelector, productId } from './comments.variables';
import CommentsItem from '../../../../pages/product-details/comments/comments-item';

const mockRefetchComments = jest.fn();
const mockChangeValue = jest.fn();
const mockSubmit = jest.fn();
const mockSetShouldValidate = jest.fn();
const mockShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  })
}));
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

jest.mock('../../../../pages/product-details/comments/comments-item/comments-item.styles', () => ({
  useStyles: () => ({})
}));
jest.mock(
  '../../../../pages/product-details/comments/comments-item/comment-dialog/comment-dialog.styles',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock(
  '../../../../pages/product-details/comments/comments-item/reply-form/reply-form.styles',
  () => ({
    useStyles: () => ({})
  })
);

useSelector.mockImplementation(() => ({ userData: mockSelector.guestUser }));

describe('<CommentItem /> tests', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mockRequest} addTypename={false}>
        <CommentsItem
          key={productId}
          commentItem={commentItem}
          refetchComments={mockRefetchComments}
          commentId={commentItem._id}
          productId={productId}
        />
      </MockedProvider>
    );
  });

  describe('Comment data tests', () => {
    it('Shows correct comment data', () => {
      const {
        user: { firstName: mockedFirstName },
        text: mockedText
      } = commentItem;

      const firstNameText = screen.queryByTestId('firstName');
      const commentText = screen.queryByTestId('commentText');

      expect(firstNameText.textContent).toBe(mockedFirstName);
      expect(commentText.textContent).toBe(mockedText);
    });

    it('Add reply button is disabled for guest user', () => {
      const toolTipText = screen.getByTitle('product.tooltips.unregisteredReply');

      expect(toolTipText).toBeDefined();

      useSelector.mockImplementation(() => ({ userData: mockSelector.validUser }));
    });
    it('Add reply button is enabled for valid user', () => {
      const toolTipText = screen.queryByTitle('product.tooltips.unregisteredReply');

      expect(toolTipText).toBe(null);
    });
  });
  describe('Reply form tests', () => {
    beforeEach(() => {
      const replySubmitButton = screen.queryByText('common.reply.submit');

      fireEvent.click(replySubmitButton);
    });

    it('Reply form is open', () => {
      const replyForm = screen.queryByTestId('replyForm');

      expect(replyForm).toBeDefined();
    });

    it('Field value is set', () => {
      const mockedText = 'Thank you!';
      const replyForm = screen.queryByTestId('replyForm');
      const textArea = screen.getByRole('textbox');

      fireEvent.click(replyForm);
      fireEvent.change(textArea, { target: { value: mockedText } });

      expect(mockSetFieldValue).toHaveBeenCalledWith('text', mockedText);
    });

    it('Cancel closes reply form', () => {
      const cancelButton = screen.queryByText('product.pdpButtons.cancelButton');

      fireEvent.click(cancelButton);

      const replyForm = screen.queryByTestId('replyForm');

      expect(replyForm).toBe(null);
    });
  });
});
