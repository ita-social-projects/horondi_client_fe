import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Collapse, ListItemText, ListItem, List } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { URL_QUERIES_NAME } from '../../../configs/index';
import routes from '../../../configs/routes';
import { useStyles } from './sidebar-items.styles';

const SideBarItem = ({ category, handlerItem, models, translationsKey, mainItemStyles }) => {
  const { categoryFilter, modelsFilter } = URL_QUERIES_NAME;
  const { pathToCategory } = routes;

  const { t } = useTranslation();

  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };

  const modelsList = models.map((model) => {
    const modelUrl = `${pathToCategory}?${categoryFilter}=%2C${category}&${modelsFilter}=%2C${model._id}`;
    return (
      <ListItem button className={styles.nested} key={model._id} onClick={handlerItem}>
        <Link to={modelUrl}>
          <ListItemText
            className={styles.listItemText}
            primary={t(`${model.translationsKey}.name`)}
          />
        </Link>
      </ListItem>
    );
  });

  return (
    <>
      <li className={mainItemStyles}>
        <ListItemText button='true' onClick={handleClick} primary={t(`${translationsKey}.name`)} />
        {isListOpen ? <RemoveIcon onClick={handleClick} /> : <AddIcon onClick={handleClick} />}
      </li>
      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List className={styles.list}>{modelsList}</List>
      </Collapse>
      <div className={styles.itemHighlighting} />
    </>
  );
};

export default SideBarItem;
