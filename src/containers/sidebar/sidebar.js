import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useQuery } from '@apollo/client';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SideBarItem from './sidebar-item';
import { useStyles } from './sidebar.styles';
import { sideBarSubList } from '../../configs';
import SocialLinks from '../social-links';
import SidemenuRightBar from '../sidemenu-right-bar';
import routes from '../../configs/routes';
import { getCategoriesForBurgerMenu } from './operations/burger-menu.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const { pathToConstructor } = routes;

const Sidebar = ({ setIsMenuOpen, isMenuOpen, fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const [sticky, setSticky] = useState(false);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation();
  const { palette } = useTheme();

  const sidebar = clsx({
    [styles.drawer]: true,
    [styles.sticky]: sticky
  });

  useLayoutEffect(() => {
    let componentMounted = true;
    window.addEventListener('scroll', () => {
      if (componentMounted) {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      }
    });
    return () => {
      componentMounted = false;
    };
  }, []);

  const { loading, error } = useQuery(getCategoriesForBurgerMenu, {
    onCompleted: (data) => setCategories(data.getCategoriesForBurgerMenu)
  });

  const categoriesList = useMemo(
    () =>
      categories?.map(({ category, models }) => (
        <SideBarItem
          category={category._id}
          translationsKey={category.translationsKey}
          mainItemStyles={styles.mainItem}
          key={category._id}
          models={models}
          handlerItem={() => setIsMenuOpen(false)}
        />
      )),
    [categories, styles, setIsMenuOpen]
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
            <span>
              {item.text ? t(`common.${item.text}`) : t(`common.${item.link.replace('/', '')}`)}
            </span>
          </Link>
        ))}
      </div>
    ),
    [styles, i18n.language, setIsMenuOpen]
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
        <span className={styles.constructorItem}>{t('sidebar.constructorCreate')}</span>
      </Link>
      {subList}
      <SocialLinks
        socialIconsStyles={styles.socialIconsStyles}
        position='center'
        color={palette.textColor}
        setIsMenuOpen={setIsMenuOpen}
      />
      <SidemenuRightBar fromSideBar setIsMenuOpen={setIsMenuOpen} />
    </Drawer>
  );
};

export default Sidebar;
