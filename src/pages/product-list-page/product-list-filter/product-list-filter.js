import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PriceFilter from './price-filter';
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
  setModelsFilter, changeFilterStatus
} from '../../../redux/products/products.actions';

import {
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
    categoryFilter,
    colorsFilter,
    patternsFilter,
    modelsFilter
  } = filters;

  const {
    categories,
    categoriesNames,
    colorsNames,
    patternsNames,
    modelNames
  } = useProductSpecies();

  const handleFilterChange = ({ target }, setFilter, filter, categoriesList) => {
    if (categoriesList) {
      const categoryId = categoriesList.filter(element => element.name[0].value === target.name)[0]._id;
      if (!target.checked) {
        dispatch(setFilter(
          filter.filter((category) => category !== categoryId)
        ));
      } else {
        dispatch(
          setFilter([...new Set([...filter, categoryId])])
        );
      }
    } else if (!target.checked) {
      dispatch(
        setFilter(
          filter.filter((name) => name !== target.name)
        ));
    } else {
      dispatch(
        setFilter([...new Set([...filter, target.name])])
      );
    }
    dispatch(changeFilterStatus(!filterStatus));
  };

  const handleFilterClear = (setFilter) => {
    dispatch(setFilter([]));
    dispatch(changeFilterStatus(!filterStatus));
  };
  const filtersOptions = {
    categories: {
      filterName: CATERGORY_TEXT[language].value,
      productFilter: categoryFilter,
      list: categoriesNames,
      categories,
      clearFilter: () => handleFilterClear(setCategoryFilter),
      filterHandler: (e) => handleFilterChange(e, setCategoryFilter, categoryFilter, categories)
    },
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
      categories={categories}
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
        <Button
          className={styles.button}
          data-cy='clear_filter_button'
          variant='contained'
          onClick={handleClearFilter}
        >
          {CLEAR_FILTER_BUTTON_TEXT[language].value}
        </Button>
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
};

export default ProductListFilter;
