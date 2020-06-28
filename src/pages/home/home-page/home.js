import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';
import Categories from '../categories';
import OurLooks from '../our-looks';
import { useStyles } from './home.styles';
import { HOME_BUTTONS } from '../../../configs/localization';

const Home = () => {
  const classes = useStyles();
  const { language } = useSelector(({ language: { language } }) => ({
    language
  }));

  return (
    <div className={classes.home}>
      <div className={classes.homeHeader}>
        <Link to='/news'>
          <Button className={classes.headerButton} variant='contained'>
            {HOME_BUTTONS[language].NEWS}
          </Button>
        </Link>
        <Link to='/about-us'>
          <Button className={classes.headerButton} variant='contained'>
            {HOME_BUTTONS[language].ABOUT_US}
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
