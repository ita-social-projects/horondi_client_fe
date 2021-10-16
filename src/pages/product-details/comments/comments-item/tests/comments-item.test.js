// import * as React from 'react';
// import Enzyme, { mount, shallow } from 'enzyme';
// import { act } from '@testing-library/react';
// import Adapter from 'enzyme-adapter-react-16';
// import { ThemeProvider } from '@material-ui/styles';
// import * as redux from 'react-redux';
// import CommentsItem from '../index';
// import { theme } from '../../../../../components/app/app-theme/app.theme';
// import { data, commentId, dataWithOupReply, dataWithOutUser } from './comments-item.variables';
// import { Loader } from '../../../../../components/loader/loader';

// Enzyme.configure({ adapter: new Adapter() });

// const mockDispatch = jest.fn();
// jest.mock('react-redux');

// jest.mock('../comments-item.styles', () => ({
//   useStyles: () => ({})
// }));

// const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
// const mockUseSelector = jest.spyOn(redux, 'useSelector');

// const themeValue = theme('light');
// describe('Comments test', () => {
//   let wrapper;

//   beforeEach(() => {
//     mockUseDispatch.mockImplementation(() => mockDispatch);
//     mockUseSelector.mockReturnValue({
//       language: '0',
//       userData: { _id: '111', email: 'test@gmail.com' },
//       currentLimit: 10,
//       snackBarMessage: ['Message'],
//       replyLoading: false,
//       replyLoadingId: '1122',
//       getReplyLoading: false,
//       getReplyLoadingId: '2233'
//     });
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <CommentsItem data={data} commentId={commentId} />
//       </ThemeProvider>
//     );
//   });

//   afterEach(() => {
//     wrapper.unmount();
//     mockUseDispatch.mockClear();
//     mockUseSelector.mockClear();
//   });

//   it('Should render Comment Item', () => {
//     expect(wrapper).toBeDefined();
//   });

//   it('Should render two Loader', () => {
//     mockUseSelector.mockReturnValue({
//       language: '0',
//       userData: { _id: '111' },
//       currentLimit: 20,
//       snackBarMessage: ['Message 2'],
//       replyLoading: true,
//       replyLoadingId: '111222',
//       getReplyLoading: true,
//       getReplyLoadingId: '111222'
//     });
//     wrapper = mount(
//       <ThemeProvider theme={theme('light')}>
//         <CommentsItem data={data} commentId={commentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper.exists(Loader)).toBe(true);
//     expect(wrapper.find(Loader).length).toBe(2);
//   });

//   it('Should simulate show reply comments event', () => {
//     wrapper = shallow(
//       <ThemeProvider theme={themeValue}>
//         <CommentsItem data={dataWithOupReply} commentId={commentId} />
//       </ThemeProvider>
//     );
//     act(() => {
//       wrapper.find('div').at(13).props().onClick();
//     });
//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//   });

//   it('Should render without replyCount and ShopIcon and deleted user', () => {
//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <CommentsItem data={dataWithOutUser} commentId={commentId} />
//       </ThemeProvider>
//     );
//     expect(wrapper.find('span').at(1).prop('children', 'Видалений користувач'));
//   });
// });

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import CommentsItem from '../comments-item';

jest.mock('react-redux'); // tell gest that we want to mock useSelector, useDispatch, dont have retunr

jest.mock('../comments-item.styles', () => ({
  // tell gest that we want to mock useStyles, and we have return something
  useStyles: () => ({})
}));

jest.mock('react-i18next', () => ({
  // tell gest that we want to mock useTranslation, and we have return something
  useTranslation: () => ({
    t: () => ({ common: 'ua-Ukr' })
  })
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch); // imitation dispatch (function)

const state = {
  userData: { _id: '111' },
  currentLimit: 10,
  replyLoading: false,
  replyLoadingId: 1122,
  getReplyLoading: false,
  getReplyLoadingId: 2233
};

useSelector.mockImplementation(() => state); // imitation useSelector (state data)

const props = {
  data: {
    user: { firstName: 'user', email: 'test@gmail.com', _id: '111', role: 'user' },
    replyComments: {
      count: 2,
      items: [
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
    }
  },
  commentId: '111222'
};

const wrapper = shallow(<CommentsItem {...props} />);

describe('component', () => {
  it('should render', () => {
    expect(wrapper).toBeDefined();
  });
});
