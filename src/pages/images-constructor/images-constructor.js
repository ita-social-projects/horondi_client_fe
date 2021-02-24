import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { useStyles } from './images-constructor.style';
import { selectLangAndCurrency } from '../../redux/selectors/multiple.selectors';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import { setModelLoading } from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';
import { IMG_URL } from '../../configs';
import {
  currentCurrencyValue,
  constructorPartPrice,
  constructorImageInput,
  constructorPrices
} from '../../utils/constructor';

const ImagesConstructor = () => {
  const styles = useStyles();
  const { values, images, prices, methods } = useConstructor();
  const canvas = useRef({});
  const canvasH = 768;
  const canvasW = 768;
  const { language, currency } = useSelector(selectLangAndCurrency);
  const {
    MODEL,
    BASIC,
    PATTERN,
    BOTTOM,
    BASIC_PRICE,
    GOBELEN_PRICE,
    BOTTOM_PRICE,
    DEFAULT_PRICE,
    TOTAL_PRICE,
    END_PRICE
  } = CONSTRUCTOR_TITLES[language];
  const { DEFAULT_PRICE_VALUE } = CONSTRUCTOR_TITLES[currency];

  const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const loadedImages = sources.map(
        (source) =>
          new Promise((resolveImage, rejectImage) => {
            const img = new Image();
            img.onload = () => resolveImage(img);
            img.onerror = () => rejectImage(new Error());
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(loadedImages).then((loadedImage) => loadedImage));
    });

  const mergeImages = (imagesToMerge, currentCanvas, width = 1000, height = 1000, x = 0, y = 0) => {
    const ctx = currentCanvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    imagesToMerge.forEach((imageToMerge) => {
      ctx.drawImage(imageToMerge, x, y, width, height);
    });
  };

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

  const priceTotal = useMemo(() => {
    constructorPrices(prices, currency);
  }, [prices.basicPrice, prices.frontPocketPrice, prices.bottomPrice, currency]);

  const priceBasic = useMemo(() => {
    if (prices.basicPrice) return prices.basicPrice[currency].value;
  }, [prices.basicPrice, currency]);
  const priceGobelen = useMemo(() => {
    if (prices.frontPocketPrice) return prices.frontPocketPrice[currency].value;
  }, [prices.frontPocketPrice, currency]);
  const priceBottom = useMemo(() => {
    if (prices.bottomPrice) return prices.bottomPrice[currency].value;
  }, [prices.bottomPrice, currency]);

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
          <FormControl>
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
          </FormControl>
        </form>
        <div className={styles.imageContainer}>
          {values.modelLoading && <Loader />}
          <canvas className={styles.image} width={canvasW} height={canvasH} ref={canvas} />
        </div>
        <div className={styles.pricesInfoWrapper}>
          <h2 className={styles.headerWrapper}>{TOTAL_PRICE}</h2>
          <div className={styles.infoWrapper}>
            <div className={styles.textWrapper}>
              <ul>
                <li>{DEFAULT_PRICE}</li>
                <li>{BASIC_PRICE}</li>
                <li>{GOBELEN_PRICE}</li>
                <li>{BOTTOM_PRICE}</li>
              </ul>
            </div>
            <div className={styles.priceWrapper}>
              <ul>
                <li>
                  {DEFAULT_PRICE_VALUE}
                  {currentCurrencyValue(language, currency)}
                </li>
                {constructorPartPrice(priceBasic, priceGobelen, priceBottom).map((item) =>
                  !item ? (
                    0
                  ) : (
                    <li>
                      {`${item} `}
                      {currentCurrencyValue(language, currency)}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <h2 className={styles.headerWrapper}>
            {END_PRICE}
            {!priceTotal ? DEFAULT_PRICE_VALUE : `${priceTotal} `}
            {currentCurrencyValue(language, currency)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImagesConstructor;
