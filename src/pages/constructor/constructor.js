import React, { useEffect, useRef, useMemo } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import mergeImages from 'merge-images';
import { useSelector } from 'react-redux';
import { useStyles } from './constructor.style';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import { setModelLoading } from '../../redux/constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';

const map = require('lodash/map');

const Constructor = () => {

  const styles = useStyles();
  const {language} = useSelector(
    ({ Language }) => ({
      language: Language.language
    })
  );
  const { MODEL, BASIC, PATTERN, BOTTOM, BASIC_PRICE,GOBELEN_PRICE,BOTTOM_PRICE,DEFAULT_PRICE,TOTAL_PRICE,END_PRICE,DEFAULT_PRICE_VALUE } = CONSTRUCTOR_TITLES[language];
  const { values, images, prices, methods } = useConstructor();

  const image = useRef(null);

  const createImage = (frontPocket, basic, bottom, pattern) => {

    mergeImages([frontPocket, basic, bottom, pattern], {
      height: 3000,
      weight: 460
    }).then((b64) => {
      methods.dispatch(setModelLoading(false));
      image.current.src = b64;
    });
  };

  useEffect(() => {
    if (
      images.basicImage &&
      images.patternImage &&
      images.frontPocketImage &&
      images.bottomImage
    ) {
      createImage(
        images.frontPocketImage,
        images.basicImage,
        images.bottomImage,
        images.patternImage
      );
    }
  }, [
    images.basicImage,
    images.patternImage,
    images.frontPocketImage,
    images.bottomImage,
  ]);

  const availableModels = useMemo(
    () =>
      map(values.models, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[language].value}
        </option>
      )),
    [values.models]
  );

  const availableBasics = useMemo(
    () =>
      map(values.basics, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[language].value}
        </option>
      )),
    [values.basics,language]
  );

  const availablePatterns = useMemo(
    () =>
      map(values.patterns, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[language].value}
        </option>
      )),
    [values.patterns,language]
  );
  const availableBottoms = useMemo(
    () =>
      map(values.bottoms, (obj) => (
        <option key={obj._id} value={obj._id}>
          {obj.name[language].value}
        </option>
      )),
    [values.bottoms,language]
  );

  const priceTotal = useMemo(
    () => {
      if(prices.basicPrice && prices.frontPocketPrice && prices.bottomPrice ){
        return prices.basicPrice[language].value+prices.frontPocketPrice[language].value+prices.bottomPrice[language].value
      }
    }
    ,
    [prices.bottomPrice,prices.frontPocketPrice,prices.bottomPrice,language]
  ); 
  const priceBasic = useMemo(
    () => {
      if(prices.basicPrice)
        return prices.basicPrice[language].value
    }
    ,
    [prices.basicPrice,language]
  );
  const priceGobelen = useMemo(
    () => {
      if(prices.frontPocketPrice)
        return prices.frontPocketPrice[language].value
    }
    ,
    [prices.frontPocketPrice,language]
  );
  const priceBottom = useMemo(
    () => {
      if(prices.bottomPrice)
        return prices.bottomPrice[language].value
    }
    ,
    [prices.bottomPrice,language]
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
          {values.modelLoading ? (
            <Loader />
          ) : (
            <img
              ref={image}
              className={styles.image}
              id='constructor'
              alt='Constructor'
            />
          )}
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
              <ul style={{ listStyleType: 'none' }} >
                <li>{DEFAULT_PRICE_VALUE}</li>
                <li>{!priceBasic ? (0) : (priceBasic) }</li>
                <li>{!priceGobelen ? (0) : (priceGobelen)}</li>
                <li>{!priceBottom ? (0) : (priceBottom)}</li>
              </ul>
            </div>
          </div>
          <h2 className={styles.headerWrapper}>{END_PRICE}{!priceTotal ? (DEFAULT_PRICE_VALUE) : (priceTotal) }</h2>
        </div>

      </div>
    </div>
  );
};

export default Constructor;
