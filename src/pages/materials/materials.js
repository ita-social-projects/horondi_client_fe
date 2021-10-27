import React, { useMemo, useState } from 'react';
import parse from 'html-react-parser';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'react-awesome-slider/dist/styles.css';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './materials.style.js';
import { getBusinessTextByCode } from '../business-page/operations/business-page.queries';
import { getAllPatterns } from './operations/getAllPatterns.queries';
import { carouselMaterialInterval, IMG_URL } from '../../configs';
import { getImage } from '../../utils/imageLoad';
import Slider from './slider';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const AutoplaySlider = withAutoplay(Slider);

const Materials = () => {
  const [setImage] = useState([]);
  const [materialsPage, setMaterialsPage] = useState({});
  const [patterns, setPatterns] = useState([]);
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const code = 'materials';

  useMemo(() => {
    patterns.images &&
      patterns.images.forEach((item) => {
        getImage(patterns.images.medium)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
  }, [patterns]);

  const { loading: loadingPatterns, error: errorPatterns } = useQuery(getAllPatterns, {
    onCompleted: (data) => setPatterns(data.getAllPatterns.items)
  });

  const { loading: loadingMaterials, error: errorMaterials } = useQuery(getBusinessTextByCode, {
    variables: { code },
    onCompleted: (data) => setMaterialsPage(data.getBusinessTextByCode)
  });

  const bulletSet = useMemo(() => patterns.map((e) => `${IMG_URL}${e.images.small}`), [patterns]);

  const materialPageText = materialsPage.text && parse(materialsPage.text[language].value);
  const styles = useStyles();
  const imagesForSlider = patterns.map((pattern) => (
    <div
      className={styles.sliderImage}
      key={pattern._id}
      data-src={`${IMG_URL}${pattern.images.medium}`}
    >
      <p className={styles.sliderText}>{`"${pattern.name[language].value}"`}</p>
    </div>
  ));

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingPatterns, loadingMaterials],
    [errorPatterns, errorMaterials]
  );
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={styles.root}>
      {materialsPage.title && <h1>{materialsPage.title[language].value}</h1>}
      <div className={styles.captionBlock}>
        <AutoplaySlider
          play
          interval={carouselMaterialInterval}
          cancelOnInteraction
          className={styles.slider}
          mobileTouch
          buttons
          bullets={false}
          infinite
          bulletsSet={bulletSet}
        >
          {imagesForSlider}
        </AutoplaySlider>
        {materialPageText}
      </div>
    </div>
  );
};

export default Materials;
