import React from 'react';
import EmptyOrder from '../index';

let wrapper;

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('Empty order component tests', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);
  });
});
