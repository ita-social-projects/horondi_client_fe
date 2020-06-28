import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Categories from '../categories';
import OurLooks from '../our-looks';
import { LANGUAGE } from '../../../configs';
import { useStyles } from './home.styles';

const HOME_BUTTONS = {
  0: {
    NEWS: 'НОВИНИ',
    ABOUT_US: 'ПРО НАС'
  },
  1: {
    NEWS: 'NEWS',
    ABOUT_US: 'ABOUT US'
  }
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.homeHeader}>
        <Link to='/news'>
          <Button className={classes.headerButton} variant='contained'>
            {HOME_BUTTONS[LANGUAGE].NEWS}
          </Button>
        </Link>
        <Link to='/about-us'>
          <Button className={classes.headerButton} variant='contained'>
            {HOME_BUTTONS[LANGUAGE].ABOUT_US}
          </Button>
        </Link>
      </div>
      <Categories />
      <OurLooks />
    </div>
  );
};
//
export default Home;
