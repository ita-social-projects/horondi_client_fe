import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory, useLocation } from 'react-router';
import { useQuery } from '@apollo/client';
import PriceFilter from './price-filter';
import HotItemFilter from './hot-item-filter';
import { useStyles } from './product-list-filter.styles';

import ProductsFiltersContainer from '../../../containers/products-filters-container';
// import SearchBar from '../../../containers/search-bar/search-bar';
// import SearchBarList from '../../../containers/search-bar-list/search-bar-list';
import { countPerPage, sort } from '../../../configs';
import useProductFilters from '../../../hooks/use-product-filters';
import routes from '../../../configs/routes';
import { getAllFiltersQuery } from '../operations/product-list.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const { pathToCategory } = routes;

const ProductListFilter = ({ filterParams }) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const [priceRange, setPriceRange] = useState({});
  const [filters, setFilters] = useState({});
  const filtersOptions = useProductFilters(filterParams, filters);
  // const initialSearchState = {
  //   searchFilter: '',
  //   products: [],
  //   searchBarVisibility: false,
  //   loading: false
  // };
  // const [searchParams1, setSearchParams1] = useState(initialSearchState);

  const searchParams = new URLSearchParams(search);

  const { error, loading } = useQuery(getAllFiltersQuery, {
    onCompleted: (data) => {
      setPriceRange({
        maxPrice: data.getProductsFilters.maxPrice,
        minPrice: data.getProductsFilters.minPrice
      });
      setFilters({
        categories: data.getProductsFilters.categories,
        models: data.getProductsFilters.models,
        patterns: data.getProductsFilters.patterns
      });
    }
  });

  if (error || loading) return errorOrLoadingHandler(error, loading);

  const handleClearFilter = () => {
    const sortQuery = searchParams.get(sort);
    const quantityPerPage = searchParams.get(countPerPage);
    history.push(`${pathToCategory}?page=1&sort=${sortQuery}&countPerPage=${quantityPerPage}`);
  };

  const filterButtons = Object.values(filtersOptions).map(
    ({ filterName, productFilter, list, filterHandler, categories }) => (
      <ProductsFiltersContainer
        key={filterName}
        filterName={filterName}
        productFilter={productFilter}
        list={list}
        filterHandler={filterHandler}
        categories={categories}
      />
    )
  );

  const something = {
    variant: 'contained'
  };

  return (
    <div>
      <Grid container direction='column' className={styles.wrapper} spacing={2}>
        {/* <SearchBar
          searchParams={searchParams1}
          setSearchParams={setSearchParams1}
          initialSearchState={initialSearchState}
          fieldOptions={searchStyles}
        />
        <SearchBarList searchParams={searchParams1} /> */}
        <Button
          className={styles.button}
          data-cy='clear_filter_button'
          // variant='contained'
          {...something}
          onClick={handleClearFilter}
        >
          {t('common.clearFilter')}
        </Button>
        <PriceFilter priceRange={priceRange} />
        <HotItemFilter />
        {filterButtons}
      </Grid>
    </div>
  );
};

export default ProductListFilter;
