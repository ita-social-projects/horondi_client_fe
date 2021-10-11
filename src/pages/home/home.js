import React, { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './models-list';
import { Loader } from '../../components/loader/loader';

const Home = () => {
  const { categoriesLoading } = useSelector(({ Categories }) => ({
    categoriesLoading: Categories.loading
  }));

  const styles = useStyles();

  const homeRef = useRef(null);
  const homeElement = useMemo(() => homeRef, [homeRef.current]);

  if (categoriesLoading) {
    return <Loader />;
  }

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
