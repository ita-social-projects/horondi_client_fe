import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import NovaPost from '../nova-post';

// import { LIGHT_THEME } from '../../../../../../configs';
// import { getFromLocalStorage } from '../../../../../../services/local-storage.service'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../nova-post.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('react-redux');

useSelector.mockImplementation(() => ({
  deliveryLoading: true,
  cities: '',
  warehouses: ''
}));

const props = {
  isLightTheme: true,
  language: 1,
  setFieldValue: jest.fn(),
  errors: jest.fn(),
  touched: jest.fn(),
  values: {
    firstName: '',
    lastName: '',
    email: 'test@gmail.com',
    phoneNumber: '000'
  }
};

describe('NovaPost component tests', () => {
  it('Should render NovaPoshta', () => {
    const wrapper = shallow(<NovaPost {...props} />);
    expect(wrapper).toBeDefined();
  });
  it('Should 2', () => {
    const wrapper = shallow(<NovaPost {...props} />);
    const actual = wrapper.find('h3').text();
    const expected = 'Delivery Address';
    expect(actual).toEqual(expected);
  });
  it('should handle change', () => {
    const wrapper = shallow(<NovaPost {...props} />);
    expect(wrapper).toMatchSnapshot();

    // const changeEvent = { target: { value: 101 } };
    // expect(wrapper.find(props.setFieldValue)).to.have.lengthOf(1);
    // expect(props.setFieldValue).not.toBeCalled();
    // wrapper.simulate('change', changeEvent);
    // expect(props.setFieldValue).toBeCalledWith(changeEvent);
  });
});
