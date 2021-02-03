import React, { useEffect, useRef, useMemo } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import mergeImages from 'merge-images';
import { useStyles } from './constructor.style';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import { setModelLoading } from '../../redux/constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';

const map = require('lodash/map');

const { MODEL, BASIC, PATTERN, BOTTOM } = CONSTRUCTOR_TITLES[0];

const Constructor = () => {
  const styles = useStyles();
  const { values, images, methods } = useConstructor();
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
    images.bottomImage
  ]);

  const availableModels = useMemo(() => map(values.models, (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  )), [values.models]);

  const availableBasics = useMemo(() => map(values.basics, (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  )), [values.basics]);

  const availablePatterns = useMemo(() => map(values.patterns, (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  )), [values.patterns]);
  const availableBottoms = useMemo(() => map(values.bottoms, (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  )), [values.bottoms]);

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

export default Constructor;
