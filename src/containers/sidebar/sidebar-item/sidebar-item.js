import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryURL } from '../../../pages/home/categories-list/categories-list';
import { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStyles } from './sidebar-items.style';
import {
  backpacks,
  accessories,
  bags,
  bagsEn,
  accessoriesEn,
  backpacksEn
} from './side-bar-item-component';
import { useDispatch } from 'react-redux';
import { setModelsFilter } from '../../../redux/products/products.actions';

let menuItems = {
  0: {
    Bags: bags,
    Accessories: accessories,
    Backpacks: backpacks
  },
  1: {
    Bags: bagsEn,
    Accessories: accessoriesEn,
    Backpacks: backpacksEn
  }
};

const SideBarItem = ({ name, language }) => {
  const styles = useStyles();
  const [isListOpen, toggleList] = useState(false);
  const handleClick = () => {
    toggleList((prevValue) => toggleList(!prevValue));
  };

  const handleClickk = (model) => {
    dispatch(setModelsFilter([model.action]));
  };

  const dispatch = useDispatch();

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
        <List>
          {menuItems[language][name[1].value].map((model) => (
            <ListItem
              button
              className={styles.nested}
              key={model.name}
              onClick={() => handleClickk(model)}
              component={Link}
              to={`/${getCategoryURL(name)}/${model.name}`}
            >
              {/* button component={Link} to={model.url} */}
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={model.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default SideBarItem;
