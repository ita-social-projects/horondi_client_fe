import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as apollo from '@apollo/client';

import Sidebar from '../sidebar';

configure({ adapter: new Adapter() });

let wrapper;

function spyOnUseQuery(error, loading) {
  jest.spyOn(apollo, 'useQuery').mockImplementation(() => ({
    loading,
    error,
    data: { getCategoriesForBurgerMenu: [{ category: { _id: 1 } }] }
  }));
  jest.spyOn(reactRedux, 'useSelector').mockImplementation(() => ({ language: 0 }));
}

describe('sidebar tests', () => {
  it('should match snapshot', () => {
    spyOnUseQuery(null, null);
    wrapper = shallow(<Sidebar fromSideBar={{}} isMenuOpen setIsMenuOpen={() => null} />);
  });

  it('should cover other branches', () => {
    spyOnUseQuery(true, null);
    wrapper = shallow(<Sidebar fromSideBar={{}} isMenuOpen setIsMenuOpen={() => null} />);
  });

  it('should cover rest branches', () => {
    spyOnUseQuery(null, true);
    wrapper = shallow(<Sidebar fromSideBar={{}} isMenuOpen setIsMenuOpen={() => null} />);
  });
});
