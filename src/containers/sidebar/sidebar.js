import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import SideBarItem from './sidebar-item';
import { useStyles } from './sidebar.styles';
import { CONSTRUCTOR } from '../../translations/sidebar.translations';
import { sideBarSubList } from '../../configs';
import FooterLinks from '../footer-links';
import SidemenuRightBar from '../sidemenu-right-bar';
import routes from '../../const/routes';
import { getCategoriesForBurgerMenu } from './operations/burger-menu.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const { pathToConstructor } = routes;

const Sidebar = ({ setIsMenuOpen, isMenuOpen, fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const [sticky, setSticky] = useState(false);
  const [categories, setCategories] = useState([]);

  const sidebar = clsx({
    [styles.drawer]: true,
    [styles.sticky]: sticky
  });

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const { loading, error } = useQuery(getCategoriesForBurgerMenu, {
    onCompleted: (data) => setCategories(data.getCategoriesForBurgerMenu)
  });

  const categoriesList = useMemo(
    () =>
      categories?.map(({ category, models }) => (
        <SideBarItem
          category={category._id}
          name={category.name}
          mainItemStyles={styles.mainItem}
          language={language}
          key={category._id}
          models={models}
          handlerItem={() => setIsMenuOpen(false)}
        />
      )),
    [categories, styles]
  );

  const subList = useMemo(
    () => (
      <div className={styles.subList}>
        {sideBarSubList.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className={styles.subItem}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>{item.name[language]}</span>
          </Link>
        ))}
      </div>
    ),
    [sideBarSubList, styles]
  );

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <Drawer
      className={sidebar}
      anchor='left'
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    >
      <List>{categoriesList}</List>
      <Link to={pathToConstructor} className={styles.mainItem} onClick={() => setIsMenuOpen(false)}>
        <span className={styles.constructorItem}>{CONSTRUCTOR[language].value}</span>
      </Link>
      {subList}
      <FooterLinks
        socialIconsStyles={styles.socialIconsStyles}
        position='center'
        setIsMenuOpen={setIsMenuOpen}
      />
      <SidemenuRightBar fromSideBar setIsMenuOpen={setIsMenuOpen} />
    </Drawer>
  );
};

export default Sidebar;
