import React from 'react';
import { useSelector } from 'react-redux';
import PathBack from '../path-back';

jest.mock('react-redux');

let wrapper;

const testSelector = (language) => {
  useSelector.mockImplementation(() => ({
    language
  }));
};

describe('Path back component tests', () => {
  it('should match snapshot', () => {
    testSelector(0);
    wrapper = shallow(<PathBack />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    testSelector(1);
    wrapper = shallow(<PathBack />);
  });
});
