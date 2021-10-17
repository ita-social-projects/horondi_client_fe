// import React from 'react';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { ThemeProvider } from '@material-ui/styles';
// import * as redux from 'react-redux';
// import ReplyCommentsItem from '../index';
// import { theme } from '../../../../../../components/app/app-theme/app.theme';
// import {
//   dataUser,
//   replyCommentId,
//   dataSecond,
//   dataAdmin,
//   dataSuperAdmin,
//   dataWithOutVerifing
// } from './reply-comments-item.variables';
// import { COMMENT_OWNER_STATUS } from '../../../../../../configs';

// Enzyme.configure({ adapter: new Adapter() });

// const mockSetState = jest.fn();

// const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
// const mockUseSelector = jest.spyOn(redux, 'useSelector');
// const themeValue = theme('light');

// const useStateSpy = jest.spyOn(React, 'useState');

// describe('Comments test', () => {
//   let wrapper;

//   beforeEach(() => {
//     useStateSpy.mockImplementation(() => [false, mockSetState]);
//     mockUseDispatch.mockImplementation(() => jest.fn());
//     mockUseSelector.mockReturnValue({
//       language: '0',
//       userData: { _id: '111', email: 'test@gmail.com' }
//     });
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ReplyCommentsItem data={dataUser} replyCommentId={replyCommentId} />
//       </ThemeProvider>
//     );
//   });

//   afterEach(() => {
//     wrapper.unmount();
//     useStateSpy.mockClear();
//     mockUseSelector.mockClear();
//   });

//   it('Should render ReplyCommentsItem', () => {
//     expect(wrapper).toBeDefined();
//   });

//   it('Should render ReplyCommentsItem with admin role', () => {
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ReplyCommentsItem data={dataAdmin} replyCommentId={replyCommentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper.find('span').text()).toBe(
//       `${COMMENT_OWNER_STATUS.isAdmin[0]} ${dataAdmin.answerer.firstName}`
//     );
//     expect(wrapper).toBeDefined();
//   });
//   it('Should render ReplyCommentsItem with superadmin role', () => {
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ReplyCommentsItem data={dataSuperAdmin} replyCommentId={replyCommentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper.find('span').text()).toBe(
//       `${COMMENT_OWNER_STATUS.isAdmin[0]} ${dataSuperAdmin.answerer.firstName}`
//     );
//     expect(wrapper).toBeDefined();
//   });

//   it('Should render not aprove style and without verifing icon', () => {
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ReplyCommentsItem data={dataWithOutVerifing} replyCommentId={replyCommentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper).toBeDefined();
//   });

//   it('Should return empty', () => {
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ReplyCommentsItem data={dataSecond} replyCommentId={replyCommentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper).toEqual({});
//   });
// });

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import ReplyCommentsItem from '../reply-comments-item';
import { theme } from '../../../../../../components/app/app-theme/app.theme';
import {
  dataUser,
  replyCommentId,
  dataSecond,
  dataAdmin,
  dataSuperAdmin,
  dataWithOutVerifing
} from './reply-comments-item.variables';
import { COMMENT_OWNER_STATUS } from '../../../../../../configs';

jest.mock('react-redux'); // tell gest that we want to mock useSelector, useDispatch, dont have retunr

jest.mock('../reply-comments-item.styles', () => ({
  // tell gest that we want to mock useStyles, and we have return something
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  // tell gest that we want to mock useTranslation, and we have return something
  useTranslation: () => ({
    t: () => ({ firstName: 'user' })
  })
}));

const SelectorsState = {
  userData: {
    _id: '111',
    firstName: 'user',
    email: 'test@gmail.com',
    role: 'admin'
  },
  language: 0
};

const state = {
  isModalShown: false
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
let wrapper;
describe('component', () => {
  beforeEach(() => {
    useSelector.mockImplementation(() => SelectorsState); // imitation useSelector (state data)
    wrapper = shallow(<ReplyCommentsItem {...props} />);
  });

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render ReplyCommentsItem with admin role', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyCommentsItem data={dataAdmin} replyCommentId={replyCommentId} />
      </ThemeProvider>
    );
    expect(wrapper.find('span').text()).toBe(
      `${COMMENT_OWNER_STATUS.isAdmin[0]} ${dataAdmin.answerer.firstName}`
    );
    expect(wrapper).toBeDefined();
  });
});
