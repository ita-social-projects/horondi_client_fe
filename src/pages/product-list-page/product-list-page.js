import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { useStyles } from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import ProductListItem from './product-list-item';
import {
  getAllFilters,
  setCurrentPage,
  getFiltredProducts,
  setCategoryFilter,
  setPriceFilter
} from '../../redux/products/products.actions';

import {
  SHOW_FILTER_BUTTON_TEXT
} from '../../translations/product-list.translations';
import { Loader } from '../../components/loader/loader';
import { setFilterMenuStatus } from '../../redux/theme/theme.actions';

const DRAWER_TEMPORARY = 'temporary';
const DRAWER_PERMANENT = 'permanent';
const TEMPORARY_WIDTHS = ['sm', 'xs'];

const ProductListPage = ({ category, model, width }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
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
    currency,
    filterStatus
  } = useSelector(({ Theme, Language, Products, Currency }) => ({
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
    currency: Currency.currency,
    filterStatus: Products.filterStatus,
  }));

  const { categoryFilter } = filters;
  useEffect(() => {
    dispatch(getAllFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFiltredProducts({}));
  }, [
    dispatch,
    sortByRate,
    sortByPrice,
    sortByPopularity,
    countPerPage,
    categoryFilter,
    category,
    model,
    currentPage,
    filterStatus
  ]);

  useEffect(() => {
    dispatch(setCategoryFilter([category._id]));
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
  }, [category, filterData, model, currency, dispatch]);

  const handleDrawerToggle = () => {
    dispatch(setFilterMenuStatus(!filterMenuStatus));
  };
  const checkWidth = () =>
    TEMPORARY_WIDTHS.find((element) => element === width);

  const drawerVariant = checkWidth() ? DRAWER_TEMPORARY : DRAWER_PERMANENT;

  const changeHandler = (e, value) => dispatch(setCurrentPage(value));

  const handleFilterShow = () => dispatch(setFilterMenuStatus(!filterMenuStatus));

  if (loading || !filterData) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  const categoryText = category.name[language].value.toUpperCase();
  const itemsToShow = products.map((product) => (
    <ProductListItem
      key={product._id}
      product={product}
      category={categoryText}
    />
  ));

  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3'>
        {categoryText}
      </Typography>
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.filterButtonBlock}>
        <Button
          className={styles.button}
          variant='contained'
          onClick={handleFilterShow}>
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
          <Toolbar />
          <div className={styles.drawerContainer}>
            <ProductFilter selectedCategory={category} />
            <Divider />
            <List />
          </div>
        </Drawer>
        <div className={styles.filterMenu}>
          <ProductFilter selectedCategory={category} />
        </div>
        <Grid container spacing={3} className={styles.productsDiv}>{itemsToShow}
          <div className={styles.paginationDiv}>
            <Pagination
              count={pagesCount}
              variant='outlined'
              shape='rounded'
              page={currentPage + 1}
              onChange={changeHandler}
            />
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default withWidth()(ProductListPage);
