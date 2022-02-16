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
import { useAppStyles } from '../../components/app/app.styles';

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
  const appStyles = useAppStyles();
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

  const onModalAction = () => {
    setModalVisibility(false);
  };

  useLayoutEffect(() => {
    const createImagesArray = (values) => {
      const result = [];
      Object.keys(values).forEach((key) => {
        if (key === 'pattern' && constructorValues.pattern !== undefined)
          result.unshift(values[key].constructorImg);
        else
          typeof values[key] === 'object' &&
            !Array.isArray(values[key]) &&
            values[key].images &&
            result.unshift(values[key].images.small);
      });
      return result;
    };

    if (constructorValues.basic) {
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
        if (key === 'pattern' && constructorValues.pattern !== undefined)
          acc.pattern = getPrice(currency, key);
        if (key === 'bottom') acc.bottom = getPrice(currency, key);
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

  const costPatternUAH = constructorValues.pattern
    ? constructorValues.pattern.additionalPrice[0].value
    : null;
  const costPatternUSD = constructorValues.pattern
    ? constructorValues.pattern.additionalPrice[1].value
    : null;

  const sizeAndPrice = {
    price: [
      {
        value:
          +CONSTRUCTOR_DEFAULT_PRICE[0] +
          costPatternUAH +
          constructorValues.bottom.additionalPrice[0].value,
        currency: 'UAH'
      },
      {
        value:
          +CONSTRUCTOR_DEFAULT_PRICE[1] +
          costPatternUSD +
          constructorValues.bottom.additionalPrice[1].value,
        currency: 'USD'
      }
    ],
    size: {
      available: constructorValues.size.available,
      name: constructorValues.size.name,
      _id: constructorValues.size._id
    }
  };

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.constructorWrapper}`}>
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
                name='basic'
                value={constructorValues.basic._id}
                onChange={(e) =>
                  setConstructorValues({
                    ...constructorValues,
                    basic: currentConstructorModel.current.basics.find(
                      (basic) => basic._id === e.target.value
                    )
                  })
                }
              >
                {currentConstructorModel.current.basics.map((basic) => (
                  <MenuItem className={styles.menuItem} key={basic._id} value={basic._id}>
                    {t(`${basic.translationsKey}.name`)}
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
                value={constructorValues.pattern?._id || ''}
                onChange={(e) => {
                  setConstructorValues({
                    ...constructorValues,
                    pattern: currentConstructorModel.current.patterns.find(
                      (pattern) => pattern._id === e.target.value
                    )
                  });
                  setAllPrice((prevState) => ({
                    ...prevState,
                    pattern: constructorValues.pattern.additionalPrice[currency].value
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
                value={constructorValues.bottom._id}
                onChange={(e) => {
                  setConstructorValues({
                    ...constructorValues,
                    bottom: currentConstructorModel.current.bottoms.find(
                      (bottom) => bottom._id === e.target.value
                    )
                  });
                  setAllPrice((prevState) => ({
                    ...prevState,
                    bottom: constructorValues.bottom.additionalPrice[currency].value
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
                value={constructorValues.size._id}
                onChange={(e) =>
                  setConstructorValues({
                    ...constructorValues,
                    size: currentConstructorModel.current.model.sizes.find(
                      (size) => size._id === e.target.value
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
            {!constructorValues.basic && <Loader />}
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
    </div>
  );
};

export default ImagesConstructor;
