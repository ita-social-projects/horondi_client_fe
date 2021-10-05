import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useHistory, useLocation } from 'react-router';
import PriceFilter from './price-filter';
import HotItemFilter from './hot-item-filter';
import { useStyles } from './product-list-filter.styles';
import {
  getFiltredProducts,
  setCategoryFilter,
  setModelsFilter,
  setPatternsFilter,
  setPriceFilter
} from '../../../redux/products/products.actions';

import ProductsFiltersContainer from '../../../containers/products-filters-container';
import { selectFilterData } from '../../../redux/selectors/multiple.selectors';
import { countPerPage, sort } from '../../../configs';
import useProductFilters from '../../../hooks/use-product-filters';
import routes from '../../../const/routes';

const { pathToCategory } = routes;

const ProductListFilter = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { language } = useSelector(selectFilterData);
  const filtersOptions = useProductFilters();

  const handleClearFilter = () => {
    const sortQuery = searchParams.get(sort);
    const quantityPerPage = searchParams.get(countPerPage);

    history.push(`${pathToCategory}?page=1&sort=${sortQuery}&countPerPage=${quantityPerPage}`);
    dispatch(getFiltredProducts({}));
    dispatch(setPriceFilter([]));
    dispatch(setModelsFilter([]));
    dispatch(setCategoryFilter([]));
    dispatch(setPatternsFilter([]));
  };
  const filterButtons = Object.values(filtersOptions).map(
    ({
      filterName,
      productFilter,
      list,
      labels,
      filterAction,
      filterHandler,
      clearFilter,
      categories
    }) => (
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
          {t('productListPage.clearFilterButtonText')}
        </Button>
        <PriceFilter />
        <HotItemFilter language={language} />
        {filterButtons}
      </Grid>
    </div>
  );
};

export default ProductListFilter;
