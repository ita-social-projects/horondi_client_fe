import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Collapse, ListItemText, ListItem, List } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { URL_QUERIES_NAME } from '../../../configs/index';
import { POPULARITY } from '../constants';

import { useStyles } from './sidebar-items.styles';
import { ITEMS_PER_PAGE } from '../../../pages/product-list-page/constants';

const SideBarItem = ({ category, handlerItem, models, translationsKey, mainItemStyles }) => {
  const { sort, page, countPerPage, categoryFilter, modelsFilter, defaultPage } = URL_QUERIES_NAME;
  const { t } = useTranslation();

  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };
  const countPerPageValue = ITEMS_PER_PAGE[0].value;

  return (
    <>
      <li className={mainItemStyles}>
        <ListItemText button='true' onClick={handleClick} primary={t(`${translationsKey}.name`)} />
        {isListOpen ? <RemoveIcon onClick={handleClick} /> : <AddIcon onClick={handleClick} />}
      </li>

      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List className={styles.list}>
          {models.map((model) => (
            <ListItem button className={styles.nested} key={model._id} onClick={handlerItem}>
              <Link
                to={`/catalog/products?${page}=${defaultPage}&${sort}=${POPULARITY}&${countPerPage}=${countPerPageValue}&${categoryFilter}=${category}&${modelsFilter}=${model._id}`}
              >
                <ListItemText primary={t(`${model.translationsKey}.name`)} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>

      <div className={styles.itemHighlighting} />
    </>
  );
};

export default SideBarItem;
