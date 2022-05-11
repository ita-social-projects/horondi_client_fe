import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import SearchBar from '../search-bar';
import SearchIcon from '../SearchIcon';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('../search-bar.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');

useLazyQuery.mockImplementation((query, options) => {
  options.onCompleted();
  return [query, { error: null, loading: true }];
});

const initialSearchState = {
  searchFilter: '',
  products: [],
  searchBarVisibility: false,
  loading: false
};

describe('SearchBar component tests', () => {
  it('Should render one SearchBar component when the input value is typed', () => {
    const component = shallow(
      <SearchBar
        initialSearchState={initialSearchState}
        searchParams={initialSearchState}
        setSearchParams={() => null}
        fromNavBar
        handleErrors={jest.fn()}
      />
    );
    component.find(TextField).simulate('focus', { target: { value: 'test' } });
    expect(component.find(TextField)).toHaveLength(1);
  });
  it('Should render SearchBar component when regExp doesnt match', () => {
    const component = shallow(
      <SearchBar
        initialSearchState={initialSearchState}
        searchParams={initialSearchState}
        setSearchParams={() => null}
        fromNavBar
        handleErrors={jest.fn()}
      />
    );
    component.find(TextField).simulate('focus', { target: { value: '000' } });
    expect(component.find(TextField).props().inputProps.maxLength).toEqual(20);
  });
  it('Should render SearchIcon component', () => {
    const component = shallow(<SearchIcon />);
    expect(component).toBeDefined();
  });
});
