import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { Button, FormControl, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { mergeImages } from 'horondi_merge_images';
import { useLazyQuery, useQuery } from '@apollo/client';
// import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getAllConstructors } from './operations/getAllConstructors.queries';
import { getConstructorByModel } from './operations/getConstructorByModel.queries';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
// import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './images-constructor.style';
import Loader from '../../components/loader';
import { IMG_URL } from '../../configs';
import {
  constructorEndPrice,
  constructorPartPrice,
  constructorPartNames
} from '../../utils/constructor';
import { getCurrentCurrency } from '../../utils/checkout';
import Modal from '../../components/modal';
import ConstructorSubmit from './constructor-sumbit';

const ImagesConstructor = () => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const { DEFAULT_PRICE_VALUE } = CONSTRUCTOR_TITLES[currency];

  const [modalVisibility, setModalVisibility] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();

  const canvas = useRef({});
  const canvasH = 768;
  const canvasW = 768;

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

  const [constructorValues, setConstructorValues] = useState({});
  const [constructorModel, setConstructorModel] = useState('');
  const currentConstructorModel = useRef({});
  const allModels = useRef([]);
  const [allPrices, setAllPrice] = useState({});

  const {
    loading: constructorsLoading,
    // error: constructorsError,
    data: constructors
  } = useQuery(getAllConstructors, {
    variables: {
      limit: 0,
      skip: 0
    }
  });
  const allConstructors = constructorsLoading ? [] : constructors.getAllConstructors;

  const [
    getConstructorByModelHandler,
    { loading: constructorByModelLoading, data: constructorByModel, refetch, called }
  ] = useLazyQuery(getConstructorByModel, {
    variables: {
      id: constructorModel
    }
  });
  const oneConstractor = constructorByModelLoading ? [] : constructorByModel?.getConstructorByModel;

  useEffect(() => {
    if (constructors?.getAllConstructors) {
      allModels.current = allConstructors.items.map((item) => item.model);
      setConstructorValues(
        Object.keys(allConstructors.items[0]).reduce((acc, key) => {
          if (key === 'model') {
            setConstructorModel(allConstructors.items[0][key]._id);
            acc.sizes = allConstructors.items[0][key].sizes[0];
          }
          if (key !== 'name' && key !== '_id' && key !== 'model')
            acc[key] = allConstructors.items[0][key][0];
          else acc[key] = allConstructors.items[0][key];
          return acc;
        }, {})
      );

      currentConstructorModel.current = allConstructors.items[0];
    }
  }, [constructors]);

  useEffect(() => {
    if (constructorByModel?.getConstructorByModel) {
      setConstructorValues(
        Object.keys(oneConstractor[0]).reduce((acc, key) => {
          if (key === 'model') acc.sizes = oneConstractor[0][key].sizes[0];

          if (key !== 'name' && key !== '_id' && key !== 'model')
            acc[key] = oneConstractor[0][key][0];
          else acc[key] = oneConstractor[0][key];
          return acc;
        }, {})
      );
      currentConstructorModel.current = oneConstractor[0];
    }
    setAllPrice(
      Object.keys(constructorValues).reduce((acc, key) => {
        if (key === 'patterns') acc.pattern = constructorValues[key].additionalPrice[0].value;
        if (key === 'bottoms') acc.bottom = constructorValues[key].additionalPrice[0].value;
        return acc;
      }, {})
    );
  }, [constructorByModel]);

  useEffect(() => {
    !called && constructorModel && getConstructorByModelHandler();
    called && refetch();
  }, [constructorModel]);

  useLayoutEffect(() => {
    if (constructorValues.bottoms && constructorValues.basics && constructorValues.patterns) {
      loadImages([
        constructorValues.basics.images.small,
        constructorValues.bottoms.images.small,
        constructorValues.patterns.constructorImg
      ]).then((loadedImages) => {
        mergeImages(loadedImages, canvas.current, canvasW, canvasH);
      });
    }
  }, [constructorValues]);

  return constructorValues.patterns && currentConstructorModel ? (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <h1>{t('common.title')}</h1>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <FormControl>
            <Select
              label='title'
              data-cy='model'
              name='model'
              value={constructorModel}
              onChange={(e) => setConstructorModel(e.target.value)}
            >
              {allModels.current.map((model) => (
                <MenuItem key={model._id} value={model._id}>
                  {t(`${model.translationsKey}.name`)}
                  {/* {model.name[0].value} */}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{t('common.model')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
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
                <MenuItem key={basics._id} value={basics._id}>
                  {basics.name[0].value}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{t('common.basis')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              label='title'
              data-cy='patern'
              name='patern'
              value={constructorValues.patterns._id}
              onChange={(e) =>
                setConstructorValues({
                  ...constructorValues,
                  patterns: currentConstructorModel.current.patterns.find(
                    (pattern) => pattern._id === e.target.value
                  )
                })
              }
            >
              {currentConstructorModel.current.patterns.map((pattern) => (
                <MenuItem key={pattern._id} value={pattern._id}>
                  {/* {pattern.name[0].value} */}
                  {t(`${pattern.translationsKey}.name`)}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{t('common.pattern')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              label='title'
              data-cy='bottom'
              name='bottom'
              value={constructorValues.bottoms._id}
              onChange={(e) =>
                setConstructorValues({
                  ...constructorValues,
                  bottoms: currentConstructorModel.current.bottoms.find(
                    (bottom) => bottom._id === e.target.value
                  )
                })
              }
            >
              {currentConstructorModel.current.bottoms.map((bottom) => (
                <MenuItem key={bottom._id} value={bottom._id}>
                  {bottom.name[0].value}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{t('common.bottom')}</FormHelperText>
          </FormControl>

          <FormControl>
            <Select
              label='title'
              data-cy='size'
              name='size'
              value={constructorValues.sizes._id || ''}
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
                <MenuItem key={size._id} value={size._id}>
                  {size.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{t('common.bottom')}</FormHelperText>
          </FormControl>

          <Button className={styles.button} onClick={showModal}>
            {t('buttons.moreOptions')}
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
          {!constructorValues.patterns && <Loader />}
          <canvas
            style={{
              display: !constructorValues.patterns ? 'none' : 'block'
            }}
            className={styles.image}
            width={canvasW}
            height={canvasH}
            ref={canvas}
          />
        </div>

        <div className={styles.pricesInfoWrapper}>
          <h2 className={styles.headerWrapper}>{t('common.totalPrice')}</h2>
          <div className={styles.textWrapper}>
            <ul>
              <li className={styles.priceItem}>
                <span>{t('common.defaultPrice')}</span>
                <span>
                  {DEFAULT_PRICE_VALUE}
                  {getCurrentCurrency(currency)}
                </span>
              </li>
              <div className={`${styles.line} ${styles.topLine}`} />
              {constructorPartPrice(allPrices.pattern, allPrices.bottom).map((item, index) =>
                item ? (
                  <li key={index} className={styles.priceItem}>
                    <span>{constructorPartNames(!language)[index]}</span>
                    <span>
                      {item}
                      {getCurrentCurrency(currency)}
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
              {constructorEndPrice(+DEFAULT_PRICE_VALUE + allPrices.pattern + allPrices.bottom)}
              {getCurrentCurrency(currency)}
            </span>
          </h2>
          <ConstructorSubmit />
        </div>
      </div>
    </div>
  ) : (
    0
  );
  // return (
  //   <div className={styles.constructorWrapper}>
  //     <div className={styles.headingWrapper}>
  //       <FormControl>
  //         <NativeSelect
  //           className={styles.mainHeader}
  //           name={constructorImageInput.MODEL}
  //           onChange={(e) => setCurrentConstructorId(e.target.value)}
  //         >
  //           {availableModels2}
  //         </NativeSelect>
  //         <FormHelperText>{t('common.model')}</FormHelperText>
  //       </FormControl>
  //     </div>

  //     <div className={styles.contentWrapper}>
  //       <form className={styles.formWrapper}>
  //         <FormControl>
  //           <NativeSelect
  //             name={constructorImageInput.BASIC}
  //             onChange={(e) => setBasicsId(e.target.value)}
  //           >
  //             {availableBasics}
  //           </NativeSelect>
  //           <FormHelperText>{t('common.basis')}</FormHelperText>
  //         </FormControl>
  //         <FormControl>
  //           <NativeSelect
  //             name={constructorImageInput.PATTERN}
  //             onChange={(e) => setPatternId(e.target.value)}
  //           >
  //             {availablePatterns}
  //           </NativeSelect>
  //           <FormHelperText>{t('common.pattern')}</FormHelperText>
  //         </FormControl>
  //         <FormControl>
  //           <NativeSelect
  //             name={constructorImageInput.BOTTOM}
  //             onChange={(e) => setBottomId(e.target.value)}
  //           >
  //             {availableBottoms}
  //           </NativeSelect>
  //           <FormHelperText>{t('common.bottom')}</FormHelperText>
  //         </FormControl>
  //         <FormControl>
  //           <NativeSelect
  //             name={constructorImageInput.SIZE}
  //             onChange={(e) => methods.changeSize(e.target.value)}
  //           >
  //             {availableSizes}
  //           </NativeSelect>
  //           <FormHelperText>{t('common.size')}</FormHelperText>
  //         </FormControl>

  //         <Button className={styles.button} onClick={showModal}>
  //           {t('buttons.moreOptions')}
  //         </Button>
  //       </form>
  //       <div className={styles.pricesInfoWrapper}>
  //         <h2 className={styles.headerWrapper}>{t('common.totalPrice')}</h2>
  //         <div className={styles.textWrapper}>
  //           <ul>
  //             <li className={styles.priceItem}>
  //               <span>{t('common.defaultPrice')}</span>
  //               <span>
  //                 {prices.DEFAULT_PRICE_VALUE}
  //                 {getCurrentCurrency(currency)}
  //               </span>
  //             </li>
  //             <div className={`${styles.line} ${styles.topLine}`} />

  //             {constructorPartPrice(
  //               prices.priceBasic,
  //               prices.priceGobelen,
  //               prices.priceBottom,
  //               prices.priceSize
  //             ).map((item, index) =>
  //               item ? (
  //                 <li key={index} className={styles.priceItem}>
  //                   <span>{constructorPartNames(!language)[index]}</span>
  //                   <span>
  //                     +{item}
  //                     {getCurrentCurrency(currency)}
  //                   </span>
  //                 </li>
  //               ) : (
  //                 <div key={index} />
  //               )
  //             )}
  //             <div className={`${styles.line} ${styles.bottomLine}`} />
  //           </ul>
  //         </div>
  //         <h2 className={styles.headerWrapper}>
  //           {t('common.endPrice')}
  //           <span>
  //             {constructorEndPrice(prices.priceTotal)}
  //             {getCurrentCurrency(currency)}
  //           </span>
  //         </h2>
  //         <ConstructorSubmit />
  //       </div>
  //     </div>
  //     {modalVisibility && (
  //       <Modal
  //         className={styles.modal}
  //         setModalVisibility={setModalVisibility}
  //         onAction={onModalAction}
  //         isOpen={modalVisibility}
  //         language={language}
  //         isEmpty
  //         isFullscreen
  //         content={<h3>MODAL FOR CONSTRUCTOR</h3>}
  //       />
  //     )}
  //   </div>
  // );
};

export default ImagesConstructor;
