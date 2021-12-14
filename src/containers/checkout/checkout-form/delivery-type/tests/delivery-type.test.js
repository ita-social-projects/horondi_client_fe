import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryType from '../delivery-type';

jest.mock('react-redux');
jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key) => key }) }));
jest.mock('../delivery-type.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));

const mockStore = { language: 0 };
const mockDispatch = jest.fn();

const props = {
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: { courierOrganization: 'test' },
  errors: { courierOrganization: 'test' },
  setFieldValue: jest.fn()
};

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<DeliveryType {...props} />);

describe('<DeliveryType />', () => {
  const radioGroup = wrapper.find(`[name='delivery-type']`);
  it('should render <DeliveryType />', () => {
    expect(wrapper).toBeDefined();
  });
  it('should handle courierOrganization change', () => {
    radioGroup.props().onChange({ target: { value: 'COURIER' } });
    const select = wrapper.find(`[name='courierOrganization']`);
    select.props().onChange({ target: { value: 'NOVAPOSTCOURIER' } });
    expect(select.props().value).toEqual('NOVAPOSTCOURIER');
  });
});
