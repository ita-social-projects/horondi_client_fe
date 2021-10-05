import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { Loader } from '../../../components/loader/loader';

import CartPage from '../index';

configure({ adapter: new Adapter() });

let wrapper;

function spyOnSelector(list, loading) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) => cb({ Cart: { list, loading } }));
}

describe('Cart page tests', () => {
  it('should match snapshot', () => {
    spyOnSelector([], false);

    wrapper = shallow(<CartPage />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should find loader', () => {
    spyOnSelector([], true);

    wrapper = shallow(<CartPage />);

    expect(wrapper.exists(Loader)).toBe(true);
  });

  it('should cover other branches', () => {
    spyOnSelector([{}], false);

    wrapper = shallow(<CartPage />);
  });
});
