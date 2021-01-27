import React, { useEffect, useRef } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import mergeImages from 'merge-images';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './constructor.style';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';
import {
  getConstructorModelById,
  getModelForConstructor,
  setModelLoading
} from '../../redux/constructor/constructor-model/constructor-model.actions';
import { getConstructorBasic } from '../../redux/constructor/constructor-basic/constructor-basic.actions';
import { getConstructorPattern } from '../../redux/constructor/constructor-pattern/constructor-pattern.actions';
import { getConstructorBottom } from '../../redux/constructor/constructor-bottom/constructor-bottom.actions';
import { getConstructorFrontPocket } from '../../redux/constructor/constructor-front-pocket/constructor-front-pocket.actions';
import Loader from '../../components/loader';

const { MODEL, BASIC, PATTERN, BOTTOM } = CONSTRUCTOR_TITLES[0];

const Constructor = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    constructorModel,
    constructorBasic,
    constructorFrontPocket,
    constructorPattern,
    constructorBottom,
    modelLoading
  } = useSelector(({ Constructor }) => ({
    constructorModel: Constructor.constructorModel,
    constructorBasic: Constructor.constructorBasic,
    constructorFrontPocket: Constructor.constructorFrontPocket,
    constructorPattern: Constructor.constructorPattern,
    constructorBottom: Constructor.constructorBottom,
    modelLoading: Constructor.constructorModel.modelLoading
  }));

  const image = useRef(null);

  const currentModel = constructorModel.constructorModel;
  const models = constructorModel.modelsForConstructor;
  const basics = constructorModel.constructorModel.constructorBasic;
  const patterns = constructorModel.constructorModel.constructorPattern;
  const bottoms = constructorModel.constructorModel.constructorBottom;

  useEffect(() => {
    dispatch(getModelForConstructor());
  }, [dispatch]);

  useEffect(() => {
    console.log(modelLoading);
  }, [modelLoading]);

  useEffect(() => {
    if (models) {
      dispatch(getConstructorModelById(models[1]._id));
    }
  }, [models]);

  useEffect(() => {
    if (currentModel) {
      dispatch(setModelLoading(true));
      dispatch(getConstructorBasic(currentModel.constructorBasic[0]._id));
      dispatch(getConstructorFrontPocket('600068a5e13f421f58674b1d'));
      dispatch(getConstructorPattern(currentModel.constructorPattern[0]._id));
      dispatch(getConstructorBottom(currentModel.constructorBottom[0]._id));
    }
  }, [currentModel]);

  const createImage = (basic, bottom, frontPocket, pattern) => {
    mergeImages([frontPocket, basic, bottom, pattern], {
      height: 3000,
      weight: 460
    }).then((b64) => {
      dispatch(setModelLoading(false));
      image.current.src = b64;
    });
  };

  useEffect(() => {
    if (
      constructorBasic &&
      constructorBottom &&
      constructorFrontPocket &&
      constructorPattern
    ) {
      if (
        (constructorBasic.image,
        constructorBottom.image,
        constructorFrontPocket.image,
        constructorPattern.constructorImg)
      ) {
        createImage(
          constructorBasic.image,
          constructorBottom.image,
          constructorFrontPocket.image,
          constructorPattern.constructorImg
        );
      }
    }
  }, [
    constructorBasic,
    constructorBottom,
    constructorFrontPocket,
    constructorPattern
  ]);

  const changeModel = (id) => {
    dispatch(getConstructorModelById(id));
  };

  const changeBasic = (id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorBasic(id));
    dispatch(getConstructorFrontPocket('600068a5e13f421f58674b1d'));
  };

  const changePattern = (id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorPattern(id));
  };

  const changeBottom = (id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorBottom(id));
  };

  const availableModels = models
    ? models.map((obj) => (
      <option key={obj._id} value={obj._id}>
        {obj.name[0].value}
      </option>
    ))
    : null;

  const availableBasics = basics
    ? basics.map((obj) => (
      <option key={obj._id} value={obj._id}>
        {obj.name[0].value}
      </option>
    ))
    : null;

  const availablePatterns = patterns
    ? patterns.map((obj) => (
      <option key={obj._id} value={obj._id}>
        {obj.name[0].value}
      </option>
    ))
    : null;

  const availableBottoms = bottoms
    ? bottoms.map((obj) => (
      <option key={obj._id} value={obj._id}>
        {obj.name[0].value}
      </option>
    ))
    : null;

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.headingWrapper}>
        <FormControl>
          <InputLabel htmlFor='model-select'>{MODEL}</InputLabel>
          <NativeSelect
            className={styles.mainHeader}
            onChange={(e) => changeModel(e.target.value)}
            name='name'
          >
            {availableModels}
          </NativeSelect>
        </FormControl>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formWrapper}>
          <FormControl>
            <InputLabel htmlFor='main-material-select'>{BASIC}</InputLabel>
            <NativeSelect
              onChange={(e) => changeBasic(e.target.value)}
              name='name'
            >
              {availableBasics}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='pattern-select'>{PATTERN}</InputLabel>
            <NativeSelect
              onChange={(e) => changePattern(e.target.value)}
              name='name'
            >
              {availablePatterns}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='bottom-select'>{BOTTOM}</InputLabel>
            <NativeSelect
              onChange={(e) => changeBottom(e.target.value)}
              name='name'
            >
              {availableBottoms}
            </NativeSelect>
          </FormControl>
        </form>
        {modelLoading ? (
          <Loader />
        ) : (
          <img
            ref={image}
            id='constructor'
            className={styles.imageContainer}
            alt='Constructor'
          />
        )}
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
