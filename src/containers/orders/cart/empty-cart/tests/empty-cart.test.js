import React from 'react';
import EmptyCart from '../index';

let wrapper;

describe('Empty cart component tests', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<EmptyCart />);
    expect(wrapper).toMatchSnapshot();
  });
});
