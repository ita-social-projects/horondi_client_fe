import React from 'react';
import { useQuery } from '@apollo/client';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from '@material-ui/core';
import SearchBar from '../search-bar';
import SearchIcon from '../SearchIcon';

const inputMock = jest.fn();
const handleOnBlur = jest.fn();
const handleSearch = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('../search-bar.styles.js', () => ({
  useStyles: () => ({})
}));
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const Test = () => (
  <TextField placeholder='roll' onBlur={handleOnBlur} onFocus={handleSearch} onChange={inputMock} />
);

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
    const component = render(
      <SearchBar
        fromSideBar=''
        initialSearchState={initialSearchState}
        searchParams={initialSearchState}
        setSearchParams={() => null}
      />
    );

    expect(component).toBeDefined();
  });
  it('Input', () => {
    const container = render(<Test />);

    const input = container.getByPlaceholderText('roll');

    fireEvent.change(input, { target: { value: 'roll' } });
    expect(input.value).toBe('roll');
    expect(inputMock.mock.calls).toHaveLength(1);
  });
  it('Should render SearchIcon component', () => {
    const component = render(<SearchIcon />);
    expect(component).toBeDefined();
  });
});
