import React from 'react';
import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './modles-list';

const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.home} data-cy='home-page'>
      <div id='slider' className={styles.homeHeader}>
        <SliderHomePage />
      </div>
      <CategoriesList />
      <ConstructorPreview />
      <ModelsList />
      <OurLooks />
      <ScrollBar />
    </div>
  );
};

export default Home;
