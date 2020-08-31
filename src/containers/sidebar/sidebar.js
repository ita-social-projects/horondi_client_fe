import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './sidebar.styles';

import { getCategoryURL } from '../../pages/home/categories-list/categories-list';

const Sidebar = ({ setMenuOpen, menu }) => {
  const styles = useStyles();
  const { categories, language } = useSelector(({ Categories, Language }) => ({
    categories: Categories.list,
    language: Language.language
  }));

  const menuList = categories
    .filter(({ isMain }) => isMain)
    .map(({ _id, name }) => (
      <div key={_id}>
        <ListItem button component={Link} to={`/${getCategoryURL(name)}`}>
          <ListItemText
            primary={name[language].value}
            className={styles.link}
          />
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <div>
      <Drawer anchor='left' open={menu} onClose={() => setMenuOpen(false)}>
        <List className={styles.list} onClick={() => setMenuOpen(false)}>
          {menuList}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
