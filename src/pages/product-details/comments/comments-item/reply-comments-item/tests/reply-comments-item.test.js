import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import ReplyCommentsItem from '../index';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import {
  dataUser,
  replyCommentId,
  dataSecond,
  dataAdmin,
  dataSuperAdmin
} from './reply-comments-tem.variables';

Enzyme.configure({ adapter: new Adapter() });

const mockSetState = jest.fn();

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');
const themeValue = theme('light');

const useStateSpy = jest.spyOn(React, 'useState');

describe('Comments test', () => {
  let wrapper;

  beforeEach(() => {
    useStateSpy.mockImplementation(() => [false, mockSetState]);
    mockUseDispatch.mockImplementation(() => jest.fn());
    mockUseSelector.mockReturnValue({
      language: '0',
      userData: { _id: '111', email: 'test@gmail.com' }
    });
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataUser} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    useStateSpy.mockClear();
    mockUseSelector.mockClear();
  });

  it('Should render ReplyCommentsItem', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render ReplyCommentsItem with admin role', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataAdmin} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });
  it('Should render ReplyCommentsItem with superadmin role', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataSuperAdmin} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });

  it('Should return empty', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataSecond} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper).toEqual({});
  });
});
