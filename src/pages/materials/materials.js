import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './materials.style.js';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { carouselMaterialInterval, IMG_URL } from '../../configs';
import { getPatterns } from '../../../src/redux/pattern/pattern.actions';
import clsx from 'clsx';
import { getImage } from '../../utils/imageLoad';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Materials = () => {
  const [setImage] = useState([]);
  const dispatch = useDispatch();
  const { materialsPage, language, patterns } = useSelector(
    ({ BusinessPages, Language, Pattern, HomePageSlider }) => ({
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

  useMemo(() => {
    patterns.images &&
      patterns.images.forEach((item) => {
        getImage(patterns.images.medium)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
  }, [patterns]);

  const materialPageText =
    materialsPage.text && parse(materialsPage.text[language].value);
  const styles = useStyles();
  const imagesForSlider = patterns.map((pattern) => (
    <div
      className={styles.sliderImage}
      key={pattern._id}
      data-src={`${IMG_URL}${pattern.images.medium}`}
    >
      <p className={clsx(styles.hoverArrow, 'arrow')}>
        {pattern.name[language].value}
      </p>
    </div>
  ));
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
        {materialPageText}
      </div>
    </div>
  );
};

export default Materials;
