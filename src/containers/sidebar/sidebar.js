import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import SideBarItem from './sidebar-item';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './sidebar.styles';

import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { grey } from '@material-ui/core/colors';

const Sidebar = ({ setMenuOpen, menu }) => {
  const styles = useStyles();
  const { categories, language } = useSelector(({ Categories, Language }) => ({
    categories: Categories.list,
    language: Language.language
  }));

  const menuList = categories
    .filter(({ isMain }) => isMain)
    .map(({ _id, name }) => (
      <SideBarItem name={name} language={language} key={_id} />
    ));

  return (
    <div>
      <Drawer anchor='left' open={menu} onClose={() => setMenuOpen(false)}>
        <List className={styles.list}>
          {' '}
          {/**onClick={() => setMenuOpen(false)} */}
          {menuList}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
