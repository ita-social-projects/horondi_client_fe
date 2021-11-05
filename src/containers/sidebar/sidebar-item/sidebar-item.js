import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Collapse, ListItemText, ListItem, List } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { POPULARITY, URL_QUERIES_NAME } from '../../../configs/index';

import { useStyles } from './sidebar-items.style';

const SideBarItem = ({ category, handlerItem, models, name, mainItemStyles }) => {
  const { sort, page, countPerPage, categoryFilter, modelsFilter, defaultPage } = URL_QUERIES_NAME;
  const { t, i18n } = useTranslation();

  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };

  return (
    <>
      <li className={mainItemStyles}>
        <ListItemText
          button='true'
          onClick={handleClick}
          primary={name[i18n.language === 'ua' ? 0 : 1].value}
        />
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
                to={`/catalog/products?${page}=${defaultPage}&${sort}=${POPULARITY}&${countPerPage}=9&${categoryFilter}=${category}&${modelsFilter}=${model._id}`}
              >
                <ListItemText primary={t(`${model.translations_key}.name`)} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarItem;
