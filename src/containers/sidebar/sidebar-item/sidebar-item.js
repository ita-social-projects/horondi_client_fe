import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
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

const backpack = {
  roltop: 'url',
  new: 'url',
  pampkin: 'url'
};
const bag = [{ roltop: 'url' }];

const models = ['backpacks', 'bags', 'wallet'];

const SideBarItem = ({ name, language }) => {
  //

  const styles = useStyles();
  const [isListOpen, toggleList] = useState(true);
  const handleClick = () => {
    toggleList((prevValue) => toggleList(!prevValue));
  };
  return (
    <div>
      <ListItemText
        button
        onClick={handleClick}
        primary={name[language].value}
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText>
      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {models.map((model) => (
            <ListItem button className={styles.nested} key={model}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={model} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};
export default SideBarItem;
