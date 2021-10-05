import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';

import EmptyCart from '../index';

configure({ adapter: new Adapter() });

let wrapper;

function spyOnSelector(language) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) =>
    cb({
      Language: { language }
    })
  );
}

describe('Empty cart component tests', () => {
  it('should match snapshot', () => {
    spyOnSelector(0);

    wrapper = shallow(<EmptyCart />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    spyOnSelector(1);

    wrapper = shallow(<EmptyCart />);
  });
});
