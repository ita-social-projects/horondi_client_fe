import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import ReplyCommentsItem from '../../../../pages/product-details/comments/comments-item/reply-comments-item';
import { mockRequest, mockSelector, replyItem } from './comments.variables';
import { handleUserCommentOwner } from '../../../../utils/handle-comments';

const mockUpdateReplies = jest.fn();

jest.mock('../../../../utils/handle-comments');
handleUserCommentOwner.mockImplementation(() => true);

const {
  _id,
  replyComments: { 0: dataAdmin, 1: dataUser }
} = replyItem;

jest.mock('react-redux');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));
jest.mock(
  '../../../../pages/product-details/comments/comments-item/reply-comments-item/reply-comments-item.styles',
  () => ({ useStyles: () => ({}) })
);
jest.mock(
  '../../../../pages/product-details/comments/comments-item/comment-dialog/comment-dialog.styles',
  () => ({
    useStyles: () => ({})
  })
);

useSelector.mockImplementation(() => ({ userData: mockSelector.guestUser }));

const renderComponent = (data) => {
  render(
    <MockedProvider mocks={mockRequest} addTypename={false}>
      <ReplyCommentsItem replyItem={data} replyCommentId={_id} updateReplies={mockUpdateReplies} />
    </MockedProvider>
  );
};

describe('<ReplyCommentsItem /> tests', () => {
  it('Shows reply with Admin user', () => {
    renderComponent(dataAdmin);

    const {
      answerer: { firstName: mockedFirstName },
      replyText: mockedReplyText
    } = dataAdmin;

    const firstName = screen.getByText(new RegExp(mockedFirstName));
    const replyText = screen.getByText(mockedReplyText);

    expect(firstName).toHaveTextContent('common.reply.isAdmin');
    expect(replyText).toBeInTheDocument();
  });

  it('Shows reply with default user', () => {
    renderComponent(dataUser);

    const {
      answerer: { firstName: mockedFirstName },
      replyText: mockedReplyText
    } = dataUser;

    const firstName = screen.getByText(mockedFirstName);
    const replyText = screen.getByText(mockedReplyText);

    expect(firstName).not.toHaveTextContent('common.reply.isAdmin');
    expect(replyText).toBeInTheDocument();
  });

  it('should render comment dialog', () => {
    renderComponent(dataUser);
    const icon = document.querySelector('.MuiSvgIcon-root');
    const modal = screen.findByTestId('modal');

    fireEvent.click(icon);

    expect(modal).toBeDefined();
  });
});
