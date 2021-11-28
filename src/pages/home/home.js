import React, { useRef, useMemo } from 'react';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './models-list';

const Home = () => {
  const styles = useStyles();

  const homeRef = useRef(null);
  const homeElement = useMemo(() => homeRef, []);

  return (
    <div ref={homeRef} className={styles.home} data-cy='home-page'>
      <SliderHomePage />
      <CategoriesList />
      <ConstructorPreview />
      <ModelsList />
      <OurLooks />
      <ScrollBar homeRef={homeElement} />
    </div>
  );
};

export default Home;
