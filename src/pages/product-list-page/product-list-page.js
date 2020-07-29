import React, { useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import {
  setCurrentPage,
  getFiltredProducts
} from '../../redux/filter/filter.actions';
import ProductListItem from './product-list-item';
import { getAllProducts } from '../../redux/products/products.actions';

const ProductListPage = ({ category }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    language,
    products,
    pagesCount,
    currentPage,
    productsPerPage,
    sortByRate,
    sortByPrice,
    colorsFilter,
    patternsFilter,
    categoryFilter,
    priceFilter,
    searchFilter,
    sortByPopularity
  } = useSelector(
    ({
      Language: { language },
      Filter: {
        products,
        pagesCount,
        sortByRate,
        sortByPrice,
        colorsFilter,
        patternsFilter,
        categoryFilter,
        priceFilter,
        searchFilter,
        sortByPopularity,
        productsPerPage,
        currentPage
      }
    }) => ({
      language,
      products,
      pagesCount,
      sortByRate,
      sortByPrice,
      colorsFilter,
      patternsFilter,
      categoryFilter,
      priceFilter,
      searchFilter,
      sortByPopularity,
      productsPerPage,
      currentPage
    })
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(
      getFiltredProducts({
        patterns: patternsFilter,
        colors: colorsFilter,
        category: categoryFilter || [category._id],
        price: priceFilter,
        search: searchFilter,
        skip: currentPage * productsPerPage,
        limit: productsPerPage,
        basePrice: sortByPrice || undefined,
        rate: sortByRate || undefined,
        purchasedProducts: sortByPopularity || undefined
      })
    );
  }, [
    dispatch,
    sortByRate,
    sortByPrice,
    sortByPopularity,
    productsPerPage,
    category
  ]);

  const changeHandler = (e, value) => dispatch(setCurrentPage(value));

  const categoryText = category.name[language].value.toUpperCase();
  const itemsToShow = products.map((product, index) => (
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
          <ProductFilter selectedCategory={category.name[1].value} />
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
  category: Proptypes.string
};

ProductListPage.defaultProps = {
  category: 'backpacks'
};
export default ProductListPage;
