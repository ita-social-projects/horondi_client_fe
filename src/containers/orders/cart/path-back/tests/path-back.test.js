import React from 'react';
import { useSelector } from 'react-redux';
import PathBack from '../path-back';

jest.mock('react-redux');

let wrapper;

const testSelector = (lightMode, language) => {
  useSelector.mockImplementation(() => ({
    lightMode,
    language
  }));
};

describe('Path back component tests', () => {
  it('should match snapshot', () => {
    testSelector(true, 0);
    wrapper = shallow(<PathBack />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    testSelector(false, 1);
    wrapper = shallow(<PathBack />);
  });
});
