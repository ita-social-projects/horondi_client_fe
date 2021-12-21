import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentsTitle from '../../../../pages/product-details/comments/comments-item/comments-title/comments-title';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}));

describe('CommentsTitle component', () => {
  const props = {
    count: 10
  };
  render(<CommentsTitle {...props} />);

  it('Should render CommentsTitle component', () => {
    expect(screen.queryByText(/product.comments.commentsTitle/g)).toBeInTheDocument();
  });
});
