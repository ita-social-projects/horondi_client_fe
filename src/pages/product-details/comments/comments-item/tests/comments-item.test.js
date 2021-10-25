import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import CommentsItem from '../comments-item';

jest.mock('react-redux');

jest.mock('../comments-item.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => ({ common: 'ua-Ukr' }),
    i18n: () => ({ dateLanguage: 'ukr-UA' })
  })
}));
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({ refetch: () => jest.fn(), loading: true }));
useMutation.mockImplementation(() => [jest.fn(), { loading: true }]);

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);

const state = {
  userData: { _id: '111' },
  currentLimit: 10,
  replyLoading: false,
  replyLoadingId: 1122,
  getReplyLoading: false,
  getReplyLoadingId: 2233
};

useSelector.mockImplementation(() => state);

const props = {
  data: {
    user: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' },
    replyComments: [
      {
        replyText: 'text',
        createdAt: '1',
        verifiedPurchase: false,
        showReplyComment: false,
        _id: '1'
      },
      {
        replyText: 'text2',
        createdAt: '1',
        verifiedPurchase: true,
        showReplyComment: true,
        _id: '2'
      }
    ]
  },
  commentId: '111222'
};

const wrapper = shallow(<CommentsItem {...props} />);

describe('component', () => {
  it('should render', () => {
    expect(wrapper).toBeDefined();
  });
});
