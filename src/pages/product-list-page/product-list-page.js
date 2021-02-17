import React, { useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useHistory, useLocation } from 'react-router';
import { useStyles } from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import ProductListItem from './product-list-item';
import {
  getAllFilters,
  getFiltredProducts,
  setCurrentPage
} from '../../redux/products/products.actions';

import {
  DRAWER_PERMANENT,
  DRAWER_TEMPORARY,
  PRODUCT_NOT_FOUND,
  SHOW_FILTER_BUTTON_TEXT,
  TEMPORARY_WIDTHS
} from '../../translations/product-list.translations';
import { Loader } from '../../components/loader/loader';
import { setFilterMenuStatus } from '../../redux/theme/theme.actions';

const ProductListPage = ({ model, width }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const url = searchParams.toString();
  const {
    filterMenuStatus,
    loading,
    language,
    products,
    pagesCount,
    currentPage,
    countPerPage,
    sortByRate,
    sortByPrice,
    filters,
    filterData,
    sortByPopularity,
    filterStatus
  } = useSelector(({ Theme, Language, Products }) => ({
    filterMenuStatus: Theme.filterMenuStatus,
    loading: Products.loading,
    language: Language.language,
    products: Products.products,
    pagesCount: Products.pagesCount,
    sortByRate: Products.sortByRate,
    sortByPrice: Products.sortByPrice,
    filters: Products.filters,
    filterData: Products.filterData,
    sortByPopularity: Products.sortByPopularity,
    countPerPage: Products.countPerPage,
    currentPage: Products.currentPage,
    filterStatus: Products.filterStatus
  }));

  const {
    modelsFilter,
    categoryFilter,
    colorsFilter,
    patternsFilter,
    isHotItemFilter
  } = filters;

  useEffect(() => {
    dispatch(getAllFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(searchParams.get('page')));
    dispatch(getFiltredProducts({}));
  }, [
    dispatch,
    sortByRate,
    sortByPrice,
    sortByPopularity,
    countPerPage,
    modelsFilter.length,
    categoryFilter.length,
    colorsFilter.length,
    patternsFilter.length,
    isHotItemFilter,
    currentPage,
    filterStatus,
    url
  ]);
  const handleDrawerToggle = () => {
    dispatch(setFilterMenuStatus(!filterMenuStatus));
  };
  const checkWidth = () =>
    TEMPORARY_WIDTHS.find((element) => element === width);

  const drawerVariant = checkWidth() ? DRAWER_TEMPORARY : DRAWER_PERMANENT;

  const changeHandler = (e, value) => {
    searchParams.set('page', value);
    history.push(`?${searchParams.toString()}`);
  };

  const handleFilterShow = () =>
    dispatch(setFilterMenuStatus(!filterMenuStatus));

  if (loading || filterData.length) {
    return <Loader />;
  }

  const itemsToShow =
    products.length > 0
      ? products.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))
      : null;

  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3' />
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.filterButtonBlock}>
        <Button
          className={styles.button}
          variant='contained'
          onClick={handleFilterShow}
        >
          {SHOW_FILTER_BUTTON_TEXT[language].value}
        </Button>
      </div>
      <div className={styles.list}>
        <Drawer
          id='menuDrawer'
          className={styles.drawer}
          variant={drawerVariant}
          open={filterMenuStatus}
          onClose={handleDrawerToggle}
          classes={{
            paper: styles.drawerPaper
          }}
        >
          <div className={styles.drawerContainer}>
            <ProductFilter />
          </div>
        </Drawer>
        <div className={styles.filterMenu}>
          <ProductFilter />
        </div>
        {products.length > 0 ? (
          <div className={styles.productsWrapper}>
            <Grid container spacing={3} className={styles.productsDiv}>
              {itemsToShow}
            </Grid>
            <div className={styles.paginationDiv}>
              <Pagination
                count={pagesCount}
                variant='outlined'
                shape='rounded'
                page={currentPage + 1}
                onChange={changeHandler}
              />
            </div>
          </div>
        ) : (
          <div className={styles.defaultBlock}>
            <div>{PRODUCT_NOT_FOUND[language].value}</div>
            <div>
              <MoodBadIcon className={styles.defaultIcon} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withWidth()(ProductListPage);
