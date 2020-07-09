import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import Categories from './categories';
import OurLooks from './our-looks';
import { HOME_BUTTONS } from '../../configs';
import { useStyles } from './home.styles';

const Home = () => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

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

export default Home;
