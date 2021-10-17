import React from 'react';
import Courier from '../courier';

jest.mock('../courier.styles', () => ({ useStyles: () => ({}) }));

const props = {
  isLightTheme: true,
  language: 1,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  handleChange: jest.fn(),
  touched: {},
  errors: {}
};

describe('<Courier />', () => {
  it('should render <Courier />', () => {
    const wrapper = shallow(<Courier {...props} />);
    expect(wrapper).toBeDefined();
  });
});
