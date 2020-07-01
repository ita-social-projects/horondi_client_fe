import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';
import Categories from '../categories';
import OurLooks from '../our-looks';
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
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));

  return (
    <div className={styles.home}>
      <div className={styles.homeHeader}>
        <Link to='/news'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[language].NEWS}
          </Button>
        </Link>
        <Link to='/about-us'>
          <Button className={styles.headerButton} variant='contained'>
            {HOME_BUTTONS[language].ABOUT_US}
          </Button>
        </Link>
      </div>
      <Categories />
      <OurLooks />
    </div>
  );
};

export default HomePage;
