import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryType from '../delivery-type';

jest.mock('react-redux');
jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key) => key }) }));
jest.mock('../delivery-type.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));

const mockStore = { language: 0 };
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<DeliveryType />);

describe('<DeliveryType />', () => {
  it('should render <DeliveryType />', () => {
    expect(wrapper).toBeDefined();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle change', () => {
    const radioGroup = wrapper.find(`[name='delivery-type']`);
    radioGroup.props().onChange({ target: { value: 'SELFPICKUP' } });
    expect(radioGroup.props().value).toEqual('SELFPICKUP');
  });
});
