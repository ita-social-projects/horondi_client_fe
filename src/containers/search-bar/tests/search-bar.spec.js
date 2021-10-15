import React from 'react';
import { useQuery } from '@apollo/client';

import SearchBar from '../search-bar';

jest.mock('../search-bar.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => () => null
}));
jest.mock('@apollo/client');
jest.mock('../../../components/app/app', () => ({
  SearchContext: {}
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({ searchParams: {}, setSearchParams: () => null })
}));
useQuery.mockImplementation(() => ({ error: null, loading: false }));

describe('SearchBar component tests', () => {
  it('Should render SearchBar component', () => {
    const component = shallow(<SearchBar fromSideBar='' />);

    expect(component).toBeDefined();
  });
});
