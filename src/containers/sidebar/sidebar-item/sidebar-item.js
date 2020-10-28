import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useDispatch } from 'react-redux';
import { useStyles } from './sidebar-items.style';
import { setModelsFilter } from '../../../redux/products/products.actions';

const SideBarItem = ({ handlerItem, models, language, name }) => {
  const styles = useStyles();
  const [isListOpen, setIsListOpen] = useState(false);
  const handleClick = () => {
    setIsListOpen((prevValue) => setIsListOpen(!prevValue));
  };

  const dispatch = useDispatch();
  const handleModelClick = (models) => {
    dispatch(setModelsFilter(models.name[language].value));
    console.log(name.value);
  };
  return (
    <div>
      <ListItemText
        button='true'
        onClick={handleClick}
        primary={name[language].value}
        className={styles.link}
      ></ListItemText>

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
