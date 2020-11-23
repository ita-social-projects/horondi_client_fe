import React, { useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './modles-list';
import { Loader } from '../../components/loader/loader';
import { getHomePageSliderImages } from '../../redux/homepage-slider/homepage-slider.actions';

const Home = () => {
  const { sliderLoading, ourLooksLoading, categoriesLoading } = useSelector(
    ({ HomePageSlider, HomePageImages, Categories }) => ({
      sliderLoading: HomePageSlider.loading,
      ourLooksLoading: HomePageImages.loading,
      categoriesLoading: Categories.loading
    })
  );

  const dispatch = useDispatch();
  const styles = useStyles();

  const homeRef = useRef(null);
  const homeElement = useMemo(() => homeRef, [homeRef.current]);

  useEffect(() => {
    dispatch(getHomePageSliderImages());
  }, [dispatch]);

  if (sliderLoading || ourLooksLoading || categoriesLoading) {
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
