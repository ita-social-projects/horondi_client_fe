import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import SideBarItem from './sidebar-item';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './sidebar.styles';

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
          {/*onClick={() => setMenuOpen(false)} */}
          {menuList}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
