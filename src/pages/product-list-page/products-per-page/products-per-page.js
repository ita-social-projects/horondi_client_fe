import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './products-per-page.styles';
import { setProductsPerPage } from '../../../redux/filter/filter.actions';

const ITEMS_PER_PAGE = [
  {
    title: 'nine products per page',
    value: 9
  },
  { title: 'eighteen products per page', value: 18 },
  { title: 'thirty products per page', value: 30 }
];

const productsCount = sessionStorage.getItem('productsPerPage') || 9;

const ProductsPerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductsPerPage(+productsCount));
  }, [dispatch]);

  const pickQuantity = (value) => {
    sessionStorage.setItem('productsPerPage', value);
    dispatch(setProductsPerPage(value));
  };
  const productsOnPage = ITEMS_PER_PAGE.map((item) => (
    <Button
      title={item.title}
      className={styles.itemsButton}
      key={item.value}
      type='button'
      value={item.value}
      onClick={() => pickQuantity(item.value)}
    >
      {item.value}
    </Button>
  ));
  return <div>{productsOnPage}</div>;
};

export default ProductsPerPage;
