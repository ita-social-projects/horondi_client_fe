import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import Comments from '../comments';
import { theme } from '../../../../components/app/app-theme/app.theme';
import { Loader } from '../../../../components/loader/loader';

Enzyme.configure({ adapter: new Adapter() });

const mockSetShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();
const mockDispatch = jest.fn();
const mockHandlerSubmit = jest.fn();

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({ refetch: () => jest.fn() }));
useMutation.mockImplementation(() => [jest.fn()]);
jest.mock('../../../../hooks/use-comment-validation', () => ({
  __esModule: true,
  default: () => ({
    handleSubmit: mockHandlerSubmit,
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    setFieldValue: mockSetFieldValue,
    resetForm: jest.fn(),
    values: { text: 'Дуже гарна сумка' },
    errors: {},
    shouldValidate: jest.fn(),
    setShouldValidate: mockSetShouldValidate
  })
}));

describe('Comments test', () => {
  let wrapper;

  beforeEach(() => {
    const themeValue = theme('light');
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
      commentsLoading: false,
      language: '0',
      productId: '111',
      comments: [
        {
          _id: 'c3a84a5b9866c30390366111',
          text: 'nice1',
          replyCommentsCount: 2,
          replyComments: {
            count: 2,
            items: [
              { _id: 'c3a84a5b9866c30390366168', replyText: 'text reply' },
              { _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }
            ]
          }
        },
        { _id: 'c3a84a5b9866c30390366112', text: 'nice2', replyCommentsCount: 0 },
        { _id: 'c3a84a5b9866c30390366113', text: 'nice3', replyCommentsCount: 0 },
        { _id: 'c3a84a5b9866c30390366114', text: 'nice4', replyCommentsCount: 0 },
        { _id: 'c3a84a5b9866c30390366115', text: 'nice5', replyCommentsCount: 0 }
      ],
      userData: { _id: '111' },
      currentLimit: 10,
      getCommentsLoading: false,
      commentsCount: 10,
      skip: 10,
      snackBarMessage: ['Message']
    });
    wrapper = shallow(
      <ThemeProvider theme={themeValue}>
        <Comments />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('Should render two Loader', () => {
    mockUseSelector.mockReturnValue({
      commentsLoading: true,
      getCommentsLoading: true,
      language: '0',
      productId: '111',
      comments: [],
      userData: {},
      currentLimit: 10,
      commentsCount: 5,
      skip: 10,
      snackBarMessage: ['Message']
    });
    wrapper = mount(
      <ThemeProvider theme={theme('light')}>
        <Comments />
      </ThemeProvider>
    );
    expect(wrapper.exists(Loader)).toBe(true);
    expect(wrapper.find(Loader).length).toBe(2);
  });

  it('Should render Comments page', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should simulate onChange event', () => {
    wrapper
      .find('textarea')
      .props()
      .onChange({ target: { value: 'Дуже сподобалась покупка' } });
    expect(mockSetFieldValue).toHaveBeenCalledTimes(1);
  });

  it('Should simulate button event', () => {
    wrapper.find('button').props().onClick();
    expect(mockSetShouldValidate).toHaveBeenCalledTimes(1);
  });

  it('Should simulate submit event', () => {
    wrapper.find('form').props().onSubmit();
    expect(mockHandlerSubmit).toHaveBeenCalledTimes(1);
  });
});
