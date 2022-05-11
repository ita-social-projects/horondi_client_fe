import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

import { useStyles, searchStyles } from './product-sort.styles';
import CountPerPage from '../count-per-page';
import SearchBar from '../../../containers/search-bar/search-bar';
import { URL_QUERIES_NAME, TEXT_FIELD_VARIANT } from '../../../configs';
import { SORT_BY_SELECT_OPTIONS } from '../constants';

const ProductSort = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();

  const initialSearchState = {
    searchFilter: '',
    products: [],
    searchBarVisibility: false,
    loading: false
  };
  const [searchState, setSearchState] = useState(initialSearchState);
  const [sortType, setSortType] = useState(SORT_BY_SELECT_OPTIONS[0]);

  const searchParams = new URLSearchParams(search);
  const { sort, nameFilter, page, defaultPage } = URL_QUERIES_NAME;
  const nameFilterValue = searchParams.get(nameFilter);

  const [searchFieldValue, setSearchFieldValue] = useState('');

  useEffect(() => {
    if (!nameFilterValue) {
      setSearchFieldValue('');
    }
  }, [nameFilterValue]);

  const query = searchParams.get(sort);

  const selectHandler = (e) => {
    const { name } = e.target.value;
    searchParams.set(sort, name);
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  const debouncedHandleSearch = useCallback(
    debounce((value) => {
      searchParams.set(nameFilter, value);
      history.push(`?${searchParams.toString()}`);
    }, 1000),
    []
  );

  const handleSearch = (event) => {
    const { value } = event.target;
    debouncedHandleSearch.cancel();
    setSearchFieldValue(value);
    debouncedHandleSearch(value);
  };

  useEffect(() => {
    SORT_BY_SELECT_OPTIONS.forEach((optionValue) => {
      if (query === optionValue.name) {
        setSortType(optionValue);
      }
    });
    if (!query) {
      searchParams.set(sort, SORT_BY_SELECT_OPTIONS[0].name);
      history.push(`?${searchParams.toString()}`);
    }
  });

  const sortByText = t('common.sortBy');
  const selectOptions = SORT_BY_SELECT_OPTIONS.map((optionValue) => (
    <MenuItem key={optionValue.name} value={optionValue}>
      {t(`common.sortOptions.${optionValue.name}`)}
    </MenuItem>
  ));

  return (
    <div data-cy='sort' className={styles.sortDiv}>
      <SearchBar
        searchParams={searchState}
        setSearchParams={setSearchState}
        initialSearchState={initialSearchState}
        fieldOptions={searchStyles}
        fromNavBar={false}
        searchHandler={handleSearch}
        defaultValue={searchFieldValue}
      />

      <div className={styles.sortByText}>
        <span className={styles.selectLabel}>{sortByText}</span>
        <Select
          onChange={selectHandler}
          className={styles.sortSelect}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          value={sortType}
          name='sortType'
          MenuProps={{ classes: { paper: styles.dropdownMenuStyle }, variant: 'menu' }}
        >
          {selectOptions}
        </Select>
      </div>
      <CountPerPage />
    </div>
  );
};

export default ProductSort;
