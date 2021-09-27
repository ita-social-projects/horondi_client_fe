import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Collapse, ListItemText, ListItem, List } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { POPULARITY, URL_QUERIES_NAME } from '../../../configs/index';

import { useStyles } from './sidebar-items.style';

const SideBarItem = ({ category, handlerItem, models, language, name, mainItemStyles }) => {
  const { sort, page, countPerPage, categoryFilter, modelsFilter, defaultPage } = URL_QUERIES_NAME;

  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);
  const { quantityPerPage } = useSelector(({ Products }) => ({
    quantityPerPage: Products.countPerPage
  }));

  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
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
              component={Link}
              className={styles.nested}
              key={model._id}
              onClick={handlerItem}
            >
              <Link
                to={`/catalog/products?${page}=${defaultPage}&${sort}=${POPULARITY}&${countPerPage}=${quantityPerPage}&${categoryFilter}=${category}&${modelsFilter}=${model._id}`}
              >
                <ListItemText primary={model.name[language].value} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarItem;
