import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useQuery } from '@apollo/client';

import Sidebar from '../sidebar';

configure({ adapter: new Adapter() });

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getCategoriesForBurgerMenu: [{ category: { _id: 1 } }] }
};
const props = { fromSideBar: {}, isMenuOpen: true, setIsMenuOpen: () => null };

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux')
}));
jest.mock('@apollo/client');

describe('sidebar tests', () => {
  it('should be defined', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    wrapper = shallow(<Sidebar {...props} />);

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<Sidebar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<Sidebar {...props} />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));

    wrapper = shallow(<Sidebar {...props} />);
  });
});
