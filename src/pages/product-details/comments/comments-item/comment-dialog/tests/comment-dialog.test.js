import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import CommentDialog from '../index';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import { isModalShown, commentId, userId, isDeleteComment } from './comment-dialog.variable';

const mockHandleClose = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux');

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

  it('Should simulate delete reply event', () => {
    wrapper.find('button').at(1).props().onClick();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it('Should simulate delete comment event', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <CommentDialog
          isModalShown={isModalShown}
          handleClose={mockHandleClose}
          commentId={commentId}
          userId={userId}
          isDeleteComment={isDeleteComment}
        />
      </ThemeProvider>
    );
    wrapper.find('button').at(1).props().onClick();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
