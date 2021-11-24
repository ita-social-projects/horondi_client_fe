import React, { useState } from 'react';

import { ListItemText, Checkbox } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import { useStyles } from './products-filters-container.styles';

const ProductsFiltersContainer = ({
  productFilter,
  list,
  categories,
  filterHandler,
  clearFilter,
  filterName
}) => {
  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(true);
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setIsListOpen(!isListOpen);
  };
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
      <li className={styles.mainItem} onClick={handleClick}>
        <ListItemText button='true' primary={filterName} />
        <span className={styles.mainItemIcon}>{isListOpen ? <RemoveIcon /> : <AddIcon />}</span>
      </li>
      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List>
          {productFilter.length ? (
            <ListItem onClick={clearFilter} className={styles.clearFilter}>
              {t('common.clearFilter')}
              <CloseIcon fontSize='small' />
            </ListItem>
          ) : null}
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
      </Collapse>
    </Grid>
  );
};

export default ProductsFiltersContainer;
