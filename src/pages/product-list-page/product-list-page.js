import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import ProductListItem from './product-list-item';
import {
  getAllProducts,
  setCurrentPage,
  getFiltredProducts
} from '../../redux/products/products.actions';
import {
  SHOW_FILTER_BUTTON_TEXT,
  HIDE_FILTER_BUTTON_TEXT
} from '../../translations/product-list.translations';

const ProductListPage = ({ category }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    language,
    filtredProducts,
    pagesCount,
    currentPage,
    productsPerPage,
    sortByRate,
    sortByPrice,
    filters,
    sortByPopularity
  } = useSelector(
    ({
      Language: { language },
      Products: {
        filtredProducts,
        pagesCount,
        sortByRate,
        sortByPrice,
        filters,
        sortByPopularity,
        productsPerPage,
        currentPage
      }
    }) => ({
      language,
      filtredProducts,
      pagesCount,
      sortByRate,
      sortByPrice,
      filters,
      sortByPopularity,
      productsPerPage,
      currentPage
    })
  );

  const {
    colorsFilter,
    patternsFilter,
    categoryFilter,
    isHotItemFilter,
    priceFilter,
    searchFilter
  } = filters;

  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(window.matchMedia('(min-width: 768px)').matches);
  }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getFiltredProducts({
        filters: {
          isHotItemFilter,
          patternsFilter: patternsFilter || [],
          colorsFilter: colorsFilter || [],
          categoryFilter: categoryFilter || [category._id],
          priceFilter,
          searchFilter
        },
        skip: currentPage * productsPerPage,
        limit: productsPerPage,
        basePrice: sortByPrice || undefined,
        rate: sortByRate || undefined,
        purchasedProducts: sortByPopularity || undefined,
        productsPerPage
      })
    );
  }, [
    dispatch,
    sortByRate,
    sortByPrice,
    sortByPopularity,
    productsPerPage,
    categoryFilter,
    category,
    currentPage
  ]);

  const changeHandler = (e, value) => dispatch(setCurrentPage(value));

  const handleFilterShow = () => setMobile(!mobile);

  const categoryText = category.name[language].value.toUpperCase();
  const itemsToShow = filtredProducts.map((product, index) => (
    <ProductListItem key={index} product={product} category={categoryText} />
  ));
  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3'>
        {categoryText}
      </Typography>
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.list}>
        <div className={styles.filter}>
          {mobile && <ProductFilter selectedCategory={category} />}
          {!mobile && (
            <Button
              className={`${styles.button} ${styles.mobile}`}
              variant='contained'
              onClick={handleFilterShow}
            >
              {SHOW_FILTER_BUTTON_TEXT[language].value}
            </Button>
          )}
          {mobile && (
            <div
              className={`${styles.hide} ${styles.mobile}`}
              variant='contained'
              onClick={handleFilterShow}
            >
              {HIDE_FILTER_BUTTON_TEXT[language].value}
            </div>
          )}
        </div>
        <div className={styles.productsDiv}>{itemsToShow}</div>
      </div>
      <div className={styles.paginationDiv}>
        <Pagination
          count={pagesCount}
          variant='outlined'
          shape='rounded'
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
ProductListPage.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string,
    isMain: PropTypes.bool,
    name: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string
      })
    )
  }).isRequired
};

export default ProductListPage;
