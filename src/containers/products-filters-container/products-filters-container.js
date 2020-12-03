import React, { useState } from 'react';
import {
  ListItemText,
  Checkbox
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { useStyles } from './products-filters-container.styles';
import {
  CLEAR_FILTER_BUTTON_TEXT
} from '../../translations/product-list.translations';

const ProductsFiltersContainer = ({
  productFilter,
  list,
  categories,
  filterHandler,
  clearFilter,
  filterName
}) => {
  const styles = useStyles();
  const { language } = useSelector(
    ({ Language }) => ({
      language: Language.language
    })
  );
  const [isListOpen, setIsListOpen] = useState(true);
  const handleClick = () => {
    setIsListOpen(!isListOpen);
  };
  const checkCategory = (category)=>{
    const categoryName = categories.filter(element => element.name[0].value === category)
    if(categoryName.length&& productFilter.find((filter) => filter === categoryName[0]._id)){
      return true
    }
  }
  return (
    <Grid className={styles.container}>
      <li className={styles.mainItem} onClick={handleClick}>
        <ListItemText
          button='true'
          primary={filterName}
        />
        <span className={styles.mainItemIcon}>{isListOpen ? <RemoveIcon /> : <AddIcon />}</span>
      </li>
      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List>
          {productFilter.length ?
            <ListItem
              onClick={clearFilter}
              className={styles.clearFilter}>
              {CLEAR_FILTER_BUTTON_TEXT[language].value}
              <CloseIcon fontSize='small' /></ListItem> : null}
          {list.map((listItems) => (
            <ListItem
              button
              className={styles.nested}
              key={listItems}
            >
              <Checkbox
                name={listItems}
                onChange={filterHandler}
                size='small'
                color='default'
                checked={productFilter ? productFilter.find((filter) => filter === listItems)
                  ||checkCategory(listItems)
                  : false}
              />
              <ListItemText primary={listItems} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Grid>
  );
};

export default ProductsFiltersContainer;
