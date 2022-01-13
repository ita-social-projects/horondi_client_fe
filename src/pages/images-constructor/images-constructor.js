import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, FormControl, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useConstructorLoader from './use-constructor-loader';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './images-constructor.style';
import Loader from '../../components/loader';

import { IMG_URL } from '../../configs';
import { CONSTRUCTOR_DEFAULT_PRICE } from './constants';
import {
  constructorEndPrice,
  constructorPartPrice,
  constructorPartNames
} from '../../utils/constructor';
import { getCurrentCurrency } from '../../utils/checkout';
import Modal from '../../components/modal';
import ConstructorSubmit from './constructor-sumbit';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const ImagesConstructor = () => {
  const {
    constructorValues,
    setConstructorValues,
    constructorModel,
    setConstructorModel,
    currentConstructorModel,
    allPrices,
    allModels,
    setAllPrice,
    constructorsError,
    constructorError,
    valuesLoading
  } = useConstructorLoader();

  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const defaultPrice = CONSTRUCTOR_DEFAULT_PRICE[currency];

  const [modalVisibility, setModalVisibility] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  const canvas = useRef({});
  const canvasH = 768;
  const canvasW = 768;

  const mergeImages = (imagesToMerge, currentCanvas, width = 1000, height = 1000, x = 0, y = 0) => {
    const ctx = currentCanvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    imagesToMerge.forEach((imageToMerge) => {
      ctx.drawImage(imageToMerge, x, y, width, height);
    });
  };

  const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const loadedImages = sources.map(
        (source) =>
          new Promise((resolveImage, rejectImage) => {
            const img = new Image();
            img.onload = () => resolveImage(img);
            img.onerror = () => {
              rejectImage(new Error());
            };
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(loadedImages).then((loadedImage) => loadedImage));
    });

  const showModal = () => {
    setModalVisibility(true);
  };

  const onModalAction = (action) => {
    setModalVisibility(false);
  };

  useLayoutEffect(() => {
    const createImagesArray = (values) => {
      const result = [];
      Object.keys(values).forEach((key) => {
        if (key === 'patterns' && constructorValues.patterns !== undefined)
          result.unshift(values[key].constructorImg);
        else
          typeof values[key] === 'object' &&
            !Array.isArray(values[key]) &&
            values[key].images &&
            result.unshift(values[key].images.small);
      });
      return result;
    };

    if (constructorValues.basics) {
      loadImages(createImagesArray(constructorValues)).then((loadedImages) => {
        mergeImages(loadedImages, canvas.current, canvasW, canvasH);
      });
    }

    const getPrice = (currencyInFanc, key) =>
      !currencyInFanc
        ? constructorValues[key].additionalPrice[0].value
        : constructorValues[key].additionalPrice[1].value;

    setAllPrice(
      Object.keys(constructorValues).reduce((acc, key) => {
        if (key === 'patterns' && constructorValues.patterns !== undefined)
          acc.pattern = getPrice(currency, key);
        if (key === 'bottoms') acc.bottom = getPrice(currency, key);
        return acc;
      }, {})
    );
  }, [constructorValues, currency, setAllPrice]);

  const { isError } = useIsLoadingOrError([], [constructorsError, constructorError]);
  if (valuesLoading) return errorOrLoadingHandler(isError, valuesLoading);

  function price() {
    if (allPrices.pattern) {
      return constructorEndPrice(+defaultPrice + allPrices.pattern + allPrices.bottom);
    }
    return constructorEndPrice(+defaultPrice + allPrices.bottom);
  }

  const costPatternUAH = constructorValues.patterns
    ? constructorValues.patterns.additionalPrice[0].value
    : null;
  const costPatternUSD = constructorValues.patterns
    ? constructorValues.patterns.additionalPrice[1].value
    : null;

  const sizeAndPrice = {
    price: [
      {
        value:
          +CONSTRUCTOR_DEFAULT_PRICE[0] +
          costPatternUAH +
          constructorValues.bottoms.additionalPrice[0].value,
        currency: 'UAH'
      },
      {
        value:
          +CONSTRUCTOR_DEFAULT_PRICE[1] +
          costPatternUSD +
          constructorValues.bottoms.additionalPrice[1].value,
        currency: 'USD'
      }
    ],
    size: {
      available: constructorValues.sizes.available,
      name: constructorValues.sizes.name,
      _id: constructorValues.sizes._id
    },
    bottomMaterial: constructorValues.bottoms
  };

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <h1>{t('common.title')}</h1>
      </div>
      <hr />
      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <FormControl>
            <p className={styles.headerWrapperH1}>{t('common.backpack')}</p>
            <Select
              className={styles.selectItem}
              label='title'
              data-cy='model'
              name='model'
              value={constructorModel}
              onChange={(e) => setConstructorModel(e.target.value)}
              data-testid='model'
            >
              {allModels.current.map((model) => (
                <MenuItem className={styles.menuItem} key={model._id} value={model._id}>
                  {t(`${model.translationsKey}.name`)}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.formHelper}>{t('common.models')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              className={styles.selectItem}
              label='title'
              data-cy='basics'
              name='basics'
              value={constructorValues.basics._id}
              onChange={(e) =>
                setConstructorValues({
                  ...constructorValues,
                  basics: currentConstructorModel.current.basics.find(
                    (basics) => basics._id === e.target.value
                  )
                })
              }
            >
              {currentConstructorModel.current.basics.map((basics) => (
                <MenuItem className={styles.menuItem} key={basics._id} value={basics._id}>
                  {t(`${basics.translationsKey}.name`)}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.formHelper}>{t('common.basis')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              className={styles.selectItem}
              label='title'
              name='patern'
              value={constructorValues.patterns?._id || ''}
              onChange={(e) => {
                setConstructorValues({
                  ...constructorValues,
                  patterns: currentConstructorModel.current.patterns.find(
                    (pattern) => pattern._id === e.target.value
                  )
                });
                setAllPrice((prevState) => ({
                  ...prevState,
                  pattern: constructorValues.patterns.additionalPrice[currency].value
                }));
              }}
            >
              {currentConstructorModel.current.patterns.map((pattern) => (
                <MenuItem className={styles.menuItem} key={pattern._id} value={pattern._id}>
                  {t(`${pattern.translationsKey}.name`)}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.formHelper}>{t('common.patterns')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              className={styles.selectItem}
              label='title'
              data-cy='bottom'
              name='bottom'
              value={constructorValues.bottoms._id}
              onChange={(e) => {
                setConstructorValues({
                  ...constructorValues,
                  bottoms: currentConstructorModel.current.bottoms.find(
                    (bottom) => bottom._id === e.target.value
                  )
                });
                setAllPrice((prevState) => ({
                  ...prevState,
                  bottom: constructorValues.bottoms.additionalPrice[currency].value
                }));
              }}
            >
              {currentConstructorModel.current.bottoms.map((bottom) => (
                <MenuItem className={styles.menuItem} key={bottom._id} value={bottom._id}>
                  {t(`${bottom.translationsKey}.name`)}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.formHelper}>{t('common.bottom')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              className={styles.selectItem}
              label='title'
              data-cy='size'
              name='size'
              value={constructorValues.sizes._id}
              onChange={(e) =>
                setConstructorValues({
                  ...constructorValues,
                  sizes: currentConstructorModel.current.model.sizes.find(
                    (sizes) => sizes._id === e.target.value
                  )
                })
              }
            >
              {currentConstructorModel.current.model.sizes.map((size) => (
                <MenuItem className={styles.menuItem} key={size.name} value={size._id}>
                  {size.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText className={styles.formHelper}>{t('common.size')}</FormHelperText>
          </FormControl>

          <Button className={styles.buttonOptions} onClick={showModal} data-testid='modalButton'>
            <span className={styles.pluse}>+</span> {t('buttons.moreOptions')}
          </Button>

          {modalVisibility && (
            <Modal
              className={styles.modal}
              setModalVisibility={setModalVisibility}
              onAction={onModalAction}
              isOpen={modalVisibility}
              language={language}
              isEmpty
              isFullscreen
              content={<h3>MODAL FOR CONSTRUCTOR</h3>}
            />
          )}
        </form>

        <div className={styles.imageContainer}>
          {!constructorValues.basics && <Loader />}
          <canvas className={styles.image} width={canvasW} height={canvasH} ref={canvas} />
        </div>

        <div className={styles.pricesInfoWrapper}>
          <p className={styles.headerWrapperH1}>{t('common.totalPrice')}</p>
          <div className={styles.textWrapper}>
            <ul>
              <div className={`${styles.line} ${styles.bottomLine}`} />
              <li className={styles.priceItem}>
                <span>{t('common.defaultPrice')}</span>
                <span>
                  {defaultPrice}
                  {getCurrentCurrency(currency)}
                </span>
              </li>
              <div className={`${styles.line} ${styles.topLine}`} />
              {constructorPartPrice(allPrices.pattern, allPrices.bottom).map((item, index) =>
                item ? (
                  <li key={index} className={styles.priceItem}>
                    <span>{constructorPartNames(!language)[index]}</span>
                    <span>
                      {item} {getCurrentCurrency(currency)}
                    </span>
                  </li>
                ) : (
                  <div key={index} />
                )
              )}
              <div className={`${styles.line} ${styles.bottomLine}`} />
            </ul>
          </div>
          <h2 className={styles.headerWrapper}>
            {t('common.endPrice')}
            <span>
              {price()}
              {getCurrentCurrency(currency)}
            </span>
          </h2>
          <ConstructorSubmit
            constructorValues={constructorValues}
            sizeAndPrice={sizeAndPrice}
            allSizes={currentConstructorModel.current.sizes}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesConstructor;
