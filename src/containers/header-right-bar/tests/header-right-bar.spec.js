import React from 'react';
import { useQuery } from '@apollo/client';
import SearchBar from '../../search-bar/search-bar';
import HeaderRightBar from '../header-right-bar';
import SearchBarList from '../../search-bar-list/search-bar-list';

jest.mock('../header-right-bar.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('../../search-bar/search-bar.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');

const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

useQuery.mockImplementation(() => ({
  ...useQueryData
}));

const initialSearchState = {
  searchFilter: '',
  products: [],
  searchBarVisibility: false,
  loading: false,
  error: true
};
describe('SearchBar component tests', () => {
  it('Should render <HeaderRightBar> component', () => {
    const component = shallow(
      <HeaderRightBar
        fromSideBar=''
        initialSearchState={initialSearchState}
        setIsMenuOpen={() => null}
      />
    );
    expect(component).toBeDefined();
  });

  it('Should render <SearchBar/> component', () => {
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

  it('Should render <SearchBarList/> component', () => {
    const component = shallow(<SearchBarList fromSideBar='' searchParams={initialSearchState} />);

    expect(component).toBeDefined();
  });
});
