import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Categories from '../categories';
import OurLooks from '../our-looks';
import { LANGUAGE } from '../../../configs';
import { useStyles } from './home-page.styles';

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

const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.home}>
      <div className={styles.homeHeader}>
        <Link to='/news'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[LANGUAGE].NEWS}
          </Button>
        </Link>
        <Link to='/about-us'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[LANGUAGE].ABOUT_US}
          </Button>
        </Link>
      </div>
      <Categories />
      <OurLooks />
    </div>
  );
};

export default HomePage;
