import React from 'react';

import { ListItemText, Checkbox } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useTranslation } from 'react-i18next';
import { useStyles } from './products-filters-container.styles';

const ProductsFiltersContainer = ({
  productFilter,
  list,
  categories,
  filterHandler,
  filterName
}) => {
  const styles = useStyles();
  const { i18n } = useTranslation();

  const checkCategory = (category) => {
    const categoryName = categories.filter(
      (element) => element.name[i18n.language === 'ua' ? 0 : 1].value === category
    );
    if (categoryName.length && productFilter.find((filter) => filter === categoryName[0]._id)) {
      return true;
    }
  };

  return (
    <Grid className={styles.container}>
      <li className={styles.mainItem}>
        <ListItemText button='true' primary={filterName} />
      </li>
      <List>
        {list.map((listItem) => (
          <label key={listItem}>
            {' '}
            <ListItem
              selected={
                productFilter
                  ? productFilter.find((filter) => filter === listItem) || checkCategory(listItem)
                  : false
              }
              button
              className={styles.nested}
              key={listItem}
            >
              <Checkbox
                name={listItem}
                onChange={filterHandler}
                size='small'
                color='default'
                checked={checkCategory(listItem) || false}
              />
              <ListItemText primary={listItem} />
            </ListItem>{' '}
          </label>
        ))}
      </List>
    </Grid>
  );
};

export default ProductsFiltersContainer;
