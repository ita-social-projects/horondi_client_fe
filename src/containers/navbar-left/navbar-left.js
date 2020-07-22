import React from 'react';
import { useSelector } from 'react-redux';

import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';
import { getCategoryURL } from '../../pages/home/categories/categories';

import { LOGO } from '../../configs';

const NavbarLeft = () => {
  const { categories, language } = useSelector(({ Categories, Language }) => ({
    categories: Categories.list,
    language: Language.language
  }));
  const styles = useStyles();

  const categoriesList = categories
    ? categories.map(({ _id, name, isMain }) =>
      isMain ? (
        <Link
          key={_id}
          className={styles.link}
          to={`/${getCategoryURL(name)}`}
        >
          {name[language].value}
        </Link>
      ) : null
    )
    : null;

  return (
    <Toolbar>
      <Typography variant='h6'>
        <Link to='/' className={styles.logo}>
          {LOGO}
        </Link>
      </Typography>
      {categoriesList}
    </Toolbar>
  );
};

export default NavbarLeft;
