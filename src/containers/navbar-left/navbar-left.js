import React from 'react';
import { useSelector } from 'react-redux';

import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';

import { LOGO, LANGUAGE, URL_LANGUAGE } from '../../configs';

const NavbarLeft = () => {
  const styles = useStyles();
  const { categories } = useSelector(({ Categories: { list } }) => ({
    categories: list
  }));

  const getCategoryURL = (category) => {
    const [filteredCategory] = category.filter(
      (item) => item.lang === URL_LANGUAGE
    );

    if (filteredCategory.value) {
      return filteredCategory.value.toLowerCase();
    }
  };

  const categoriesItems = categories.map(({ _id, name }) => (
    <Link key={_id} className={styles.link} to={`/${getCategoryURL(name)}`}>
      {name[LANGUAGE].value}
    </Link>
  ));

  return (
    <Toolbar>
      <Typography variant='h6'>
        <Link to='/' className={styles.logo}>
          {LOGO}
        </Link>
      </Typography>
      {categoriesItems}
    </Toolbar>
  );
};

export default NavbarLeft;
