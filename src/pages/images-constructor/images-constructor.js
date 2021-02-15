import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import { useStyles } from './images-constructor.style';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import { setModelLoading } from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';
import { IMG_URL } from '../../configs';

const map = require('lodash/map');

const { MODEL, BASIC, PATTERN, BOTTOM } = CONSTRUCTOR_TITLES[0];

const ImagesConstructor = () => {
  const styles = useStyles();
  const { values, images, methods } = useConstructor();
  const canvas = useRef({});
  const canvasH = 768;
  const canvasW = 768;

  const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const images = sources.map(
        (source) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error());
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(images).then((images) => images));
    });

  const mergeImages = (
    images,
    canvas,
    width = 1000,
    height = 1000,
    x = 0,
    y = 0
  ) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    images.forEach((img) => {
      ctx.drawImage(img, x, y, width, height);
    });
  };

  useLayoutEffect(() => {
    if (
      images.basicImage &&
      images.patternImage &&
      images.frontPocketImage &&
      images.bottomImage
    ) {
      loadImages([
        images.frontPocketImage,
        images.basicImage,
        images.bottomImage,
        images.patternImage
      ]).then((images) => {
        mergeImages(images, canvas.current, canvasW, canvasH);
        methods.dispatch(setModelLoading(false));
      });
    }
  }, [
    images.basicImage,
    images.patternImage,
    images.frontPocketImage,
    images.bottomImage
  ]);

  const availableModels = useMemo(
    () =>
      map(values.models, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[0].value}
        </option>
      )),
    [values.models]
  );

  const availableBasics = useMemo(
    () =>
      map(values.basics, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[0].value}
        </option>
      )),
    [values.basics]
  );

  const availablePatterns = useMemo(
    () =>
      map(values.patterns, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[0].value}
        </option>
      )),
    [values.patterns]
  );
  const availableBottoms = useMemo(
    () =>
      map(values.bottoms, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[0].value}
        </option>
      )),
    [values.bottoms]
  );

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <FormControl>
          <NativeSelect
            className={styles.mainHeader}
            name='model'
            onChange={(e) => methods.changeModel(e.target.value)}
          >
            {availableModels}
          </NativeSelect>
          <FormHelperText>{MODEL}</FormHelperText>
        </FormControl>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <FormControl>
            <NativeSelect
              name='basic'
              onChange={(e) => methods.changeBasic(e.target.value)}
            >
              {availableBasics}
            </NativeSelect>
            <FormHelperText>{BASIC}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name='pattern'
              onChange={(e) => methods.changePattern(e.target.value)}
            >
              {availablePatterns}
            </NativeSelect>
            <FormHelperText>{PATTERN}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name='bottoms'
              onChange={(e) => methods.changeBottom(e.target.value)}
            >
              {availableBottoms}
            </NativeSelect>
            <FormHelperText>{BOTTOM}</FormHelperText>
          </FormControl>
        </form>
        <div className={styles.imageContainer}>
          {values.modelLoading && <Loader />}
          <canvas
            className={styles.image}
            width={canvasW}
            height={canvasH}
            ref={canvas}
          />
        </div>
        <div className={styles.infoWrapper}>
          <h2>Загальна вартість:</h2>
          <ul>
            <li>Ціна товару без змін: 1400</li>
            <li>Матеріал: +100</li>
            <li>Ліва бокова кишеня: +100</li>
            <li>Права бокова кишеня: +100</li>
            <li>Гобелен: +100</li>
          </ul>
          <h2>Кінцева ціна: 1800</h2>
        </div>
      </div>
    </div>
  );
};

export default ImagesConstructor;
