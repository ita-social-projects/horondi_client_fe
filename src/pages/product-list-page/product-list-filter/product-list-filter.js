import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useHistory, useLocation } from 'react-router';
import PriceFilter from './price-filter';
import HotItemFilter from './hot-item-filter';

import { useStyles } from './product-list-filter.styles';
import {
  getFiltredProducts,
  setColorsFilter,
  setPatternsFilter,
  setCategoryFilter,
  setModelsFilter
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
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { filters, language } = useSelector(
    ({ Products, Language }) => ({
      filters: Products.filters,
      language: Language.language
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

  const handleFilterChange = ({ target }, queryName, categoriesList) => {
    let query = searchParams.get(queryName);
    if (categoriesList) {
      const categoryId = categoriesList.filter(element => element.name[language].value === target.name)[0]._id;
      if (query) {
        if (!target.checked) {
          query = query.replace(categoryId, '');
        } else {
          query = query.concat(',', categoryId);
        }
      } else {
        query = categoryId;
      }
    } else if (query) {
      if (!target.checked) {
        query = query.replace(target.name, '');
      } else {
        query = query.concat(',', target.name);
      }
    } else {
      query = target.name;
    }
    if (query) {
      searchParams.set(queryName, query);
    } else {
      searchParams.delete(queryName);
    }
    searchParams.set('page', 1);
    history.push(`?${searchParams.toString()}`);
  };

  const handleFilterClear = (setFilter, queryName) => {
    searchParams.set('page', 1);
    dispatch(setFilter([]));
    searchParams.delete(queryName);
    history.push(`?${searchParams.toString()}`);
  };
  const filtersOptions = {
    categories: {
      filterName: CATERGORY_TEXT[language].value,
      productFilter: categoryFilter,
      list: categoriesNames,
      categories,
      filterAction: setCategoryFilter,
      labels: 'categoryFilter',
      clearFilter: () => handleFilterClear(setCategoryFilter, 'categoryFilter'),
      filterHandler: (e) => handleFilterChange(e, 'categoryFilter', categories)
    },
    models: {
      filterName: MODEL_TEXT[language].value,
      productFilter: modelsFilter,
      list: modelNames,
      filterAction: setModelsFilter,
      labels: 'modelsFilter',
      clearFilter: () => handleFilterClear(setModelsFilter, 'modelsFilter'),
      filterHandler: (e) => handleFilterChange(e, 'modelsFilter')
    },
    colors: {
      filterName: COLORS_TEXT[language].value,
      productFilter: colorsFilter,
      list: colorsNames,
      filterAction: setColorsFilter,
      labels: 'colorsFilter',
      clearFilter: () => handleFilterClear(setColorsFilter, 'colorsFilter'),
      filterHandler: (e) => handleFilterChange(e, 'colorsFilter')
    },
    patterns: {
      filterName: PATTERN_TEXT[language].value,
      productFilter: patternsFilter,
      list: patternsNames,
      filterAction: setPatternsFilter,
      labels: 'patternsFilter',
      clearFilter: () => handleFilterClear(setPatternsFilter, 'patternsFilter'),
      filterHandler: (e) => handleFilterChange(e, 'patternsFilter')
    }
  };
  const handleClearFilter = () => {
    const sortQuery = searchParams.get('sort');
    const quantityPerPage = searchParams.get('countPerPage');
    history.push(`/products/?page=1&sort=${sortQuery}&countPerPage=${quantityPerPage}`);
    dispatch(getFiltredProducts({}));
  };
  const filterButtons = Object.values(
    filtersOptions
  ).map(({ filterName, productFilter, list, labels, filterAction, filterHandler, clearFilter }) => (
    <ProductsFiltersContainer
      key={filterName}
      filterName={filterName}
      productFilter={productFilter}
      list={list}
      labels={labels}
      filterAction={filterAction}
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
        <PriceFilter />
        <HotItemFilter language={language} />
        {filterButtons}
      </Grid>
    </div>
  );
};

export default ProductListFilter;
