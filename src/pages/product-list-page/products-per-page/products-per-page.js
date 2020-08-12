import React, { useEffect } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './products-per-page.styles';
import { setProductsPerPage } from '../../../redux/products/products.actions';
import { ITEMS_PER_PAGE } from '../../../translations/product-list.translations';

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
      key={item.value}
      type='button'
      value={item.value}
      onClick={() => pickQuantity(item.value)}
      variant='outlined'
    >
      {item.value}
    </Button>
  ));
  return <ButtonGroup className={styles.items}>{productsOnPage}</ButtonGroup>;
};

export default ProductsPerPage;
