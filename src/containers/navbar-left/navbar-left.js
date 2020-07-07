import React from 'react';
import { useSelector } from 'react-redux';

import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';

import { LOGO, LANGUAGE, URL_LANGUAGE } from '../../configs';

const NavbarLeft = () => {
  const { categories } = useSelector(({ Categories }) => ({
    categories: Categories.list
  }));
  const styles = useStyles();

  const getCategoryURL = (category) => {
    const [filteredCategory] = category.filter(
      (item) => item.lang === URL_LANGUAGE
    );

    if (filteredCategory.value) {
      return filteredCategory.value.toLowerCase();
    }
  };

  const CategoriesView = () => {
    if (categories) {
      return categories.map(({ _id, name }) => (
        <Link key={_id} className={styles.link} to={`/${getCategoryURL(name)}`}>
          {name[LANGUAGE].value}
        </Link>
      ));
    }
    return null;
  };

  return (
    <Toolbar>
      <Typography variant='h6'>
        <Link to='/' className={styles.logo}>
          {LOGO}
        </Link>
      </Typography>
      <CategoriesView />
    </Toolbar>
  );
};

export default NavbarLeft;
