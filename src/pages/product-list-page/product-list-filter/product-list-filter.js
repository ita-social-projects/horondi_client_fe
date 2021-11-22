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
import { countPerPage, TEXT_FIELDS } from '../../../configs';
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
    const sortQuery = searchParams.get(TEXT_FIELDS.SORT);
    const quantityPerPage = searchParams.get(countPerPage);
    history.push(`${pathToCategory}?page=1&sort=${sortQuery}&countPerPage=${quantityPerPage}`);
  };

  const filterButtons = Object.values(filtersOptions).map(
    ({ filterName, productFilter, list, filterHandler, clearFilter, categories }) => (
      <ProductsFiltersContainer
        key={filterName}
        filterName={filterName}
        productFilter={productFilter}
        list={list}
        filterHandler={filterHandler}
        clearFilter={clearFilter}
        categories={categories}
      />
    )
  );
  return (
    <div>
      <Grid container direction='column' className={styles.wrapper} spacing={2}>
        <Button
          className={styles.button}
          data-cy='clear_filter_button'
          variant='contained'
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
