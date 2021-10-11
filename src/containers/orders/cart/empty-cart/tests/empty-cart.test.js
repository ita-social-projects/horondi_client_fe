import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../index';

jest.mock('react-redux');
let wrapper;

function testSelector(language) {
  useSelector.mockImplementation(() => ({
    language: { language }
  }));
}

describe('Empty cart component tests', () => {
  it('should match snapshot', () => {
    testSelector(0);
    wrapper = shallow(<EmptyCart />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    testSelector(1);
    wrapper = shallow(<EmptyCart />);
  });
});
