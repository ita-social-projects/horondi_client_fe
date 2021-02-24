import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectConstructor } from '../../redux/selectors/multiple.selectors';
import {
  getConstructorModelById,
  getModelForConstructor,
  setModelLoading
} from '../../redux/images-constructor/constructor-model/constructor-model.actions';
import { getConstructorBasic } from '../../redux/images-constructor/constructor-basic/constructor-basic.actions';
import { getConstructorFrontPocket } from '../../redux/images-constructor/constructor-front-pocket/constructor-front-pocket.actions';
import { getConstructorPattern } from '../../redux/images-constructor/constructor-pattern/constructor-pattern.actions';
import { getConstructorBottom } from '../../redux/images-constructor/constructor-bottom/constructor-bottom.actions';

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
    bottomPrice
  } = useSelector(selectConstructor);

  const models = constructorModel.modelsForConstructor;
  const basics = currentModel.constructorBasic;
  const patterns = currentModel.constructorPattern;
  const bottoms = currentModel.constructorBottom;

  useEffect(() => {
    dispatch(getModelForConstructor());
  }, []);

  useEffect(() => {
    if (models) {
      dispatch(getConstructorModelById(models[0]._id));
    }
  }, [models]);

  useEffect(() => {
    if (currentModel) {
      dispatch(setModelLoading(true));
      dispatch(getConstructorBasic(currentModel.constructorBasic[0]._id));
      dispatch(getConstructorFrontPocket(currentModel.constructorFrontPocket[0]._id));
      dispatch(getConstructorPattern(currentModel.constructorPattern[0]._id));
      dispatch(getConstructorBottom(currentModel.constructorBottom[0]._id));
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

  return {
    values: {
      models,
      basics,
      patterns,
      bottoms,
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
      changeBottom
    },
    prices: {
      basicPrice,
      frontPocketPrice,
      bottomPrice
    }
  };
};
