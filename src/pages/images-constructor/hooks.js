import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectConstructor, selectLangAndCurrency } from '../../utils/multiple.selectors';
import {
  getConstructorModelById,
  getModelForConstructor,
  setModelLoading
} from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import { getConstructorBasic } from '../../redux/images-constructor/constructor-basic/constructor-basic.actions';
import { getConstructorFrontPocket } from '../../redux/images-constructor/constructor-front-pocket/constructor-front-pocket.actions';
import { getConstructorPattern } from '../../redux/images-constructor/constructor-pattern/constructor-pattern.actions';
import { getConstructorBottom } from '../../redux/images-constructor/constructor-bottom/constructor-bottom.actions';
import { getConstructorSize } from '../../redux/images-constructor/constructor-size/constructor-size.actions';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';

export const useConstructor = () => {
  const dispatch = useDispatch();
  const {
    constructorModel,
    currentModel,
    basicImage,
    frontPocketImage,
    patternImage,
    bottomImage,
    modelLoading,
    basicPrice,
    frontPocketPrice,
    bottomPrice,
    sizePrice
  } = useSelector(selectConstructor);
  const { language, currency } = useSelector(selectLangAndCurrency);
  const { DEFAULT_PRICE_VALUE } = CONSTRUCTOR_TITLES[currency];

  const models = constructorModel.modelsForConstructor;
  const basics = currentModel.eligibleOptions?.constructorBasic;
  const patterns = currentModel.eligibleOptions?.constructorPattern;
  const bottoms = currentModel.eligibleOptions?.constructorBottom;
  const { sizes } = currentModel;

  useEffect(() => {
    dispatch(getModelForConstructor());
  }, []);

  useEffect(() => {
    if (models) {
      dispatch(getConstructorModelById(models[0]._id));
    }
  }, [models]);

  useEffect(() => {
    if (currentModel.eligibleOptions) {
      const { constructorBasic, constructorFrontPocket, constructorPattern, constructorBottom } =
        currentModel.eligibleOptions;

      dispatch(setModelLoading(true));
      dispatch(getConstructorBasic(constructorBasic[0]._id));
      dispatch(getConstructorFrontPocket(constructorFrontPocket[0]._id));
      dispatch(getConstructorPattern(constructorPattern[0]._id));
      dispatch(getConstructorBottom(constructorBottom[0]._id));
      dispatch(getConstructorSize(currentModel.sizes[0]._id));
    }
  }, [currentModel]);

  const changeModel = useCallback((id) => {
    dispatch(getConstructorModelById(id));
  }, []);

  const changeBasic = useCallback((id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorBasic(id));
  }, []);

  const changePattern = useCallback((id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorPattern(id));
  }, []);

  const changeBottom = useCallback((id) => {
    dispatch(setModelLoading(true));
    dispatch(getConstructorBottom(id));
  }, []);

  const changeSize = useCallback((id) => {
    dispatch(getConstructorSize(id));
  }, []);

  const priceTotal = useMemo(() => {
    if (basicPrice && frontPocketPrice && bottomPrice && sizePrice) {
      return (
        basicPrice[currency].value +
        frontPocketPrice[currency].value +
        bottomPrice[currency].value +
        sizePrice[currency].value
      );
    }
  }, [basicPrice, frontPocketPrice, bottomPrice, sizePrice, currency]);

  const priceBasic = useMemo(() => {
    if (basicPrice) return basicPrice[currency].value;
  }, [basicPrice, currency]);

  const priceGobelen = useMemo(() => {
    if (frontPocketPrice) return frontPocketPrice[currency].value;
  }, [frontPocketPrice, currency]);

  const priceSize = useMemo(() => {
    if (sizePrice) return sizePrice[currency].value;
  }, [sizePrice, currency]);

  const priceBottom = useMemo(() => {
    if (bottomPrice) return bottomPrice[currency].value;
  }, [bottomPrice, currency]);

  return {
    values: {
      models,
      basics,
      patterns,
      bottoms,
      sizes,
      modelLoading
    },
    images: {
      basicImage,
      frontPocketImage,
      patternImage,
      bottomImage
    },
    methods: {
      dispatch,
      changeModel,
      changeBasic,
      changePattern,
      changeBottom,
      changeSize
    },
    prices: {
      priceTotal,
      priceBasic,
      priceGobelen,
      priceBottom,
      priceSize,
      DEFAULT_PRICE_VALUE
    },
    language,
    currency
  };
};
