import { Menu, MenuItem } from '@material-ui/core';
import { Person, PersonOutlineOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import HeaderProfile from '../header-profile';

jest.mock('../header-profile.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../services/local-storage.service');
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('connected-react-router', () => ({ push: () => 0 }));
const mockSetLightMode = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true, mockSetLightMode]
}));
jest.mock('react-router');
useHistory.mockReturnValue({
  location: {
    pathname: '/home'
  }
});

const props = {
  fromSideBar: '',
  setIsMenuOpen: () => true
};

const mockStore = {
  userData: {},
  language: 0
};
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);
useMutation.mockImplementation(() => [jest.fn()]);

let wrapper;

describe('<HeaderProfile />', () => {
  beforeEach(() => {
    wrapper = shallow(<HeaderProfile {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should render <HeaderProfile />', () => {
    const menu = wrapper.find(MenuItem).at(0);
    menu.props().onClick({ target: { setIsMenuOpen: false } });
    expect(wrapper).toBeDefined();
  });

  it('should simulate click on second child of <HeaderProfile />', () => {
    const menu = wrapper.find(MenuItem).at(1);
    menu.simulate('click', { persist: jest.fn(), setIsMenuOpen: () => true });
    expect(props.setIsMenuOpen()).toEqual(true);
  });

  it('should work with login user', () => {
    const iconIn = wrapper.find(Person);
    iconIn.simulate('click', { persist: jest.fn(), handleChangeTheme: false });
    expect(wrapper.find(MenuItem).length).toEqual(4);
  });
  it('should simulate clicks on children', () => {
    const menuItem1 = wrapper.find(MenuItem).at(1);
    const menuItem2 = wrapper.find(MenuItem).at(2);
    menuItem1.simulate('click', { persist: jest.fn() });
    menuItem2.simulate('click', { persist: jest.fn(), setIsMenuOpen: false });
    expect(wrapper).toBeDefined();
  });
  it('should work onClose', () => {
    const menu = wrapper.find(Menu);
    menu.props().onClose({ target: { handleClose: true } });
    expect(wrapper.props().children.length).toEqual(2);

    mockStore.userData = null;
    useSelector.mockImplementation(() => mockStore);
    const menuItem = wrapper.find(MenuItem).at(3);
    menuItem.simulate('click', { persist: jest.fn() });
  });

  it('simulate click on log in button', () => {
    const iconIn = wrapper.find(PersonOutlineOutlined);
    iconIn.simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
  });
});
