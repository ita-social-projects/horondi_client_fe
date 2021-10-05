import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useStyles } from './count-per-page.styles';
import { setCountPerPage } from '../../../redux/products/products.actions';
import { ITEMS_PER_PAGE } from '../../../translations/product-list.translations';
import { URL_QUERIES_NAME } from '../../../configs/index';
import { TEXT_FIELD_VARIANT } from '../../../const/material-ui';

const CountPerPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { countPerPage, page, defaultPage } = URL_QUERIES_NAME;
  const countPerPageText = t('productListPage.countPerPage');
  useEffect(() => {
    dispatch(setCountPerPage(+searchParams.get(countPerPage)));
  }, [dispatch, searchParams.toString()]);
  const pickQuantity = (value) => {
    searchParams.set(page, defaultPage);
    searchParams.set(countPerPage, value);
    history.push(`?${searchParams.toString()}`);
  };
  const productsOnPage = ITEMS_PER_PAGE.map((item) => (
    <Button
      className={
        Number(searchParams.get('countPerPage')) === item.value ? styles.selectedButton : ''
      }
      data-cy={item.title}
      key={item.value}
      type='button'
      value={item.value}
      onClick={() => pickQuantity(item.value)}
      variant={TEXT_FIELD_VARIANT.OUTLINED}
    >
      {item.value}
    </Button>
  ));
  return (
    <div>
      {countPerPageText}
      <ButtonGroup className={styles.items}>{productsOnPage}</ButtonGroup>
    </div>
  );
};
export default CountPerPage;
