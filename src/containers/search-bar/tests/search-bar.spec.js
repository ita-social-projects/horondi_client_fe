import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../search-bar';

jest.mock('../search-bar.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);

describe('SearchBar component tests', () => {
  it('Should render ProfiSearchBarlePage', () => {
    const component = shallow(<SearchBar fromSideBar='' />);
    expect(component).toBeDefined();
  });
});
