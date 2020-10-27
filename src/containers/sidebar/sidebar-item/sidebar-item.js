import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { getCategoryURL } from '../../../pages/home/categories-list/categories-list';
import { useStyles } from './sidebar-items.style';
import { setModelsFilter } from '../../../redux/products/products.actions';

const SideBarItem = ({ handler, models, language, name }) => {
  const styles = useStyles();
  const [isListOpen, toggleList] = useState(false);
  const handleClick = () => {
    toggleList((prevValue) => toggleList(!prevValue));
  };

  const dispatch = useDispatch();
  const handleModelClick = (models) => {
    console.log('vjltkgkfk', models);
    dispatch(setModelsFilter(models.name[language].value));
  };

  return (
    <div>
      <ListItemText
        button='true'
        onClick={handleClick}
        primary={name[language].value}
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText>

      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List className={styles.list}>
          {models.map((model) => (
            <ListItem
              button
              className={styles.nested}
              key={model._id}
              onClick={() => {
                handler();
                handleModelClick(model);
              }}
              component={Link}
              to={`/${name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={model.name[language].value} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default SideBarItem;
