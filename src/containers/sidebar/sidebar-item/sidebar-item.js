import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useStyles } from './sidebar-items.style';
import { POPULARITY, URL_QUERIES_NAME } from '../../../configs/index';

const SideBarItem = ({ category, handlerItem, models, language, name, mainItemStyles }) => {
  const styles = useStyles();
  const history = useHistory();
  const [isListOpen, setIsListOpen] = useState(false);
  const { sort, page, countPerPage, categoryFilter, modelsFilter, defaultPage } = URL_QUERIES_NAME;
  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };
  const { quantityPerPage } = useSelector(({ Products }) => ({
    quantityPerPage: Products.countPerPage
  }));
  const handleModelClick = (productModels, categoryId) => {
    history.push('/');
    history.push(
      `catalog/products?${page}=${defaultPage}&${sort}=${POPULARITY}&${countPerPage}=${quantityPerPage}&${categoryFilter}=${categoryId}&${modelsFilter}=${productModels._id}`
    );
  };
  return (
    <>
      <li className={mainItemStyles}>
        <ListItemText button='true' onClick={handleClick} primary={name[language].value} />
        {isListOpen ? <RemoveIcon onClick={handleClick} /> : <AddIcon onClick={handleClick} />}
      </li>

      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List className={styles.list}>
          {models.map((model) => (
            <ListItem
              button
              className={styles.nested}
              key={model._id}
              onClick={() => {
                handlerItem();
                handleModelClick(model, category);
              }}
            >
              <ListItemText primary={model.name[language].value} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarItem;
