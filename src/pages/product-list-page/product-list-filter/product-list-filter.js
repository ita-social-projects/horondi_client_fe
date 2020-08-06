import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux';
import ColorsFilter from './colors-filter';
import PatternsFilter from './patterns-filter';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';

import useStyles from './product-list-filter.styles';
import {
  getFiltredProducts,
  setColorsFilter,
  setPatternsFilter,
  setCategoryFilter,
  setPriceFilter,
  setSearchFilter
} from '../../../redux/filter/filter.actions';

import {
  SEARCH_TEXT,
  FILTER_BUTTON_TEXT,
  CLEAR_FILTER_BUTTON_TEXT
} from '../../../translations/product-list.translations';

const ProductListFilter = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const {
    products,
    currentPage,
    productsPerPage,
    sortByPrice,
    sortByRate,
    sortByPopularity,
    colorsFilter,
    patternsFilter,
    categoryFilter,
    priceFilter,
    searchFilter,
    language
  } = useSelector(
    ({
      Products: { products },
      Filter: {
        currentPage,
        productsPerPage,
        sortByPrice,
        sortByRate,
        sortByPopularity,
        colorsFilter,
        patternsFilter,
        categoryFilter,
        priceFilter,
        searchFilter
      },
      Language: { language }
    }) => ({
      products,
      currentPage,
      productsPerPage,
      sortByPrice,
      sortByRate,
      sortByPopularity,
      colorsFilter,
      patternsFilter,
      categoryFilter,
      priceFilter,
      searchFilter,
      language
    })
  );

  const handleSearch = (event) => {
    dispatch(setSearchFilter(event.target.value));
  };

  const handleFilter = () => {
    dispatch(
      getFiltredProducts({
        search: searchFilter,
        price: priceFilter,
        colors: colorsFilter,
        patterns: patternsFilter,
        category: categoryFilter,
        skip: currentPage * productsPerPage,
        limit: productsPerPage,
        basePrice: sortByPrice,
        rate: sortByRate,
        purchasedProducts: sortByPopularity
      })
    );
  };

  const handleClearFilter = () => {
    dispatch(setColorsFilter([]));
    dispatch(setPatternsFilter([]));
    dispatch(setCategoryFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(
      setPriceFilter([
        Math.min(...products.map((product) => product.basePrice)),
        Math.max(...products.map((product) => product.basePrice))
      ])
    );
    dispatch(getFiltredProducts());
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <FormControl component='fieldset' className={styles.formControl}>
          <FormGroup>
            <TextField
              className={styles.search}
              onChange={handleSearch}
              value={searchFilter}
              id='outlined-search'
              label={SEARCH_TEXT[language]}
              type='search'
              variant='outlined'
            />
          </FormGroup>
          <FormGroup className={styles.controls}>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleFilter}
            >
              {FILTER_BUTTON_TEXT[language]}
            </Button>
            <Button
              className={styles.button}
              variant='contained'
              onClick={handleClearFilter}
            >
              {CLEAR_FILTER_BUTTON_TEXT[language]}
            </Button>
          </FormGroup>
          <PriceFilter />
          <CategoryFilter selectedCategory={selectedCategory} />
          <ColorsFilter />
          <PatternsFilter />
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Paper>
    </div>
  );
};

export default ProductListFilter;
