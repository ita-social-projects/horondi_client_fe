import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './app-header.style';

const LOGO = 'HORONDI';

export default function AppHeader() {
  const classes = useStyles();
  const list = ['BACKPACKS', 'BAGS', 'ACCESSORIES'];
  const categories = list.map((category) => (
    <Link
      key={category}
      className={classes.link}
      to={`/${category.toLowerCase()}`}
    >
      {category}
    </Link>
  ));

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
