import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useDispatch } from 'react-redux';
import { useStyles } from './sidebar-items.style';
import { setModelsFilter } from '../../../redux/products/products.actions';

const SideBarItem = ({
  handlerItem,
  models,
  language,
  name,
  mainItemStyles
}) => {
  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);
  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };

  const dispatch = useDispatch();
  const handleModelClick = (productModels) => {
    dispatch(setModelsFilter(productModels.name[language].value));
  };
  return (
    <>
      <li className={mainItemStyles}>
        <ListItemText
          button='true'
          onClick={handleClick}
          primary={name[language].value}
        />
        {isListOpen ? <RemoveIcon /> : <AddIcon />}
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
                handleModelClick(model);
              }}
              component={Link}
              to={`/${name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
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
