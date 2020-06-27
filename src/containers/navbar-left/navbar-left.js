import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';

import { LOGO, LANGUAGE, URL_LANGUAGE } from '../../configs';
import { getCategories } from '../../redux/categories/categories.actions';

const NavbarLeft = () => {
  const { categories } = useSelector(({ Categories }) => ({
    categories: Categories.categories
  }));

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoryURL = (category) => {
    const [filteredCategory] = category.filter(
      (item) => item.lang === URL_LANGUAGE
    );
    return filteredCategory.value.toLowerCase();
  };

  const categoriesItems = categories.map((category) => {
    const { _id, name } = category;

    return (
      <Link key={_id} className={classes.link} to={`/${categoryURL(name)}`}>
        {name[LANGUAGE].value}
      </Link>
    );
  });

  return (
    <Toolbar>
      <Typography variant='h6'>
        <Link to='/' className={classes.logo}>
          {LOGO}
        </Link>
      </Typography>
      {categoriesItems}
    </Toolbar>
  );
};

export default NavbarLeft;
