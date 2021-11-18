import React from 'react';
import * as redux from 'react-redux';
import { useMutation } from '@apollo/client';
import { Button, TextField } from '@material-ui/core';
import ReplyForm from '../index';

const mockSetShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();
const mockDispatch = jest.fn();
const mockHandlerSubmit = jest.fn();
const mockAddReply = jest.fn();

jest.mock('@apollo/client');
jest.mock('../reply-form.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({ setSnackBarMessage: () => null })
}));

useMutation.mockImplementation((query, options) => {
  options.onCompleted();
  options.onError();
  return [mockAddReply, { loading: false }];
});
const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

jest.mock('../../../../../../hooks/use-comment-validation', () => ({
  __esModule: true,
  default: () => ({
    handleSubmit: mockHandlerSubmit,
    handleBlur: jest.fn(),
    setFieldValue: mockSetFieldValue,
    values: { text: 'Дуже гарна сумка' },
    errors: {},
    setShouldValidate: mockSetShouldValidate
  })
}));

describe('Comments test', () => {
  let wrapper;

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
      commentsLoading: false,
      language: '0',
      productId: '111',
      userData: { _id: '111' }
    });
    wrapper = shallow(
      <ReplyForm cancel={() => null} commentId='2131231' refetchComments={() => null} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
  });

  it('Should render reply form', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should simulate submit event', () => {
    wrapper.find(Button).at(0).props().onClick();
    expect(mockSetShouldValidate).toHaveBeenCalledTimes(1);
  });

  it('Should simulate onChange event', () => {
    wrapper
      .find(TextField)
      .props()
      .onChange({ target: { value: 'Дуже сподобалась покупка' } });
    expect(mockSetFieldValue).toHaveBeenCalledTimes(1);
  });

  it('Should simulate onSubmit event', () => {
    wrapper.find('form').props().onSubmit();
    expect(mockHandlerSubmit).toHaveBeenCalledTimes(1);
  });
});
