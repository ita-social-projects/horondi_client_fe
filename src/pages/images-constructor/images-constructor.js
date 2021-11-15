import React, { useRef, useMemo, useLayoutEffect, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import _ from 'lodash';
import { mergeImages } from 'horondi_merge_images';
import { useQuery } from '@apollo/client';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getAllConstructors } from './operations/getAllConstructors.queries';
import { getConstructorByModel } from './operations/getConstructorByModel.queries';
import { getConstructorById } from './operations/getConstructorById.queries';
import { getBasicById } from './operations/getBasicById.queries';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';

import { useStyles } from './images-constructor.style';
import { setModelLoading } from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import Loader from '../../components/loader';
import { useConstructor } from './hooks';
import { IMG_URL } from '../../configs';
import {
  constructorImageInput,
  constructorEndPrice,
  constructorPartPrice,
  constructorPartNames
} from '../../utils/constructor';
import { getCurrentCurrency } from '../../utils/checkout';
import Modal from '../../components/modal';
import ConstructorSubmit from './constructor-sumbit';

const ImagesConstructor = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();
  const { values, images, prices, methods, language, currency } = useConstructor();

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

  const options = (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[language].value}
    </option>
  );
  const sizeOptions = (obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name}
    </option>
  );

  const [isFirtlyFetched, toggleFirstlyFetched] = useState(false);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState('');

  const [constructorValues, setConstructorValues] = useState({});
  const [currentConstructorId, setCurrentConstructorId] = useState('6176d2bbb856e50024776ed1');
  const [currentConstructorImg, setCurrentConstructorImg] = useState({});
  const [basicsId, setBasicsId] = useState('619064dd66d4112f588a2d60');

  const {
    loading: constructorsLoading,
    error: constructorsError,
    data: constructors
  } = useQuery(getAllConstructors, {
    variables: { limit: 0, skip: 0 }
  });
  const constructorsAll = constructorsLoading ? [] : constructors.getAllConstructors.items;

  const {
    loading: basicsLoading,
    error: basicsError,
    data: basics
  } = useQuery(getBasicById, {
    variables: { id: basicsId }
  });

  const basicsCurrent = basicsLoading ? [] : basics.getBasicById.images;

  useEffect(() => {
    if (constructors) {
      setConstructorValues(constructorsAll[0]);
      setCurrentConstructorId(constructorsAll[0]._id);

      setCurrentConstructorImg({
        basics: basicsCurrent.large,
        bottoms: constructorsAll[0].bottoms,
        patterns: constructorsAll[0].patterns
      });

      // setConstructorValues(Object.keys(constructorsAll[0]).reduce((acc, key) => {
      //   if (key !== 'name' && key !== '_id' && key !== 'model')
      //     acc[key] = constructorsAll[0][key][0];
      //   else
      //     acc[key] = constructorsAll[0][key];
      //   return acc;
      // }, {}));
      // toggleFirstlyFetched(true);
    }
  }, [constructors, basicsId]);

  const {
    loading: constructorLoadingId,
    error: constructorErrorId,
    data: constructorData
  } = useQuery(getConstructorById, {
    variables: { id: currentConstructorId }
  });
  const constructorById = constructorLoadingId ? [] : constructorData.getConstructorById;

  useLayoutEffect(() => {
    if (
      currentConstructorImg.basics &&
      images.patternImage &&
      images.frontPocketImage &&
      images.bottomImage
    ) {
      loadImages([
        images.frontPocketImage,
        currentConstructorImg.basics,
        images.bottomImage,
        images.patternImage
      ]).then((loadedImages) => {
        mergeImages(loadedImages, canvas.current, canvasW, canvasH);
        methods.dispatch(setModelLoading(false));
      });
    }
  }, [
    currentConstructorImg.basics,
    images.patternImage,
    images.frontPocketImage,
    images.bottomImage
  ]);

  useEffect(() => {
    if (constructorData) {
      setConstructorValues(constructorById);
    }

    // if(constructorData){
    //   setConstructorValues(Object.keys(constructorById).reduce((acc, key) => {
    //     if (key !== 'name' && key !== '_id')
    //       acc[key] = constructorById[key][0];
    //     else
    //       acc[key] = constructorById[key];
    //     return acc;
    //   }, {}));
    //   toggleFirstlyFetched(true);
    // }
  }, [currentConstructorId]);

  // const {
  //   loading: constructorLoading,
  //   error: constructorError,
  //   data: fetchedConstructor,
  //   refetch
  // } = useQuery(getConstructorByModel, {
  //   variables: { id: '6043c1223e06ad3edcdb7b31'},
  //   // skip: !isFirtlyFetched
  // });

  // const constructorByModel = constructorLoading ? [] : fetchedConstructor.getConstructorByModel;

  // useEffect(() => {
  //   refetch();
  //   if(fetchedConstructor){
  //     setConstructorValues(Object.keys(fetchedConstructor.getConstructorByModel).reduce((acc, key) => {
  //       if (key !== 'name' && key !== '_id' && key !== 'model')
  //         acc[key] = fetchedConstructor.getConstructorByModel[key][0];
  //       else
  //         acc[key] = fetchedConstructor.getConstructorByModel[key];

  //       return acc;
  //     }, {}));
  //   }
  // }, [currentModel]);

  // const { isLoading, isError } = useIsLoadingOrError([constructorsLoading, constructorLoadingId], [constructorsError, constructorErrorId]);

  const availableModels2 = useMemo(() =>
    _.map(constructorsAll, options, [constructorsAll, language])
  );

  const availableBasics = useMemo(() =>
    _.map(constructorValues.basics, options, [constructorValues.basics, language])
  );

  const availablePatterns = useMemo(() =>
    _.map(constructorValues.patterns, options, [constructorValues.patterns, language])
  );

  const availableBottoms = useMemo(() =>
    _.map(constructorValues.bottoms, options, [constructorValues.bottoms, language])
  );

  const availableSizes = useMemo(() => _.map(values.sizes, sizeOptions));

  // if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <FormControl>
          <NativeSelect
            className={styles.mainHeader}
            name={constructorImageInput.MODEL}
            onChange={(e) => setCurrentConstructorId(e.target.value)}
          >
            {availableModels2}
          </NativeSelect>
          <FormHelperText>{t('common.model')}</FormHelperText>
        </FormControl>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.BASIC}
              onChange={(e) => setBasicsId(e.target.value)}
            >
              {availableBasics}
            </NativeSelect>
            <FormHelperText>{t('common.basis')}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.PATTERN}
              onChange={(e) => methods.changePattern(e.target.value)}
            >
              {availablePatterns}
            </NativeSelect>
            <FormHelperText>{t('common.pattern')}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.BOTTOM}
              onChange={(e) => methods.changeBottom(e.target.value)}
            >
              {availableBottoms}
            </NativeSelect>
            <FormHelperText>{t('common.bottom')}</FormHelperText>
          </FormControl>
          <FormControl>
            <NativeSelect
              name={constructorImageInput.SIZE}
              onChange={(e) => methods.changeSize(e.target.value)}
            >
              {availableSizes}
            </NativeSelect>
            <FormHelperText>{t('common.size')}</FormHelperText>
          </FormControl>
          <Button className={styles.button} onClick={showModal}>
            {t('buttons.moreOptions')}
          </Button>
        </form>
        <div className={styles.imageContainer}>
          {values.modelLoading && <Loader />}
          <canvas
            style={{
              display: values.modelLoading ? 'none' : 'block'
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
                  {prices.defaultPrice}
                  {getCurrentCurrency(currency)}
                </span>
              </li>
              <div className={`${styles.line} ${styles.topLine}`} />

              {constructorPartPrice(
                prices.priceBasic,
                prices.priceGobelen,
                prices.priceBottom,
                prices.priceSize
              ).map((item, index) =>
                item ? (
                  <li key={index} className={styles.priceItem}>
                    <span>{constructorPartNames(!language)[index]}</span>
                    <span>
                      +{item}
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
              {constructorEndPrice(prices.priceTotal)}
              {getCurrentCurrency(currency)}
            </span>
          </h2>
          <ConstructorSubmit />
        </div>
      </div>
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
    </div>
  );
};

export default ImagesConstructor;
