import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './count-per-page.styles';
import { setCountPerPage } from '../../../redux/products/products.actions';
import { ITEMS_PER_PAGE } from '../../../translations/product-list.translations';
import { setToLocalStorage } from '../../../services/local-storage.service';

const CountPerPage = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { countPerPage } = useSelector(({ Products: { countPerPage } }) => ({
    countPerPage
  }));

  const pickQuantity = (value) => {
    dispatch(setCountPerPage(value));
    setToLocalStorage('countPerPage', value);
  };

  const productsOnPage = ITEMS_PER_PAGE.map((item) => (
    <Button
      className={countPerPage === item.value && styles.selectedButton}
      data-cy={item.title}
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

export default CountPerPage;
