import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useStyles } from './count-per-page.styles';
import { URL_QUERIES_NAME, ITEMS_PER_PAGE, TEXT_FIELD_VARIANT } from '../../../configs';

const CountPerPage = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const { countPerPage, page, defaultPage } = URL_QUERIES_NAME;
  const countPerPageText = t('productListPage.countPerPage');

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
    <div className={styles.pageCounter}>
      {countPerPageText}
      <ButtonGroup className={styles.items}>{productsOnPage}</ButtonGroup>
    </div>
  );
};
export default CountPerPage;
