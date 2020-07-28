import React, { useEffect, useCallback } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import {
  setCurrentPage,
  getFiltredProducts,
  setCategory
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
    pattern,
    colors,
    sortByPopularity,
    filteredCategory
  } = useSelector(
    ({
      Language: { language },
      Filter: {
        products,
        pagesCount,
        currentPage,
        productsPerPage,
        sortByRate,
        sortByPrice,
        pattern,
        colors,
        sortByPopularity,
        filteredCategory
      }
    }) => ({
      language,
      products,
      currentPage,
      pagesCount,
      productsPerPage,
      sortByRate,
      sortByPrice,
      pattern,
      colors,
      sortByPopularity,
      filteredCategory
    })
  );
  const getProducts = useCallback(
    (args) => {
      dispatch(getAllProducts());
      dispatch(getFiltredProducts(args));
    },
    [
      dispatch,
      sortByRate,
      sortByPrice,
      sortByPopularity,
      colors,
      pattern,
      currentPage,
      productsPerPage,
      category
    ]
  );
  useEffect(() => {
    dispatch(setCategory(category));
    getProducts({
      rate: sortByRate || undefined,
      basePrice: sortByPrice || undefined,
      pattern,
      colors,
      skip: currentPage * productsPerPage,
      limit: productsPerPage,
      purchasedCount: sortByPopularity || undefined,
      category: filteredCategory
    });
  }, [
    dispatch,
    category,
    currentPage,
    productsPerPage,
    sortByPrice,
    sortByPopularity,
    sortByRate,
    pattern,
    colors
  ]);

  const changeHandler = (e, value) => dispatch(setCurrentPage(value));
  if (category === 'backpacks') {
    category = [
      {
        value: 'рюкзаки'
      },
      { value: 'backpacks' }
    ];
  }
  if (category === 'bags') {
    category = [
      {
        value: 'сумки'
      },
      { value: 'bags' }
    ];
  }
  if (category === 'accessories') {
    category = [
      {
        value: 'аксесуари'
      },
      { value: 'accessories' }
    ];
  }

  category = category[language].value;
  const itemsToShow = products.map((product, index) => (
    <ProductListItem key={index} product={product} category={category} />
  ));
  category = category.toUpperCase();
  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3'>
        {category}
      </Typography>
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.list}>
        <div className={styles.filter}>
          <ProductFilter />
        </div>
        <div className={styles.products}>{itemsToShow}</div>
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
