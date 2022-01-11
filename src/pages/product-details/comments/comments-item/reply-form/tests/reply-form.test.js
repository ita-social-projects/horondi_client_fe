import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import ReplyForm from '../index';
import { theme } from '../../../../../../components/app/app-theme/app.theme';

Enzyme.configure({ adapter: new Adapter() });

const mockSetShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();
const mockDispatch = jest.fn();
const mockHandlerSubmit = jest.fn();

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
    const themeValue = theme('light');
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
      commentsLoading: false,
      language: '0',
      productId: '111',
      userData: { _id: '111' }
    });
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ReplyForm />
      </ThemeProvider>
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
    wrapper.find('button').at(0).props().onClick();
    expect(mockSetShouldValidate).toHaveBeenCalledTimes(1);
  });

  it('Should simulate onChange event', () => {
    wrapper
      .find('textarea')
      .props()
      .onChange({ target: { value: 'Дуже сподобалась покупка' } });
    expect(mockSetFieldValue).toHaveBeenCalledTimes(1);
  });

  it('Should simulate onSubmit event', () => {
    wrapper.find('form').props().onSubmit();
    expect(mockHandlerSubmit).toHaveBeenCalledTimes(1);
  });
});
