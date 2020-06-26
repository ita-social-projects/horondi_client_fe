import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './app-header.style';
import { LOGO, LANGUAGE } from '../../configs';

export default function AppHeader() {
  const classes = useStyles();
  const list = [
    {
      _id: '5ef25be18456ef0604ebb81a',
      name: [
        {
          lang: 'uk',
          value: 'Рюкзаки'
        },
        {
          lang: 'en',
          value: 'Backpacks'
        }
      ]
    },
    {
      _id: '5ef25be18456ef0604ebb81b',
      name: [
        {
          lang: 'uk',
          value: 'Сумки'
        },
        {
          lang: 'en',
          value: 'Bags'
        }
      ]
    },
    {
      _id: '5ef25be18456ef0604ebb81c',
      name: [
        {
          lang: 'uk',
          value: 'Аксесуари'
        },
        {
          lang: 'en',
          value: 'Accessories'
        }
      ]
    }
  ];

  const categoryURL = (category) => {
    const [filteredCategory] = category.filter((item) => item.lang === 'en');
    return filteredCategory.value.toLowerCase();
  };

  const categories = list.map((category) => {
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
          {categories}
          <div className={classes.icons}>
            <Button color='inherit'>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
