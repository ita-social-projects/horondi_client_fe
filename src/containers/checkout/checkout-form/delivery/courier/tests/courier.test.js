import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Courier from '../courier';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../courier.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('react-redux');

const props = {
  isLightTheme: true,
  language: 1,
  values: {
    firstName: '',
    lastName: '',
    email: 'test@gmail.com',
    phoneNumber: '000'
  },
  handleChange: jest.fn(),
  touched: jest.fn(),
  errors: jest.fn()
};

describe('<Courier />', () => {
  it('should render <Courier />', () => {
    const wrapper = shallow(<Courier {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should find text', () => {
    const courier = shallow(<Courier {...props} />);
    const actual = courier.find('h3').text();
    const expected = 'Delivery Address';
    expect(actual).toEqual(expected);
  });
});
