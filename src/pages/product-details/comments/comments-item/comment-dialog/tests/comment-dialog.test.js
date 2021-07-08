import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import CommentDialog from '../index';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import { isModalShown, commentId, userId, isDeleteComment } from './comment-dialog.variable';

Enzyme.configure({ adapter: new Adapter() });

const mockHandleClose = jest.fn();

const mockDispatch = jest.fn();

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');
const themeValue = theme('light');

describe('Comments test', () => {
  let wrapper;

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
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
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
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
    expect(mockHandleClose).toHaveBeenCalledTimes(2);
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
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockHandleClose).toHaveBeenCalledTimes(3);
  });
});
