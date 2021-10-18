import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import HeaderProfile from '../header-profile';
import { getFromLocalStorage } from '../../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../../configs';

jest.mock('../header-profile.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../services/local-storage.service');
jest.mock('react-redux');
jest.mock('connected-react-router', () => ({ push: () => 0 }));

const props = {
  fromSideBar: '',
  setIsMenuOpen: () => true,
  onClick: jest.fn(),
  onclose: jest.fn(),
  clickHandler: {
    handleClose: () => true,
    handleKeyDown: () => {},
    handleChangeTheme: () => true,
    handleRedirect: () => true
  }
};
const mockStore = {
  lightMode: true,
  userData: false
};
const mockDispatch = jest.fn();
let theme = LIGHT_THEME;

getFromLocalStorage.mockImplementation(() => theme);

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

describe('<HeaderProfile />', () => {
  it('should render <HeaderProfile />', () => {
    theme = DARK_THEME;
    const wrapper = shallow(<HeaderProfile {...props} />);
    const menu = wrapper.find(`[data-cy='menuItem']`).at(0);
    menu.props().onClick({ target: { setIsMenuOpen: false } });
    expect(wrapper).toBeDefined();
  });
  it('should simulate click on second child of <HeaderProfile />', () => {
    const wrapper = shallow(<HeaderProfile {...props} />);
    const menu = wrapper.find(`[data-cy='menuItem']`).at(1);
    menu.simulate('click', { persist: jest.fn(), setIsMenuOpen: () => true });
    expect(props.setIsMenuOpen()).toEqual(true);
  });
  it('should work with logout user', () => {
    const wrapper = shallow(<HeaderProfile {...props} />);
    const iconOut = wrapper.find(`[data-cy='iconOut']`);
    iconOut.simulate('click', { persist: jest.fn() });
    expect(wrapper).toBeDefined();
  });
  it('should work with login user', () => {
    mockStore.userData = true;
    const wrapper = shallow(<HeaderProfile {...props} />);
    const iconIn = wrapper.find(`[data-cy='iconIn']`);
    iconIn.simulate('click', { persist: jest.fn(), handleChangeTheme: DARK_THEME });
    expect(wrapper.find(MenuItem).length).toEqual(5);
  });
  it('should simulate clicks on children', () => {
    mockStore.userData = true;
    const wrapper = shallow(<HeaderProfile {...props} />);
    const menuItem2 = wrapper.find(`[data-cy='menuItem']`).at(2);
    const menuItem3 = wrapper.find(`[data-cy='menuItem']`).at(3);
    const menuItem4 = wrapper.find(`[data-cy='menuItem']`).at(4);
    menuItem2.simulate('click', { persist: jest.fn(), setIsMenuOpen: false });
    menuItem3.simulate('click', { persist: jest.fn() });
    menuItem4.simulate('click', { persist: jest.fn() });
    expect(wrapper).toBeDefined();
  });
  it('should work onClose', () => {
    const wrapper = shallow(<HeaderProfile {...props} />);
    const menu = wrapper.find(`[data-cy='menu']`);
    menu.props().onClose({ target: { handleClose: true } });
    expect(wrapper.props().children.length).toEqual(2);
  });
});
