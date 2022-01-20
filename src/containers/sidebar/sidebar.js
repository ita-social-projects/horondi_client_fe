import React, { useMemo, useState, useLayoutEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SideBarItem from './sidebar-item';
import { useStyles } from './sidebar.styles';
import { SIDEBAR_SUBLIST } from './constants';
import SocialLinks from '../social-links';
import SidemenuRightBar from '../sidemenu-right-bar';
import routes from '../../configs/routes';
import { getCategoriesForBurgerMenu } from './operations/burger-menu.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import ThemeContext from '../../context/theme-context';
import CertificateIcon from './CertificateIcon';

const { pathToConstructor, pathToGiftСertificate } = routes;

const Sidebar = ({ setIsMenuOpen, isMenuOpen, fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const [sticky, setSticky] = useState(false);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation();
  const [isLightTheme] = useContext(ThemeContext);

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
        {SIDEBAR_SUBLIST.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className={styles.subItem}
            onClick={() => setIsMenuOpen(false)}
            data-testid='linkToSublist'
          >
            <span>
              {item.text ? t(`common.${item.text}`) : t(`common.${item.link.replace('/', '')}`)}
            </span>
          </Link>
        ))}
      </div>
    ),
    [styles, setIsMenuOpen, t]
  );

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <Drawer
      className={sidebar}
      anchor='left'
      open={isMenuOpen}
      style={{ zIndex: 1302 }}
      onClose={() => setIsMenuOpen(false)}
      data-testid='linkToSidebar'
    >
      <div className={styles.closeIconContainer}>
        <IconButton className={styles.closeIcon} onClick={() => setIsMenuOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.sideMenuContent}>
        <List>{categoriesList}</List>

        <Link
          to={pathToGiftСertificate}
          className={styles.certificateItem}
          onClick={() => setIsMenuOpen(false)}
          data-testid='linkToCertificate'
        >
          <span className={styles.constructorItem}>{t('sidebar.createСertificate')}</span>
          <CertificateIcon data-testid='link' alt='tre' />
        </Link>
        <div className={styles.itemHighlighting} />

        <Link
          to={pathToConstructor}
          className={styles.mainItem}
          onClick={() => setIsMenuOpen(false)}
          data-testid='linkToConstructor'
        >
          <span className={styles.constructorItem}>{t('sidebar.constructorCreate')}</span>
        </Link>
        <div className={styles.itemHighlighting} />

        {subList}
        <SocialLinks
          showTitle
          fromSideBar
          socialIconsStyles={styles.socialIconsStyles}
          position='flex-start'
          color={isLightTheme ? '#3F51B5' : '#FFFFFF'}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <SidemenuRightBar fromSideBar setIsMenuOpen={setIsMenuOpen} />
    </Drawer>
  );
};

export default Sidebar;
