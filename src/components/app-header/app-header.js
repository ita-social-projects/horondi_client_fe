import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './app-header.style';

import { LOGO, LANGUAGE, URL_LANGUAGE } from '../../configs';
import { getCategories } from '../../redux/categories/categories.actions';

const AppHeader = () => {
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
    <div className={classes.root}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <Typography variant='h6'>
            <Link to='/' className={classes.logo}>
              {LOGO}
            </Link>
          </Typography>
          {categoriesItems}
          <div className={classes.icons}>
            <Button color='inherit'>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
