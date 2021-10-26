import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'react-awesome-slider/dist/styles.css';
import { useIsLoading } from '../../hooks/useIsLoading';

import { useStyles } from './materials.style.js';
import { getBusinessTextByCode } from '../business-page/operations/business-page.queries';
import { getAllPatterns } from './operations/getAllPatterns.queries';
import { carouselMaterialInterval, IMG_URL } from '../../configs';
import { getPatterns } from '../../redux/pattern/pattern.actions';
import { getImage } from '../../utils/imageLoad';
import Slider from './slider';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const AutoplaySlider = withAutoplay(Slider);

const Materials = () => {
  const [setImage] = useState([]);
  const [materialsPage, setMaterialsPage] = useState({});
  const [bullet, setBullet] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const dispatch = useDispatch();
  const code = 'materials';
  const skip = 0;
  const limit = 20;

  const styles = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPatterns());
  }, [dispatch]);

  useMemo(() => {
    patterns.images &&
      patterns.images.forEach((item) => {
        getImage(patterns.images.medium)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
    setBullet(patterns.map((e) => `${IMG_URL}${e.images.small}`));
  }, [patterns]);

  // const { loading: loadingPatterns} = useQuery(getAllPatterns, {
  //   variables: { skip, limit },
  //   onCompleted: (data) => setPatterns(data.getAllPatterns.items),
  //   onError: (err) => errorOrLoadingHandler(err)
  // });

  // const { loading: loadingMaterials} = useQuery(getBusinessTextByCode, {
  //   variables: { code },
  //   onCompleted: (data) => setMaterialsPage(data.getBusinessTextByCode),
  //   onError: (err) => errorOrLoadingHandler(err)
  // });

  // const bulletSet = useMemo(() => patterns.map((e) => `${IMG_URL}${e.images.small}`), [patterns]);

  // const {isLoading} = useIsLoading([loadingPatterns, loadingMaterials]);
  // if (isLoading) return errorOrLoadingHandler(isLoading);

  const { loading, error } = useQuery(getAllPatterns, {
    variables: { skip, limit },
    onCompleted: (data) => setPatterns(data.getAllPatterns.items)
  });

  const { loading: newLoading, error: newError } = useQuery(getBusinessTextByCode, {
    variables: { code },
    onCompleted: (data) => setMaterialsPage(data.getBusinessTextByCode)
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);
  if (loading || error) return errorOrLoadingHandler(newLoading, newError);

  const materialPageText = materialsPage.text && parse(materialsPage.text[language].value);

  const imagesForSlider = patterns.map((pattern) => (
    <div
      className={styles.sliderImage}
      key={pattern._id}
      data-src={`${IMG_URL}${pattern.images.medium}`}
    >
      <p className={styles.sliderText}>{`"${pattern.name[language].value}"`}</p>
    </div>
  ));

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
          bulletsSet={bullet}
        >
          {imagesForSlider}
        </AutoplaySlider>
        {materialPageText}
      </div>
    </div>
  );
};

export default Materials;
