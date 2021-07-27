import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import _ from 'lodash';
import { mergeImages } from 'horondi_merge_images';

import { useStyles } from './images-constructor.style';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import { setModelLoading } from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';
import { IMG_URL } from '../../configs';
import {
  currentCurrencyValue,
  constructorImageInput,
  constructorEndPrice,
  constructorPartPrice,
  constructorPartNames
} from '../../utils/constructor';

const ImagesConstructor = () => {
  const styles = useStyles();
  const { values, images, prices, methods, language, currency } = useConstructor();
  const canvas = useRef({});
  const canvasH = 768;
  const canvasW = 768;
  const { MODEL, BASIC, PATTERN, BOTTOM, DEFAULT_PRICE, TOTAL_PRICE, END_PRICE } =
    CONSTRUCTOR_TITLES[language];

  const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const loadedImages = sources.map(
        (source) =>
          new Promise((resolveImage, rejectImage) => {
            const img = new Image();
            img.onload = () => resolveImage(img);
            // img.onerror = () => {
            //   rejectImage(new Error());
            // };
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(loadedImages).then((loadedImage) => loadedImage));
    });

  useLayoutEffect(() => {
    if (images.basicImage && images.patternImage && images.frontPocketImage && images.bottomImage) {
      loadImages([
        images.frontPocketImage,
        images.basicImage,
        images.bottomImage,
        images.patternImage
      ]).then((loadedImages) => {
        mergeImages(loadedImages, canvas.current, canvasW, canvasH);
        methods.dispatch(setModelLoading(false));
      });
    }
  }, [images.basicImage, images.patternImage, images.frontPocketImage, images.bottomImage]);

  const options = (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[language].value}
    </option>
  );

  const availableModels = useMemo(() => _.map(values.models, options, [values.models, language]));

  const availableBasics = useMemo(() => _.map(values.basics, options, [values.basics, language]));

  const availablePatterns = useMemo(() =>
    _.map(values.patterns, options, [values.patterns, language])
  );

  const availableBottoms = useMemo(() =>
    _.map(values.bottoms, options, [values.bottoms, language])
  );

  const forForms = [
    {
      name: constructorImageInput.BASIC,
      onChange: (e) => methods.changeBasic(e.target.value),
      available: availableBasics,
      helperText: BASIC
    },
    {
      name: constructorImageInput.PATTERN,
      onChange: (e) => methods.changePattern(e.target.value),
      available: availablePatterns,
      helperText: PATTERN
    },
    {
      name: constructorImageInput.BOTTOM,
      onChange: (e) => methods.changeBottom(e.target.value),
      available: availableBottoms,
      helperText: BOTTOM
    }
  ];

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <FormControl>
          <NativeSelect
            className={styles.mainHeader}
            name={constructorImageInput.MODEL}
            onChange={(e) => methods.changeModel(e.target.value)}
          >
            {availableModels}
          </NativeSelect>
          <FormHelperText>{MODEL}</FormHelperText>
        </FormControl>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          {forForms.map((el) => (
            <FormControl key={el.name}>
              <NativeSelect name={el.name} onChange={el.onChange}>
                {el.available}
              </NativeSelect>
              <FormHelperText>{el.helperText}</FormHelperText>
            </FormControl>
          ))}
          {/* <FormControl>
            <NativeSelect
              name={constructorImageInput.BASIC}
              onChange={(e) => methods.changeBasic(e.target.value)}
            >
              {availableBasics}
            </NativeSelect>
            <FormHelperText>{BASIC}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.PATTERN}
              onChange={(e) => methods.changePattern(e.target.value)}
            >
              {availablePatterns}
            </NativeSelect>
            <FormHelperText>{PATTERN}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.BOTTOM}
              onChange={(e) => methods.changeBottom(e.target.value)}
            >
              {availableBottoms}
            </NativeSelect>
            <FormHelperText>{BOTTOM}</FormHelperText>
          </FormControl> */}
        </form>
        <div className={styles.imageContainer}>
          {values.modelLoading && <Loader />}
          <canvas
            style={{ display: values.modelLoading ? 'none' : 'block' }}
            className={styles.image}
            width={canvasW}
            height={canvasH}
            ref={canvas}
          />
        </div>
        <div className={styles.pricesInfoWrapper}>
          <h2 className={styles.headerWrapper}>{TOTAL_PRICE}</h2>
          <div className={styles.textWrapper}>
            <ul>
              <li className={styles.priceItem}>
                <span>{DEFAULT_PRICE}</span>
                <span>
                  {prices.DEFAULT_PRICE_VALUE}
                  {currentCurrencyValue(language, currency)}
                </span>
              </li>
              <div className={`${styles.line} ${styles.topLine}`} />

              {constructorPartPrice(prices.priceBasic, prices.priceGobelen, prices.priceBottom).map(
                (item, index) =>
                  item ? (
                    <li key={index} className={styles.priceItem}>
                      <span>{constructorPartNames(!language)[index]}</span>
                      <span>
                        +{item}
                        {currentCurrencyValue(language, currency)}
                      </span>
                    </li>
                  ) : (
                    <div />
                  )
              )}
              <div className={`${styles.line} ${styles.bottomLine}`} />
            </ul>
          </div>
          <h2 className={styles.headerWrapper}>
            {END_PRICE}
            <span>
              {constructorEndPrice(prices.priceTotal)}
              {currentCurrencyValue(language, currency)}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImagesConstructor;
