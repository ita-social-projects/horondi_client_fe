import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './materials.style.js';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { carouselMaterialInterval, IMG_URL } from '../../configs';
import { getPatterns } from '../../../src/redux/pattern/pattern.actions';
import { Backdrop } from '@material-ui/core';
import CircularLoadingBar from '../../components/circular-loading-bar';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Materials = () => {
  const dispatch = useDispatch();
  const { materialsPage, language, patterns, loading } = useSelector(
    //бере зі стейту дані
    ({ BusinessPages, Language, Pattern, HomePageSlider }) => ({
      materialsPage: BusinessPages.pages.materials,
      language: Language.language,
      patterns: Pattern.list,
      loading: HomePageSlider.loading
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('materials'));
    dispatch(getPatterns());
  }, [dispatch]);

  const materialPageText =
    materialsPage.text && parse(materialsPage.text[language].value);
  const styles = useStyles();

  const imagesForSlider = patterns.map((pattern) => (
    <div
      className={'sliderImage'}
      style={{ width: '100%', height: '100%' }}
      key={pattern._id}
      data-src={`${IMG_URL}${pattern.images.medium}`}
    />
  ));
  // console.log(imagesForSlider)

  // {patterns.length && (
  //     <img src={`${IMG_URL}${patterns[2].images.medium}`} />
  // )}

  // console.log(`${IMG_URL}${patterns}`)
  //console.log(patterns);
  //   if (loading) {
  //       return (
  //           <Backdrop className={styles.backdrop} open={loading} invisible>
  //               <CircularLoadingBar color='inherit' />
  //           </Backdrop>
  //       );
  //   }
  return (
    <div className={styles.root}>
      {materialsPage.title && <h1>{materialsPage.title[language].value}</h1>}
      <div className={styles.captionBlock}>
        <AutoplaySlider
          play
          interval={carouselMaterialInterval}
          className={styles.slider}
          mobileTouch
          buttons={false}
          infinite
        >
          {imagesForSlider}
        </AutoplaySlider>
      </div>
      {materialPageText}

      {/*<AwesomeSlider>*/}
      {/*  */}
      {/*</AwesomeSlider>*/}
      {/*<SliderHomePage />*/}
      {/*<awesomeSlider />використати цей слайдер */}

      {/*{patterns.length && (*/}
      {/*  <img src={`${IMG_URL}${patterns[2].images.medium}`} />*/}
      {/*)}*/}
      {/*якшо масив більший за 0 тоді покажи його*/}
    </div>
  );
};

export default Materials;
