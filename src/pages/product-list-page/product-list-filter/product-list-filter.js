import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ColorsFilter from './colors-filter';
import PatternsFilter from './patterns-filter';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';
import ModelsFilter from './models-filter';
import HotItemFilter from './hot-item-filter';

import { useStyles } from './product-list-filter.styles';
import {
  getFiltredProducts,
  setColorsFilter,
  setPatternsFilter,
  setCategoryFilter,
  setPriceFilter,
  setSearchFilter,
  setHotItemFilter,
  setModelsFilter, setCurrentPage, changeFilterStatus
} from '../../../redux/products/products.actions';

import {
  SEARCH_TEXT,
  FILTER_BUTTON_TEXT,
  MODEL_TEXT,
  PATTERN_TEXT, CATERGORY_TEXT,
  CLEAR_FILTER_BUTTON_TEXT, COLORS_TEXT
} from '../../../translations/product-list.translations';
import useProductSpecies from '../../../hooks/use-product-species';
import ProductsFiltersContainer from '../../../containers/products-filters-container';

const ProductListFilter = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { filterStatus, filterData, filters, language, currency } = useSelector(
    ({ Products, Language, Currency }) => ({
      filterData: Products.filterData,
      filters: Products.filters,
      language: Language.language,
      currency: Currency.currency,
      filterStatus: Products.filterStatus
    })
  );
  const {
    colorsFilter,
    patternsFilter,
    modelsFilter
  } = filters;

  const {
    colorsNames,
    patternsNames,
    modelNames
  } = useProductSpecies();

  const handleFilterChange = ({ target }, setFilter, filter) => {
    if (!target.checked) {
      dispatch(
        setFilter(
          filter.filter((name) => name !== target.name)
        )
      );
    } else {
      dispatch(
        setFilter([...new Set([...filter, target.name])])
      );
    }
    dispatch(changeFilterStatus(!filterStatus));
  };

  const handleFilterClear = (setFilter) => {
    dispatch(setFilter([]));
  };
  const filtersOptions = {
    models: {
      filterName: MODEL_TEXT[language].value,
      productFilter: modelsFilter,
      list: modelNames,
      clearFilter: () => handleFilterClear(setModelsFilter),
      filterHandler: (e) => handleFilterChange(e, setModelsFilter, modelsFilter)
    },
    colors: {
      filterName: COLORS_TEXT[language].value,
      productFilter: colorsFilter,
      list: colorsNames,
      clearFilter: () => handleFilterClear(setColorsFilter),
      filterHandler: (e) => handleFilterChange(e, setColorsFilter, colorsFilter)
    },
    patterns: {
      filterName: PATTERN_TEXT[language].value,
      productFilter: patternsFilter,
      list: patternsNames,
      clearFilter: () => handleFilterClear(setPatternsFilter),
      filterHandler: (e) => handleFilterChange(e, setPatternsFilter, patternsFilter)
    }
  };
  const handleClearFilter = () => {
    dispatch(setColorsFilter([]));
    dispatch(setPatternsFilter([]));
    dispatch(setCategoryFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(setModelsFilter([]));
    dispatch(
      setPriceFilter([
        Math.min(
          ...filterData.map((product) => product.basePrice[currency].value)
        ),
        Math.max(
          ...filterData.map((product) => product.basePrice[currency].value)
        )
      ])
    );
    dispatch(getFiltredProducts({}));
  };
  const filterButtons = Object.values(
    filtersOptions
  ).map(({ filterName, productFilter, list, labels, filterHandler, clearFilter }) => (
    <ProductsFiltersContainer
      key={filterName}
      filterName={filterName}
      productFilter={productFilter}
      list={list}
      labels={labels}
      filterHandler={filterHandler}
      clearFilter={clearFilter}
    />
  ));
  return (
    <div>
      <Grid
        container
        alignItems='space-around'
        direction='column'
        className={styles.wrapper}
        spacing={2}
      >
        <CategoryFilter
          filterData={filterData}
          filters={filters}
          language={language}
        />
        <PriceFilter
          filterData={filterData}
          filters={filters}
          language={language}
          currency={currency}
        />
        <HotItemFilter filters={filters} language={language} />
        {filterButtons}
      </Grid>
    </div>
  );

  //
  // const { searchFilter } = filters;
  //
  // const handleSearch = (event) => {
  //   dispatch(setSearchFilter(event.target.value));
  // };
  //
  // const handleFilter = () => {
  //   dispatch(getFiltredProducts({}));
  // };
  //

  //
  // return (
  //   <div className={styles.root}>
  //     <Paper className={styles.paper}>
  //       <FormControl component='fieldset' className={styles.formControl}>
  //         <FormGroup data-cy='search'>
  //           <TextField
  //             className={styles.search}
  //             onChange={handleSearch}
  //             value={searchFilter}
  //             id='outlined-search'
  //             label={SEARCH_TEXT[language].value}
  //             type='search'
  //             variant='outlined'
  //           />
  //         </FormGroup>
  //         <FormGroup className={styles.controls}>
  //           <Button
  //             className={styles.button}
  //             data-cy='filter_button'
  //             variant='contained'
  //             onClick={handleFilter}
  //           >
  //             {FILTER_BUTTON_TEXT[language].value}
  //           </Button>
  //           <Button
  //             className={styles.button}
  //             data-cy='clear_filter_button'
  //             variant='contained'
  //             onClick={handleClearFilter}
  //           >
  //             {CLEAR_FILTER_BUTTON_TEXT[language].value}
  //           </Button>
  //         </FormGroup>
  //         <HotItemFilter filters={filters} language={language} />
  //         <PriceFilter
  //           filterData={filterData}
  //           filters={filters}
  //           language={language}
  //           currency={currency}
  //         />
  //         <CategoryFilter
  //           filterData={filterData}
  //           filters={filters}
  //           language={language}
  //         />
  //         <ModelsFilter
  //           filterData={filterData}
  //           filters={filters}
  //           language={language}
  //         />
  //         <ColorsFilter
  //           filterData={filterData}
  //           filters={filters}
  //           language={language}
  //         />
  //         <PatternsFilter
  //           filterData={filterData}
  //           filters={filters}
  //           language={language}
  //         />
  //       </FormControl>
  //     </Paper>
  //   </div>
  // );
};

export default ProductListFilter;
