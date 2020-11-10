import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './materials.style.js';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import SliderHomePage from '../home/slider-home-page';
import { IMG_URL } from '../../configs';
import { getPatterns } from '../../../src/redux/pattern/pattern.actions';

import { push } from 'connected-react-router';

const AboutUs = () => {
  const dispatch = useDispatch();
  const { materialsPage, language, patterns } = useSelector(
    //бере зі стейту дані
    ({ BusinessPages, Language, Pattern }) => ({
      materialsPage: BusinessPages.pages.materials,
      language: Language.language,
      patterns: Pattern.list
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
  //console.log(`${IMG_URL}${patterns}`)
  console.log(patterns);
  return (
    <div className={styles.root}>
      <div className={styles.home} data-cy='home-page'>
        <div className={styles.homeHeader}>
          <SliderHomePage />
          {/*<awesomeSlider />використати цей слайдер */}
        </div>
      </div>
      {materialsPage.title && <h1>{materialsPage.title[language].value}</h1>}
      {materialPageText}
      {patterns.length && (
        <img src={`${IMG_URL}${patterns[2].images.medium}`} />
      )}
      {/*якшо масив більший за 0 тоді покажи його*/}
    </div>
  );
};

export default AboutUs;
