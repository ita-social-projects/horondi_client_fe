import React from 'react';
import { useSelector } from 'react-redux';
import SearchBarList from '../search-bar-list';

jest.mock('../search-bar-list.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

jest.mock('connected-react-router', () => ({
  push: 0
}));

useSelector.mockImplementation(() => ({
  products: [],
  searchBarVisibility: true,
  searchBarLoading: ''
}));

describe('SearchBarList component tests', () => {
  it('Should render SearchBarList', () => {
    const component = shallow(<SearchBarList />);
    expect(component).toBeDefined();
  });
});
