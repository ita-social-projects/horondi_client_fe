import React, {useState } from 'react';
import {
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import { useStyles } from './products-filters-container.styles';


const ProductsFiltersContainer = ({
  productFilter,
  list,
  filterHandler,
  clearFilter,
  filterName
}) => {
  const styles = useStyles();

  const [isListOpen, setIsListOpen] = useState(true);
  const handleClick = ()=>{
    setIsListOpen(!isListOpen);
  }

  return (
    <Grid className={styles.container}>
      <li className={styles.mainItem}  onClick={handleClick}>
        <ListItemText
          button='true'
          primary={filterName}
        />
        <span className={styles.mainItemIcon}>{isListOpen ? <RemoveIcon /> : <AddIcon />}</span>
      </li>
      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List>
          {productFilter.length?
            <ListItem className={styles.nested}>Очистити фільтр</ListItem>:null}
          {list.map((list) => (
            <ListItem
              button
              className={styles.nested}
              key={list}
            >
              <Checkbox
                name={list}
                onChange={filterHandler}
                size='small'
                checked={productFilter?productFilter.find((filter) => filter === list):false}
              />
              <ListItemText primary={list} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Grid>
  );
};

export default ProductsFiltersContainer;
