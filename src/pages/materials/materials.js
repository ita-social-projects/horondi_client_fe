import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './materials.style.js';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import SliderHomePage from '../home/slider-home-page';

const AboutUs = () => {
  const dispatch = useDispatch();
  const { materialsPage, aboutUsPage, language } = useSelector(
    ({ BusinessPages, Language }) => ({
      materialsPage: BusinessPages.pages.materials,
      aboutUsPage: BusinessPages.pages.aboutUs,
      language: Language.language
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('materials'));
  }, [dispatch]);

  const materialPageText =
    materialsPage.text && parse(materialsPage.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.home} data-cy='home-page'>
        <div className={styles.homeHeader}>
          <SliderHomePage />
        </div>
      </div>
      {materialsPage.title && <h1>{materialsPage.title[language].value}</h1>}
      {materialPageText}
    </div>
  );
};

export default AboutUs;
