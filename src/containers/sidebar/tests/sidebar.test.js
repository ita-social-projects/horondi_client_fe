import React from 'react';
import { useQuery } from '@apollo/client';

import Sidebar from '../sidebar';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getCategoriesForBurgerMenu: [{ category: { _id: 1 } }] }
};
const props = { fromSideBar: {}, isMenuOpen: true, setIsMenuOpen: () => null };

jest.mock('@apollo/client');
jest.mock('../../sidemenu-right-bar', () => ({
  __esModule: true,
  default: () => null
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light',
      cart: {
        borderColor: '#000000'
      }
    }
  })
}));

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
