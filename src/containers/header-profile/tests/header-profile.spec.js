import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderProfile from '../header-profile';
import ThemeContext from '../../../context/theme-context';

jest.mock('../header-profile.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../../services/local-storage.service');
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('connected-react-router', () => ({ push: () => 0 }));
jest.mock('react-router');
useHistory.mockReturnValue({
  location: {
    pathname: '/home'
  }
});

const mockDispatch = jest.fn();
const mockSetLightMode = jest.fn();
const mockSetMenuOpen = jest.fn();

const props = {
  fromSideBar: '',
  setIsMenuOpen: mockSetMenuOpen
};

const mockStore = {
  userData: { configs: { theme: 'light', language: 'ua', currency: 0 } },
  language: 0
};

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);
useMutation.mockImplementation(() => [jest.fn()]);

describe('<HeaderProfile />', () => {
  beforeEach(() => {
    render(
      <ThemeContext.Provider value={[true, mockSetLightMode]}>
        <HeaderProfile {...props} />
      </ThemeContext.Provider>
    );
  });

  it('should simulate click on log in button', () => {
    const iconIn = screen.getByTestId('iconIn');
    fireEvent.click(iconIn);
    expect(screen.getAllByTestId('menuItem').length).toEqual(4);
  });

  it('should simulate clicks on childrens', () => {
    const menuItem1 = screen.getAllByTestId('menuItem')[0];
    const menuItem2 = screen.getAllByTestId('menuItem')[1];
    const menuItem3 = screen.getAllByTestId('menuItem')[2];
    fireEvent.click(menuItem1);
    fireEvent.click(menuItem2);
    fireEvent.click(menuItem3);
    expect(mockSetMenuOpen).toHaveBeenCalledTimes(3);
  });

  it('should log out user', () => {
    const menuItem4 = screen.getAllByTestId('menuItem')[3];
    fireEvent.click(menuItem4);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
