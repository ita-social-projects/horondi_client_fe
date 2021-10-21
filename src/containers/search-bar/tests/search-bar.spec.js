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

useQuery.mockImplementation((query, options) => {
  options.onCompleted();
  return { error: null, loading: false };
});

const initialSearchState = {
  searchFilter: '',
  products: [],
  searchBarVisibility: false,
  loading: false
};

describe('SearchBar component tests', () => {
  it('Should render SearchBar component', () => {
    const component = shallow(
      <SearchBar
        fromSideBar=''
        initialSearchState={initialSearchState}
        searchParams={initialSearchState}
        setSearchParams={() => null}
      />
    );

    expect(component).toBeDefined();
  });
});
