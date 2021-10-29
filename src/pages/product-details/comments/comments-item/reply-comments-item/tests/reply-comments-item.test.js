import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import ReplyCommentsItem from '../reply-comments-item';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import {
  replyCommentId,
  dataSecond,
  dataAdmin,
  dataSuperAdmin,
  dataWithOutVerifing
} from './reply-comments-item.variables';

jest.mock('react-redux');

jest.mock('../reply-comments-item.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => ({ firstName: 'user' }),
    i18n: () => ({ dateLanguage: 'ukr-UA' })
  })
}));
const { t } = useTranslation();
const SelectorsState = {
  userData: {
    _id: '111',
    firstName: 'user',
    email: 'test@gmail.com',
    role: 'admin'
  },
  language: 0
};

const props = {
  data: {
    replyText: 'text',
    createdAt: '1',
    verifiedPurchase: true,
    showReplyComment: true
  },
  replyCommentId: '1'
};

const themeValue = theme('light');

describe('component', () => {
  let wrapper;
  beforeEach(() => {
    useSelector.mockImplementation(() => SelectorsState);
    wrapper = shallow(<ReplyCommentsItem {...props} />);
  });

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render ReplyCommentsItem with admin role', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataAdmin} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper.find('span').text()).toBe(
      `${t('common.reply.isAdmin')} ${dataAdmin.answerer.firstName}`
    );
    expect(wrapper).toBeDefined();
  });

  it('Should render ReplyCommentsItem with superadmin role', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataSuperAdmin} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper.find('span').text()).toBe(
      `${t('common.reply.isAdmin')} ${dataSuperAdmin.answerer.firstName}`
    );
    expect(wrapper).toBeDefined();
  });

  it('Should render not aprove style and without verifing icon', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataWithOutVerifing} replyCommentId={replyCommentId} />
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
