import * as React from 'react';
import Enzyme, { mount } from 'enzyme';
import { act } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import CommentsItem from '../index';
import { theme } from '../../../../../components/app/app-theme/app.theme';
import { data, commentId, dataWithOupReply, dataWithOutUser } from './comments-item.variables';
import { Loader } from '../../../../../components/loader/loader';

Enzyme.configure({ adapter: new Adapter() });

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
      userData: { _id: '111', email: 'test@gmail.com' },
      currentLimit: 10,
      snackBarMessage: ['Message'],
      replyLoading: false,
      replyLoadingId: '1122',
      getReplyLoading: false,
      getReplyLoadingId: '2233'
    });
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <CommentsItem data={data} commentId={commentId} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('Should render Comment Item', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render two Loader', () => {
    mockUseSelector.mockReturnValue({
      language: '0',
      userData: { _id: '111' },
      currentLimit: 20,
      snackBarMessage: ['Message 2'],
      replyLoading: true,
      replyLoadingId: '111222',
      getReplyLoading: true,
      getReplyLoadingId: '111222'
    });
    wrapper = mount(
      <ThemeProvider theme={theme('light')}>
        <CommentsItem data={data} commentId={commentId} />
      </ThemeProvider>
    );
    expect(wrapper.exists(Loader)).toBe(true);
    expect(wrapper.find(Loader).length).toBe(2);
  });

  it('Should simulate show reply comments event', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <CommentsItem data={dataWithOupReply} commentId={commentId} />
      </ThemeProvider>
    );
    act(() => {
      wrapper.find('div').at(13).props().onClick();
    });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it('Should render without replyCount and ShopIcon and deleted user', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <CommentsItem data={dataWithOutUser} commentId={commentId} />
      </ThemeProvider>
    );
    expect(wrapper.find('span').at(1).prop('children', 'Видалений користувач'));
  });
});
