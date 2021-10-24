import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import CommentDialog from '../index';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import { commentId, isModalShown, userId } from './comment-dialog.variable';

const mockHandleClose = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux');
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({ refetch: () => jest.fn(), loading: true }));
useMutation.mockImplementation(() => [jest.fn(), { loading: true }]);

const themeValue = theme('light');

describe('Comments test', () => {
  let wrapper;

  beforeEach(() => {
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockReturnValue({
      language: '0',
      productId: '111'
    });

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <CommentDialog
          isModalShown={isModalShown}
          handleClose={mockHandleClose}
          commentId={commentId}
          userId={userId}
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  it('Should render comment dialog', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should simulate close event', () => {
    wrapper.find('button').at(0).props().onClick();
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
