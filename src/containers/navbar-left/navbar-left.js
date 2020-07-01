import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';

import { LOGO, URL_LANGUAGE } from '../../configs';
import { getCategories } from '../../redux/categories/categories.actions';

const NavbarLeft = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { categories, language } = useSelector(
    ({ Categories: { list }, Language: { language } }) => ({
      categories: list,
      language
    })
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
      {name[language].value}
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
