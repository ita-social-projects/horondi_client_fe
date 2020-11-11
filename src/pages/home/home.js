import React from 'react';

import SliderHomePage from '../slider-home-page';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';

const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.home} data-cy='home-page'>
      <div className={styles.homeHeader}>
        <SliderHomePage />
      </div>
      <CategoriesList />
      <OurLooks />
    </div>
  );
};

export default Home;
